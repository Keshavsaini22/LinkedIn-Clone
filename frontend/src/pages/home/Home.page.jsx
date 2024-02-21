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

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.signin.logged)
  const posts = useSelector((state) => state.post.postsData)
  const isLoading = useSelector((state) => state.post.isLoading)

  useEffect(() => {
    console.log("useeffect")
    dispatch(getPosts(9))
    console.log("useeffect2")
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
    <Stack flexDirection={'column'} gap={'20px'}>
      <Navbar />
      <Box sx={{ m: 'auto' }}>
        <CreatePostBar />
        {/* <PostCard /> */}
        {isLoading && <h1>Data is loading</h1>}
        {posts?.map((post) => (
          <PostCard key={post._id} postId={post._id} body={post.body} title={post.title} images={post.images} />
        ))}
      </Box>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </Stack>

  )
}

export default Home