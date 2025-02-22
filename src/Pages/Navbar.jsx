
import { useContext } from 'react';
import logo from '../assets/task.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router';

const Navbar = () => {
    const {user,logOut}= useContext(AuthContext)

    const handelLogOut = ()=>{
        logOut()
        .then(() => {
           
          }).catch((error) => {
           console.log(error);
          });
    }
  return (
    <div className='bg-purple-600 sticky top-0 z-20'>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink className="text-white" to="/">Home</NavLink></li>
       
        <li><NavLink className="text-white" to="/ManageAllTask">ManageAllTask</NavLink></li>
      </ul>
          </div>
          <a><img className='w-[70px] h-[60px] rounded-2xl object-cover' src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><NavLink className="text-white" to="/">Home</NavLink></li>
     
      <li><NavLink className="text-white" to="/ManageAllTask">ManageAllTask</NavLink></li>
    </ul>
        </div>
        <div className="navbar-end">
          
         {
            user?<div className='flex gap-3 items-center'><img className='w-[50px] rounded-4xl ' src={`${user?.photoURL}`}  referrerPolicy="no-referrer" alt="" /> <div><button onClick={handelLogOut} className='btn'>Log-Out</button></div></div>:<></>
         }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
