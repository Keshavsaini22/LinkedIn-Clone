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
  const error = useSelector((state) => state.post.error)


  useEffect(() => {
    dispatch(getPosts(9))

  }, []);

  useEffect(() => {
    if (!logged) {
      navigate('/');
    }
  }, [logged])
  const handleLogout = () => {
    console.log("handlelogout1")
    dispatch(logoutUser())
    console.log("handlelogout2")
    navigate('/')
  }
  return (


    <>
      <Stack justifyContent={"center"} sx={{ marginTop: '30px', margin: '30px 30px' }} direction={'row'} gap={3}>
        <ProfileCard />
        <Stack>
          <CreatePostBar />
          {/* <PostCard /> */}
          {isLoading && <h1>Data is loading</h1>}
          {/* {error && <h1>{error}</h1>} */}
          {posts?.map((post) => (
            <PostCard key={post._id} postId={post._id} body={post.body} title={post.title} images={post.images} user={post.userId} createdAt={post.createdAt}/>
          ))}
        </Stack>
      </Stack>
    </>


  )
}

export default Home