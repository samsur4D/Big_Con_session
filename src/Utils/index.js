import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

export const getBlogs = () =>{
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs
}

export const  saveBlog = blog =>{
    let blogs = getBlogs()
    const isExists = blogs.find(b => b.id === blog.id)
    if(isExists){
        return toast.error('Already Exists to  Bookmark')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully')
}



export const deleteBlog = id =>{
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Delete succesfully')
}