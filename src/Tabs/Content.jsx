import { useLoaderData } from "react-router-dom";

const Content = () => {
    let cardDetails = useLoaderData()
    let {cover_image,tags,title,description} = cardDetails
    return (
        <div>
           <div className="border-2 border-gray-300 p-3 space-y-5">
                <img className="rounded-md" src={cover_image} alt="" />
                <div className="flex flex-col md:flex-row justify-between w-full md:w-[70%]">
                  {tags.map((tags,index)=> <p key={index}>#{tags}</p>)}
                </div>
                 
                 <div>
                    <p className="font-bold">{title}</p>
                    <p>{description}</p>
                    {/* <Markdown remarkPlugins={[rehypeRaw]}>{body_html}</Markdown> */}
                    {/* <p>{body_html}</p> */}
                 </div> 
             </div>
        </div>
    );
};

export default Content;