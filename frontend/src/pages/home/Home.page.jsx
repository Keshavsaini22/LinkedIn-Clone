import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/SignUp/SignIn/SignIn.action';
import Navbar from '../../components/Navbar/Navbar';
// import PostForm from '../../components/CreatePost/PostForm/PostForm';
import CreatePostBar from '../../components/CreatePost/CreatePostBar/CreatePostBar';
import PostCard from '../../components/PostCard/PostCard';
import { getPosts } from '../../features/Posts/Post.action';
import { Box, Stack } from '@mui/material';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.signin.logged)
  const posts = useSelector((state) => state.post.postsData)
  const isLoading = useSelector((state) => state.post.isLoading)

  useEffect(() => {
    dispatch(getPosts(9))
    if (!logged) {
      navigate('/');
    }
  }, [logged, dispatch]);
  const handleLogout = () => {
    console.log("handlelogout1")
    dispatch(logoutUser())
    console.log("handlelogout2")
    navigate('/')
  }
  return (


    <>
      <Stack sx={{ m: 'auto', marginTop: '30px' }} direction={'row'} gap={'22px'}>
        <ProfileCard />
        <Stack>
          <CreatePostBar />
          {/* <PostCard /> */}
          {isLoading && <h1>Data is loading</h1>}
          {posts?.map((post) => (
            <PostCard key={post._id} postId={post._id} body={post.body} title={post.title} images={post.images} />
          ))}
        </Stack>
      </Stack>
      <br />
      <button onClick={handleLogout}>Logout</button>
      </>


  )
}

export default Home