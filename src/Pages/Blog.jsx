import React, { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Components/Loader";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { saveBlog } from "../Utils";

const Blog = () => {

const [tabIndex , setTabIndex] = useState(0)
const navigation = useNavigation()

    const blog = useLoaderData();
    const { comment_count ,published_at, title , reading_time_minutes , public_reactions_count ,tags } = blog ;

    const handelBookmark = blog =>{
        console.log(blog);
        saveBlog(blog)
    }

    if(navigation.state === 'loading' )return <Loader></Loader>

    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                    <div className="flex items-center md:space-x-10">
                       
                        <p className="text-sm">{reading_time_minutes} min read</p>
                        <p className="text-sm">{new Date(published_at).toLocaleDateString()}</p>
                    </div>
                   <div className="flex gap-5">
                   <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{public_reactions_count}comment📞  .</p>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{public_reactions_count} views💚💛</p>
                   </div>
                </div>
                <div>
                    
                </div>
                {/* ------------ */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link to=''
    onClick={()=> setTabIndex(0)}
    rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3
    space-x-2 
       ${tabIndex === 0? 'border border-b-5 border-b-[#8e44ad] bg-purple-200' : 'border-b'}
     rounded-t-lg dark:border-gray-600
     dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Content</span>
	</Link>
	<Link to={`author`}
    onClick={()=> setTabIndex(1)}
    rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3
                                                      space-x-2 
                                                         ${tabIndex === 1? 'border border-b-5 border-b-[#8e44ad] bg-purple-200' : 'border-b'}
                                                       rounded-t-lg dark:border-gray-600
                                                       dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Authoor</span>
	</Link>

    {/* button */}
    <div onClick={() => handelBookmark(blog)} className="p-3 ml-3 bg-blue-900 cursor-pointer rounded-full bg-opacity-20 hover:bg-opacity-30">
    <BsFillBookmarkStarFill className="text-purple-600"/>
    </div>
	
</div>
                {/* ------------- */}
            </div>
            <div className="dark:text-gray-800">
                <p>{}comment_count</p>
            </div>
            <Outlet></Outlet>
        </article>
        <div>
         
            
        </div>
    </div>
    );
};

export default Blog;