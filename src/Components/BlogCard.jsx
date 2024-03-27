import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { deleteBlog } from "../Utils";

const BlogCard = ({blog , deletAble , handelout}) => {
    const {cover_image , title ,description , published_at , id} = blog ;
    
    return (
    <div className="flex relative mt-16">  
     <Link to={`/blogs/${id}`} rel="noopener noreferrer" href="#" 
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
                    src={cover_image || placeholderImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
                {deletAble &&  <div onClick={()=>handelout(id)} className="text-black text-3xl absolute bg-red-300 p-5 text-purple-800 rounded-full hover:scale-105 -top-5 -right-0 mr-5">
                    <RiDeleteBin2Fill size={20} className="group-hover:text-primary"/>
                    </div>}
                </div>        
    );
};

export default BlogCard;