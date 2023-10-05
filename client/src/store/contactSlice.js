import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name:'contact',
    initialState:[
        {
           
            name:"meriam",
            age:28,
            email:"bensalah@gmail.com"
        }
    ],
    reducers:{


        setContacts:(state,action)=>{
            return action.payload;
      }



    }
})

export const {setContacts} = contactSlice.actions

export default contactSlice.reducer