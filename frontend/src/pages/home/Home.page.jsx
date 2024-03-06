import React, { useEffect, useState } from 'react';
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
import { array } from 'prop-types';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logged = useSelector((state) => state.signin.logged)
  //console.log('logged: ', logged);
  const posts = useSelector((state) => state.post.postsData)
  // console.log('posts: ', posts);
  const loading = useSelector((state) => state.post.isLoading)
  const error = useSelector((state) => state.post.error)
  const time = useSelector((state) => state.post)
  // console.log("home");

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
  //     //console.log('createdAt: ', createdAt);
  //     dispatch(getPosts(createdAt))
  //   }
  // }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 300 < document.documentElement.offsetHeight || loading) {
      //console.log("first1")
      return;
    }
    //console.log('time: ', time?.createdAt);
    // //console.log('createdAt: ', createdAt);
    //console.log("first2")
    if(posts.length<10)
    dispatch(getPosts(time?.createdAt))
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    console.log("here");
    dispatch(getPosts(1))
    if (!logged) {
      navigate('/');
    }
  }, [logged])

  return (
    <>
      <Stack justifyContent={"center"} sx={{ marginTop: '30px', margin: '30px 30px' }} direction={'row'} gap={3}>
        <ProfileCard />
        <Stack>
          <CreatePostBar />
          {/* <PostCard /> */}
          {loading && <h1>Data is loading</h1>}
          {/* {error && <h1>{error}</h1>} */}
          {posts?.map((post) => (
            <PostCard key={post._id} postId={post._id} body={post.body} title={post.title} images={post.images} user={post.userId} createdAt={post.createdAt} />
          ))}
          {/* {isLoading && <p>Loading...</p>} */}
        </Stack>
      </Stack>
    </>

    // "2024-02-29T12:10:03.666Z" posts.slice(-1)[0]   posts:  2024-02-29T12:10:03.666Z posts[posts?.length - 1].createdAt


  )
}

export default Home