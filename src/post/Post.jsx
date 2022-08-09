import './Post.css'

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://www.teahub.io/photos/full/231-2317254_jacqueline-fernandez-photos-hd.jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <hr/>
            <span className="postDate">1 Hour Ago</span>
        </div>
        <p className="postDescription">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt, exercitationem nulla sapiente pariatur, autem eos reprehenderit porro deleniti iusto dolore dolorem veritatis obcaecati in voluptate. Saepe et error cumque!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt, exercitationem nulla sapiente pariatur, autem eos reprehenderit porro deleniti iusto dolore dolorem veritatis obcaecati in voluptate. Saepe et error cumque!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt, exercitationem nulla sapiente pariatur, autem eos reprehenderit porro deleniti iusto dolore dolorem veritatis obcaecati in voluptate. Saepe et error cumque!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sunt, exercitationem nulla sapiente pariatur, autem eos reprehenderit porro deleniti iusto dolore dolorem veritatis obcaecati in voluptate. Saepe et error cumque!
        </p>

    </div>
  )
}

export default Post