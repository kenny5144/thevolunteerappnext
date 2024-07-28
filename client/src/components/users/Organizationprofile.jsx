"use client"
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import Post from './Post';
import axios from 'axios';

const Organizationprofile = () => {
  const [posts, setPosts] = useState([]);

  // Function to handle post addition
  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Fetch posts from the backend when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div className='flex gap-10 '>
      <Card className="w-1/4 h-[30rem]">
        <CardHeader>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>
            <span className='font-bold'> Name of organization: </span> Kehinde ojo
          </CardTitle>
          <CardDescription>
            <span className='font-bold'>School</span> Estorange campus high school
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h4><span>Type of organization:</span> pantry</h4>
          <h5><span>Location: </span> 111 who knows street </h5>
          <h6> <span> description and goals :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, impedit ullam </h6>
        </CardContent>
        <CardFooter>
          <Button> LogOut </Button>
        </CardFooter>
      </Card>
      {/* this begins the student attended */}
      <Card className="w-[80rem]">
        <CardHeader>
          <Post  onPostAdded={handlePostAdded} />
          <CardTitle className="text-2xl"> </CardTitle>
          <CardTitle className="text-2xl mt-10"> Recent post </CardTitle>
          <CardDescription className="text-lg"></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-6 space-y-4">
            {posts.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.message}</p>
                  <p>{post.registerIcon}</p>
                  <p>{post.number}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Organizationprofile;