import { LayoutState } from '@/utils/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type


// Create the slice
const layoutSlice = createSlice({
    name: 'layout', // Change name to 'layout' for clarity
    initialState: {
        isFullScreen: false,
    } as LayoutState, // Type the initial state
    reducers: {
        setFullScreen(state, action: PayloadAction<boolean>) { // Add type to action.payload
            state.isFullScreen = action.payload;
        },
    },
});

// Export actions
export const { setFullScreen } = layoutSlice.actions; // Export the correct action

// Export the reducer
export default layoutSlice.reducer;
