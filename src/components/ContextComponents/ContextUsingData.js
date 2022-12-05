import React,{useState} from "react";

export const UserUsingContext = React.createContext();

function ContextUsingData({children}){
    let [users,SetusersState] = useState([{
        name:"Sai",
        email:"sai@gmail.com",
        mobile:"4237950832",
        Address:"#34, Ram street, chennai.",
        Batch:"WEB38T",
        timings:"11am to 2pm"
        
        },
        {
         name:"John",
        email:"John@gmail.com",
        mobile:"253747837",
        Address:"#8, SVG nager, Madurai.",
        Batch:"WEB38T",
        timings:"11am to 2pm"
        },{
         name:"Kamal",
        email:"kamal@gmail.com",
        mobile:"756389435",
        Address:"#76, TVK nager, Chennai",
        Batch:"WEB38T",
        timings:"11am to 2pm"
        },{
         name:"Raaj",
        email:"raaj@gmail.com",
        mobile:"756389435",
        Address:"#76, TVK nager, Chennai",
        Batch:"WEB38T",
        timings:"11am to 2pm"
        }]
       )
    return <UserUsingContext.Provider value={{users,SetusersState}}>
        {children}
    </UserUsingContext.Provider>
}
export default ContextUsingData;