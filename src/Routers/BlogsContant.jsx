import PropTypes from 'prop-types'; 
import images from './images/404.jpg'
import { Link } from 'react-router-dom';
const BlogsContant = ({blogs}) => {
    console.log(blogs)
    let {id,cover_image,title,description,published_at} = blogs
    return (
        <div>
         <Link to={`/blog/${id}`}>
         <div className="shadow-xl transition hover:scale-105 h-[500px]">
        <a rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 text-black">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || images} />
				<div className="p-5 space-y-2">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<span className="text-xs text-gray-400">{published_at}</span>
					<p>{description}</p>
				</div>
			</a>
        </div>
    </Link>   
        
        </div>
    );
};
BlogsContant.propTypes ={
    blogs: PropTypes.object.isRequired
}
export default BlogsContant;