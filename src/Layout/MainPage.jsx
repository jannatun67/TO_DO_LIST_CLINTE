import { IoLogoGoogleplus } from "react-icons/io";
import taskLogo from '../assets/task.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MainPage = () => {
    const {googleLogin,user}= useContext(AuthContext)
    const navigate= useNavigate()

    const handelGoogle = ()=>{
        googleLogin()
        .then(result =>{
            console.log(result);
            if (result?.user) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
            }
        })
        .catch((error) => {
           console.log(error);
          });
    }

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
                <button onClick={handelGoogle} className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-4xl"><span className="text-2xl"><IoLogoGoogleplus /></span> Sign Up with Google</button>
            </div>
           </div>
        </div>
    );
};

export default MainPage;