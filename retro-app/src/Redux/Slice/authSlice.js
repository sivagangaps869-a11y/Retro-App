
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerAPI, getUsersAPI } from '../../Services/allAPI'

// REGISTER
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userDetails) => {
        const result = await getUsersAPI();

        const existingUser = result.data.find(
            item => item.email === userDetails.email
        );

        if (existingUser) {
            alert("Email already registered");
            throw new Error("Email already registered");
        }

        const response = await registerAPI(userDetails);
        return response.data;
    }
);

// LOGIN
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginDetails) => {
        const result = await getUsersAPI();

        const user = result.data.find(
            item =>item.email === loginDetails.email && item.password === loginDetails.password
        );

        if (user) {
            const safeUser = {
                id: user.id,
                name: user.name,
                email: user.email
            };

            localStorage.setItem("loggedUser", JSON.stringify(safeUser));

            alert("Login successful");

            return safeUser;
        }
        else {
            alert("Invalid email or password");
            throw new Error("Invalid email or password");
        }
    }
);

const authSlice = createSlice({
    name: "auth",

    initialState: {
        currentUser: JSON.parse(
            localStorage.getItem("loggedUser") || "null"
        ),
        loading: false,
        error: ""
    },

    reducers: {
        logout: (state) => {
            state.currentUser = null;
            
        }
    },

    extraReducers: (builder) => {

    // REGISTER
    builder.addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
    });

    builder.addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = "";
    });

    builder.addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Registration failed";
    });

    // LOGIN
    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = "";
    });

    builder.addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = "";
    });

    builder.addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
    });
}
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
