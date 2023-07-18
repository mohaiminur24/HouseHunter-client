import React from 'react';

const SetUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export default SetUser;