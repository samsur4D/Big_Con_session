import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const Content = () => {
    const blog = useLoaderData()
    const {cover_image , title ,description , published_at , id , tags , body_html} = blog ;
    return (
        <div to={`/blogs/${id}`} rel="noopener noreferrer" href="#" 
        className=" mx-auto group  border-opacity-30 border-5 p-2   dark:bg-gray-50">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
                    src={cover_image || placeholderImage} />
                       <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {tags.map(tag => ( <a key={tag } rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">${tag}</a>))}
               
                
            </div>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            
                </div>
    );
};

export default Content;