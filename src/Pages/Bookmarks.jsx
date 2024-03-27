import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../Components/BlogCard";
import Empty from "../Components/Empty";


const Bookmarks = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handelout = id =>{
        deleteBlog(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if(blogs.length < 1) return <Empty message={"No Bookmark Added"} address={'/blogs'} ></Empty>
    return (
        <div className="grid px-4 sm:px-8 lg:16 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                       
        {blogs.map(blog => (<BlogCard key={blog.id} blog={blog} deletAble={true} handelout={handelout} ></BlogCard>))}       

      
      
    </div>
    );
};

export default Bookmarks;