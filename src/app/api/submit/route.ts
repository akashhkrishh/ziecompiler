// app/api/submit/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { source_code, language_id, stdin } = await request.json();

    // Validate input data
    if (!source_code || !language_id) {
      return NextResponse.json({ error: 'Missing required fields: source_code or language_id' }, { status: 400 });
    }

    // Call the Judge0 API
    const response = await fetch(process.env.JUDGE0_URL+'/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_code,
        language_id,
        stdin,
      
      }),
    });

    // Check if the response from Judge0 API is okay
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error from Judge0 API: ${response.status} ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    const token = data.token; // Assuming the response includes a `token`

    // Polling for the submission status
    let finalResult;
    const maxRetries = 10; // Maximum number of attempts to check the status
    const pollingInterval = 3000; // Time between each polling attempt in milliseconds

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      // Construct the status check URL
      const statusUrl = `${process.env.JUDGE0_URL}/submissions/${token}`;
      
      // Check the submission status
      const statusResponse = await fetch(statusUrl, {
        method: 'GET',
      });

      // Handle the status response
      if (!statusResponse.ok) {
        console.error(`Error checking status: ${statusResponse.statusText}`);
        break; // Exit the polling loop if there's an error
      }

      finalResult = await statusResponse.json();

      // Check if the status indicates the submission is completed
      if (finalResult.status && finalResult.status.id !== 1) { // Assuming status.id == 1 means "in queue"
        break; // Exit the loop if the submission is no longer in the queue
      }

      // Wait before the next polling attempt
      await new Promise((resolve) => setTimeout(resolve, pollingInterval));
    }

    return NextResponse.json(finalResult); // Send the final result back to the client

  } catch (error) {
    console.error('Error submitting code:', error);
    return NextResponse.json({ error: error || 'Error submitting code' }, { status: 500 });
  }
}
