"use client";

import CardWrapper from "./Cardwrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import  {Input} from "./ui/input";
import  {Button}  from "./ui/button";
import { useState } from "react";

const SignupComponent = () => {
  const [loading, setLoading] = useState(false);
  
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
  };

  const form = useForm()
  return (
    <CardWrapper
      label="Create an account"
      title="Register"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        
          <span className="flex justify-center gap-3 ">
              <label className="flex" htmlFor="">
                <Input
                  type="radio"
                  name="options"
                  value="counselor"
                //   checked={gender === "Male"}
                //   onChange={handleOptionChange}
                  className="radio"
                  defaultChecked
                />
                Counselor
              </label>
              <label className="flex">
                <Input
                  type="radio"
                  name="options"
                  value="student"
                //   checked={gender === "Female"}
                //   onChange={handleOptionChange}
                  className="w-5"
                />
                Student
              </label>
              <label className="flex">
                <Input
                  type="radio"
                  name="options"
                  value="Organisation "
                //   checked={gender === "Female"}
                //   onChange={handleOptionChange}
                  className="w-5"
                />
                Organization
              </label>
            </span>
            <Button type="submit" className="w-full" >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignupComponent;