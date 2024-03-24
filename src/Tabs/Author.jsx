import { useLoaderData } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Author = () => {
    let author = useLoaderData()
    let {user} = author
    return (
        <div className="mt-12">
                   <div className="card mx-auto bg-base-100">
                   <div className="avatar">
             <div className="w-24 mx-auto rounded-full">
             <img src={user.profile_image} />
             </div>
           </div>
           
         <div className="  text-center space-y-2 my-2">
           <h2 className="text-[23px] font-bold">{user.name}</h2>
           <p>User Name : {user.username}</p>
           <div className="flex justify-center gap-5 border-t-gray-300  border-t-[1px] pt-5 mt-3">
           <FaGithub />
           <FaFacebook />
           <IoLogoInstagram />

           </div>
         </div>
       </div>
        </div>
    );
};

export default Author;