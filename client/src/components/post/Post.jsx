import { Link } from 'react-router-dom'
import './Post.css'

function Post({post}) {
  const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} style={{textDecoration:"none", color:"inherit"}}>
      {post.photo &&
        <img className="postImg"
        src={PF + post.photo}
        alt=""
        />}
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c)=>(
                <span className="postCat">{c.name}</span>
              ))}
            </div>
            <span className="postTitle">{post.title}</span>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">
          {post.desc}
        </p>

      </Link>
    </div>
  )
}

export default Post