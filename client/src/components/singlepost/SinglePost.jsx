import './SinglePost.css'
import {useLocation} from "react-router"
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const [post,setPost]= useState({});

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get('/posts/'+ path);
            setPost(res.data)
        }
        getPost()
    },[path])
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo &&  
            
            <img className="singlePostImg"
            src={post.photo}
            alt=''
            />
            }
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostEditIcon fa-solid fa-pen"></i>
                <i className="singlePostEditIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <Link to={`/?user=${post.username}`} style={{textDecoration:"none",color:"inherit"}}>
                    <span className="singlePostAuthor">Author: <b> {post.username} </b></span>
                </Link>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePostContent">
                {post.desc}
            </p>
        </div>
    </div>
  )
}

export default SinglePost