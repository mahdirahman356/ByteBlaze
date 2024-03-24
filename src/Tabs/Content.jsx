import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";


const Content = () => {
    let content = useLoaderData()
    let {cover_image,tags,title,description,body_html} = content
    const contentString = typeof body_html === 'object' ? JSON.stringify(body_html) : body_html;

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
                     


                <div className="">
                <Markdown rehypePlugins={[rehypeRaw]}>
                     {contentString}
                   </Markdown>
                </div>
                   
                 </div> 
             </div>
        </div>
    );
};

export default Content;