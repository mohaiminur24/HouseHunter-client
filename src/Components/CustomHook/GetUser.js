const GetUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default GetUser;