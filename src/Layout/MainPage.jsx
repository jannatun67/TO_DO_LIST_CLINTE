/* eslint-disable no-unused-vars */
import { IoLogoGoogleplus } from "react-icons/io";
import taskLogo from '../assets/task.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const MainPage = () => {
    const {googleLogin,user}= useContext(AuthContext)
    const navigate= useNavigate()

    const loginWithGoogleHandle = async () => {
        try {
            const userCredential = await googleLogin();
            const user = userCredential.user;
            console.log(user);
            
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };

            // ✅ FIX: Handle API response
            const res = await axios.post("https://to-do-list-server-site.onrender.com/users", userData);
            console.log(res.data);
           
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "user Added successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
             
            
        } catch (error) {
            console.error("Login Error:", error);
            
        }
    };

    return (
        <div className="flex justify-evenly gap-3 items-center pt-20">
           <div>
            <img src={taskLogo} alt="" />
           </div>
           <div>
            <div>
            <h2 className="text-4xl md:text-6xl py-10 font-semibold">Join this page</h2>
            </div>
            <div>
                <button onClick={loginWithGoogleHandle} className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-4xl"><span className="text-2xl"><IoLogoGoogleplus /></span> Sign Up with Google</button>
            </div>
           </div>
        </div>
    );
};

export default MainPage;