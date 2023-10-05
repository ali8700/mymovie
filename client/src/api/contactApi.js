import axios from 'axios'


 export const fetchContacts =async()=>{
    const {data} = await axios.get(`http://localhost:5002/api/user`);
    return data 
}

export const postContact = async(values)=>{
    const addingContact = await axios.post(`http://localhost:5002/api/user`,{...values})

}


export   const deletContact=async(id)=>{
    
    const deletCont = await axios.delete(`http://localhost:5002/api/user/${id}`)

}



export const updateCont = async(id,value)=>{
    const updatedContact = await axios.put(`http://localhost:5002/api/user/${id}`,value)
    
}

export const GetUniqueContact = async (id,value)=>{
    const {data} = await axios.get(`http://localhost:5002/api/user/${id}`,value)
    return data
}