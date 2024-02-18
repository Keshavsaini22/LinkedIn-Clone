import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/SignUp/SignIn/SignIn.action';
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
      <h1>Home page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home