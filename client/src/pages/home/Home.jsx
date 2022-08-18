import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
import {useLocation} from'react-router'

function Home() {

  const {search} = useLocation();
  

  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data);
    }
    fetchPosts()
  },[search])

  return (
    <> 
        <Header/>
    <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
    </div>
    </>
  )
}

export default Home