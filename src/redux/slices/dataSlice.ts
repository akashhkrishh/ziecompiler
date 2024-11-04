import { DataProps, SubmitCodePayload } from "@/utils/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state for your slice
const initialState: DataProps = {
    language_id: 71,
    language_name: "",
    stdin: "",
    source_code: "",
    output: null,
    error: null,
    loading: false,
    status: null,
    language_title: "",
    fileName: ""
};



// Create an async thunk for submitting code
// @ts-nocheck
export const submitCode = createAsyncThunk<any, SubmitCodePayload, { rejectValue: string }>(
    'data/submitCode',
    async (data, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit code');
            }
            return await response.json(); // Adjust according to your API response structure
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    }
);

const dataSlice = createSlice({
    name: "data",
    initialState,
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
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitCode.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "Running";
            })
            .addCase(submitCode.fulfilled, (state, action) => {
                state.loading = false;
                state.output = action.payload; // Adjust based on your API response
                if (action.payload.status.description === 'Runtime Error (NZEC)') {
                    state.status = "Runtime Error";
                } else if (action.payload.status.description === 'Compilation Error') {
                    state.status = "Compile Error";
                } else {
                    state.status = "Finish"; 
                }
            })
            .addCase(submitCode.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to submit code';
                state.status = "Error";
            });
    },
});

// Export actions
export const { setSourceCode, setStatus,setFileName, setLanguageTitle, setStdin, setLanguageName, setOutput, setLanguageId } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
