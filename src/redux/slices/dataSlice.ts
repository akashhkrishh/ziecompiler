import { DataProps } from "@/utils/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: DataProps = {
    language_id: 71,
    language_name: "",
    stdin: "",
    source_code: " ",
    output: null,
    error: null,
    loading: false,
    status: null,
    language_title:"",
    fileName:""
};


// Create an async thunk for submitting code
export const submitCode = createAsyncThunk('data/submitCode', async (data) => {
    const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // Check if the response is OK
    if (!response.ok) {
        throw new Error('Failed to submit code');
    }
    const result = await response.json();
    // setOutput(result)
    return result; // Adjust according to your API response structure
});

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setLanguageId(state, action) {
            state.language_id = action.payload;
        },
        setLanguageName(state, action) {
            state.language_name = action.payload;
        },
        setLanguageTitle(state, action) {
            state.language_title = action.payload;
        },
        setStdin(state, action) {
            state.stdin = action.payload;
        },
        setSourceCode(state, action) {
            state.source_code = action.payload;
        },
        setOutput(state, action) {
            state.output = action.payload;
        },
        
        setFileName(state, action) {
            state.fileName = action.payload;
        },
        
        
    
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitCode.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "Running"
            })
            .addCase(submitCode.fulfilled, (state, action) => {
                state.loading = false;
                state.output = action.payload; // Adjust this based on your API response
                // Adjust according to response structure
                if(action.payload.status.description == 'Runtime Error (NZEC)'){
                    state.status = "Runtime Error"
                }else if(action.payload.status.description == 'Compilation Error'){
                    state.status = "Compile Error"
                }else{
                    state.status = "Finish"; 
                    
                }
            })
            .addCase(submitCode.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                 state.status = "error"
            });
    },
});

export const { setSourceCode, setFileName, setLanguageTitle, setStdin, setLanguageName, setOutput, setLanguageId } = dataSlice.actions;
export default dataSlice.reducer;
