"use client"
import React from 'react'

import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import  {Button}  from "../ui/button";
import  {Input}  from "../ui/input";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CounselorProfile = () => {
  return (
    <div className='flex gap-10 '>
    <Card className="w-1/4  h-[30rem]">
      <CardHeader>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        <CardTitle> <span className='font-bold'> Name: </span> Kehinde ojo </CardTitle>
        
        <CardDescription> <span className='font-bold'>School</span>   Eastorange campus high school</CardDescription>
      </CardHeader>
      <CardContent> 
       <p>Gender:</p>
       <p>Male</p>
    
      </CardContent>
      <CardFooter>
       <Button> LogOut </Button>
      </CardFooter>
    </Card>
    {/* this begins the student attended  */}
    <Card className="w-[80rem]">
      <CardHeader>
        <CardTitle className="text-2xl">
            Students 
            </CardTitle>
            <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search for Students" />
      <Button type="submit">Search </Button>
    </div>
  <button>
        <Card className="w-[60rem]">
  <CardHeader>




  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    
    <CardDescription className="flex flex-col justify-start items-start">
        <h1> <span>Name:</span> kehinde ojo</h1>
        <h3>Grade: 12</h3>
        <h4>Remaining Hours: 100</h4>
    </CardDescription>
  </CardHeader>
  
</Card>
  </button>
      
       
        
      </CardHeader>
    </Card>
        </div>
  )
}

export default CounselorProfile
