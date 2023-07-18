import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);


const ContextAPI = ({children}) => {

    // Create json web token function is here
    const createtoken = (user)=>{
        fetch("http://localhost:3000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => res.json()).then(data=> {
          localStorage.setItem('access-token',data.token)
        })
    };
    
    const authValue = {
        createtoken
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;