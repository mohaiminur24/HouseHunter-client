import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);


const ContextAPI = ({children}) => {
  const [isLoading, setLoading] = useState(false);

    // Create json web token function is here
    const createtoken = (user)=>{
        fetch("https://househunter-lake.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => res.json()).then(data=> {
          localStorage.setItem('access-token',data.token);
          setLoading(false);
        })
    };
    
    const authValue = {
        createtoken,
        isLoading,
        setLoading

    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;