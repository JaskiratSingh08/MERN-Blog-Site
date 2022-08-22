import './SinglePost.css'
import {useLocation} from "react-router"
import {useState,useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'

function SinglePost() {
    const PF = "http://localhost:4000/images/";
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const [post,setPost]= useState({});
    const {user} = useContext(Context) ;
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get('/posts/'+ path);
            setPost(res.data)
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost()
    },[path])

    const handleDelete= async ()=>{
        try{
            await axios.delete(`/posts/${post._id}`, 
            { data : {username:user.username} })
            window.location.replace("/")
            //setUpdateMode(false)
            
        }catch(err){
            console.log(err)
        }
    }

    const handleUpdate = async ()=>{
        try{
            await axios.put(`/posts/${post._id}`, 
            {username:user.username, title, desc })
            window.location.reload();
            
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {post.photo &&  
                (
            <img className="singlePostImg"
            src={PF + post.photo}
            alt=''
            />
            )}
            {updateMode ? (
                <input 
                type="text" 
                value={title} 
                className="singlePostTitleInput"
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}/>
            ) :
            (

                <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username &&(
                    <div className="singlePostEdit">
                        <i className="singlePostEditIcon fa-solid fa-pen" onClick={()=>setUpdateMode(true)}></i>
                        <i className="singlePostEditIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                    </div>
                )}
            </h1>
                )}
            <div className="singlePostInfo">
                <Link to={`/?user=${post.username}`} style={{textDecoration:"none",color:"inherit"}}>
                    <span className="singlePostAuthor">Author: <b> {post.username} </b></span>
                </Link>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? (
                <textarea className="singlePostContentInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            ) : (

                <p className="singlePostContent">
                {desc}
            </p>
                )}
                {updateMode &&
                <button 
                className="singlePostButton" 
                onClick={handleUpdate}>UPDATE</button>
            }
        </div>
    </div>
  )
}

export default SinglePost