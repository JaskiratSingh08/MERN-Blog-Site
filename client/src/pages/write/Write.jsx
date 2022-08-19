import { useContext, useState } from 'react'
import './Write.css'
import axios from "axios"
import { Context } from '../../context/Context';

function Write() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc
        }
        
        axios.post("/posts",)
    }

  return (
    <div className="write">
        <img 
        className='writeImg'
        src="https://www.teahub.io/photos/full/54-547630_beautiful-landscape-wallpapers-for-iphone-on-hd-wallpaper.jpg" 
        alt="" />
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileinput">
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileinput' style={{display:"none"}}/>
                <input type="text" placeholder='title' className="writeInput" autofocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea id="" cols="30" rows="10" placeholder='Tell Your Story...'
                type="text"
                className='writeInput writeText'>

                </textarea>
            </div>
            <button className="writeSubmit" type='submit'>Post</button>
        </form>
    </div>
  )
}

export default Write