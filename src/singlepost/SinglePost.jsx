import './SinglePost.css'

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg"
            src='https://www.teahub.io/photos/full/219-2199857_thomas-shelby-and-horse.jpg'
            alt=''
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor adipisicing elit.
                <div className="singlePostEdit">
                <i className="singlePostEditIcon fa-solid fa-pen"></i>
                <i className="singlePostEditIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b> Jaskirat </b></span>
                <span className="singlePostDate">1 Hour Ago</span>
            </div>
            <p className="singlePostContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi doloremque vitae laborum quibusdam recusandae aliquid
                 quaerat culpa similique omnis eum eaque quae, laudantium odit adipisci, neque saepe inventore unde cum.
            </p>
        </div>
    </div>
  )
}

export default SinglePost