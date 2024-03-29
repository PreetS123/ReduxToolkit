import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  users: [],
  searchQuery: [],
};

// create user
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://65a3f08aa54d8e805ed43c94.mockapi.io/todo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// get all user
export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://65a3f08aa54d8e805ed43c94.mockapi.io/todo",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

//delete user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://65a3f08aa54d8e805ed43c94.mockapi.io/todo/${id}`,
        {
          method: "DELETE",
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// update users
export const updateUser = createAsyncThunk(
  "updateUser",
  async (update, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://65a3f08aa54d8e805ed43c94.mockapi.io/todo/${update.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(update),
        }
      );
      const result = await response.json();
      // console.log("res",result);
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const userDetail = createSlice({
  name: "User details",
  initialState,
  reducers: {
    searchUser: (state, action) => {
      // console.log('redux',action.payload);
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = [...state.users, action.payload];
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getAllUsers.pending]: (state) => {
      state.loading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((el) => el.id != id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users?.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
