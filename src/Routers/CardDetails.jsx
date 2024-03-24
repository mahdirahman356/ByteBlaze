import { useState } from "react";
import { NavLink,  Outlet,  useLoaderData } from "react-router-dom";
// import Content from "../Tabs/Content";
import { MdBookmarkAdd } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

     

const CardDetails = () => {
    let cardDetails = useLoaderData()
    let {reading_time_minutes,title,published_at,comments_count,positive_reactions_count} = cardDetails
    console.log(cardDetails)
    let [tabs , setTabs] = useState(0)

    let handleBookMark = ()=> {
         toast.success('blood bookmarked successfully')
    }
    return (
        <div className=" w-[90%] md:w-[80%] lg:w-[50%] mx-auto space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold mt-12 md:mt-32">{title}</h1>
            <div className="flex flex-col text-gray-700 gap-1 md:flex-row justify-between">
               <div className="flex gap-5">
               <p>{reading_time_minutes} min read</p>
               <li>{published_at} </li>
               </div>
               <div className="flex gap-5">
                <p>{comments_count} comments</p>
                <div className="flex items-center gap-1">
                <li>{positive_reactions_count} 
                </li>
                <span> views</span>
                </div>
               </div>
            </div>
     
     <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800">

     <NavLink 
    to="content"
    onClick={()=>setTabs(0)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 0 ? "border border-b-0 ": "border-b"} rounded-t-lg border-b dark:border-gray-300 dark:text-gray-600`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
    </NavLink>


		
  <NavLink
    to="author" 
    onClick={()=>setTabs(1)}
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 1 ? "border border-b-0 ": "border-b"} rounded-t-lg dark:border-gray-300 dark:text-gray-900`}>  
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Author</span>
    </NavLink>
       <div onClick={handleBookMark} className="ml-3 bg-gray-200 flex justify-center items-center p-2 rounded-full">
       <MdBookmarkAdd className=" text-[20px] text-pink-400"/>
       </div>
       <Toaster></Toaster>
    </div> 
    <Outlet></Outlet>

    </div>
    );
};

export default CardDetails;