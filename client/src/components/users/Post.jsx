"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import axios from "axios";

const Post = ({ onPostAdded }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form with validation rules
  const form = useForm({
    defaultValues: {
      title: '',
      message: '',
  
      numberofvolunteer: '',
    },
    mode: 'onBlur', // Validate fields on blur
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
    const token = localStorage.getItem("token")
      // Make API request to add the post
      const response = await axios.post('http://localhost:8080/post', {
        title: data.title,
        message: data.message,
        numberofvolunteer: data.numberofvolunteer,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }})

      setMessage('Post added successfully');
      // Notify the parent component that a post was added
      onPostAdded(response.data);

      // Reset form
      form.reset();
    } catch (error) {
      setError('Failed to add post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 w-[10rem] ">Add Post</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a New Post</DialogTitle>
            <DialogDescription>
              Please fill in the details below to add a new post.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Title"
                />
                {form.formState.errors.title && (
                  <FormMessage>{form.formState.errors.title.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder="Message"
                />
                {form.formState.errors.message && (
                  <FormMessage>{form.formState.errors.message.message}</FormMessage>
                )}
              </div>
          
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="number">Number of people needed </Label>
                <Input
                  id="number"
                  
                  placeholder="Number"
                />
                {form.formState.errors.number && (
                  <FormMessage>{form.formState.errors.number.message}</FormMessage>
                )}
              </div>
            </div>
            <Button type="submit" className="mt-4 w-full">
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Post;