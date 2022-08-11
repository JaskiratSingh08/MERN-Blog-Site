import './Write.css'

function Write() {
  return (
    <div className="write">
        <img 
        className='writeImg'
        src="https://www.teahub.io/photos/full/54-547630_beautiful-landscape-wallpapers-for-iphone-on-hd-wallpaper.jpg" 
        alt="" />
        <form className="writeForm">
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
            <button className="writeSubmit">Post</button>
        </form>
    </div>
  )
}

export default Write