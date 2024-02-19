import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/SignUp/SignIn/SignIn.action';
import Navbar from '../../components/Navbar/Navbar';
import PostForm from '../../components/CreatePost/PostForm/PostForm';
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.signin.logged)

  const handleLogout = () => {
    console.log("handlelogout1")
    dispatch(logoutUser())
    console.log("handlelogout2")
    navigate('/')
  }
  useEffect(() => {
    if (!logged) {
      navigate('/');
    }
  }, [logged]); 
  return (
    <>
    <Navbar/>
      <h1>Home page</h1>
      <PostForm/>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home