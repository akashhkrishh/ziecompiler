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
    const response = await fetch(process.env.JUDGE0_URL+'/submissions?wait=true', {
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
    return NextResponse.json(data)



  } catch (error) {
    console.error('Error submitting code:', error);
    return NextResponse.json({ error: error || 'Error submitting code' }, { status: 500 });
  }
}
