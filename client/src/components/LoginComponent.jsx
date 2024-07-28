"use client";

import CardWrapper from "./Cardwrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";

const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur', // Validate fields on blur
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
      console.log(data.email)
      console.log(data.password)
    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        email: data.email,
        password: data.password,
      });

   
      localStorage.setItem('token', response.data.token);

      window.location.href = '/Home'; // Example redirect
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label="Login"
      title="Login"
      backButtonHref="/auth/signup"
      backButtonLabel="Don't have an account? Sign up here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginComponent;