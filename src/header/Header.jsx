import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesm'>React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img className="headerImg" 
      src='https://media.gettyimages.com/photos/many-cut-and-complete-oranges-in-dark-and-warm-colors-picture-id1404547807?s=2048x2048' 
      alt='Title-img'/>
    </div>
  )
}

export default Header