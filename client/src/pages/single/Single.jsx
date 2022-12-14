import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlepost/SinglePost'
import './Single.css'

function Single() {
  return (
    <div className='single'>
        <SinglePost/> 
        <Sidebar/>
    </div>
  )
}

export default Single