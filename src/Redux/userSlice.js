import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
{
    name:"users",
    initialState:{
        users:null
    },
    reducers:{
        addUser:(state, action)=>{
        state.users = action.payload;
        },
        removeUser:(state, action)=>{
            if (state.users) {
                state.users = state.users.filter(user => user.id !== action.payload.id);
              }
        }
    }
}
)

export const {addUser, removeUser} = userSlice?.actions;
export default userSlice.reducer;