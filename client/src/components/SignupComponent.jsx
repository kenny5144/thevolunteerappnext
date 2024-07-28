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

const SignupComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form with validation rules
  const form = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      options: 'counselor',
    },
    mode: 'onBlur', // Validate fields on blur
  });

  // Form submission handler

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setMessage('');

    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Make API request to signup endpoint
      const response = await axios.post('http://localhost:8080/user/register', {
        email: data.email,
        name: data.name,
        password: data.password,
        UserRole: data.options.toUpperCase(),
      });

      setMessage('User registered successfully');
      
      window.location.href = '/onboarding'; // Change to the onboarding route
      localStorage.setItem("token", response.data.token)
    } catch (error) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}
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
              name="name"
              rules={{
                required: 'Name is required',
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              rules={{
                required: 'Confirm Password is required',
                validate: (value) => {
                  const { password } = form.getValues();
                  return value === password || 'Passwords do not match';
                },
              }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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

          <div className="flex justify-center gap-3">

            <label className="flex">
              <Input
                type="radio"
                name="options"
                value="counselor"
                {...form.register('options')}
                defaultChecked
              />
              Counselor
            </label>
            <label className="flex">
              <Input
                type="radio"
                name="options"
                value="student"
                {...form.register('options')}
              />
              Student
            </label>
            <label className="flex">
              <Input
                type="radio"
                name="options"
                value="organization"
                {...form.register('options')}
              />
              Organization
            </label>
          </div>
          <Button type="submit" className="w-full">
            {loading ? 'Loading...' : 'Register'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignupComponent;