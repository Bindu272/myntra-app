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
            return null;
        }
    }
}
)

export const {addUser, removeUser} = userSlice?.actions;
export default userSlice.reducer;