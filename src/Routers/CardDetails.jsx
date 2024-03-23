import { NavLink,  Outlet,  useLoaderData } from "react-router-dom";
// import Content from "../Tabs/Content";
// import Markdown from 'react-markdown'
// import rehypeRaw from "rehype-raw";


const CardDetails = () => {
    let cardDetails = useLoaderData()
    let {reading_time_minutes,title,published_at,comments_count,positive_reactions_count} = cardDetails
    console.log(cardDetails)
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

            <div className="flex  items-center -mx-4 overflow-x-auto">
	<NavLink 
    to="content"
      className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b  dark:text-gray-600`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
    </NavLink>
	<NavLink
     to="author"
    className={`${({isActive})=> isActive && "text-red-600"}flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg> */}
		Author
	
    </NavLink>
</div>
     <Outlet></Outlet>

            {/* <Content></Content> */}

            {/* <div className="border-2 border-gray-300 p-3 space-y-5">
                <img className="rounded-md" src={cover_image} alt="" />
                <div className="flex flex-col md:flex-row justify-between w-full md:w-[70%]">
                  {tags.map((tags,index)=> <p key={index}>#{tags}</p>)}
                </div>
                 
                 <div>
                    <p className="font-bold">{title}</p>
                    <p>{description}</p>
                    <Markdown remarkPlugins={[rehypeRaw]}>{body_html}</Markdown>
                    <p>{body_html}</p>
                 </div>
            </div> */}

        </div>
    );
};

export default CardDetails;