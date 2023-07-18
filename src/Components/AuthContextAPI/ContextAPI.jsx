import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);


const ContextAPI = ({children}) => {
    const authValue = {
        
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;