import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";


const PrivetRoute = ({children}) => {
    const {loading,user}= useContext(AuthContext)

    if (loading) {
        return <h2> Loading.....</h2>
    }
    if (user) {
        return children
    }
    return <Navigate to='/MainPage'></Navigate>
};

export default PrivetRoute;