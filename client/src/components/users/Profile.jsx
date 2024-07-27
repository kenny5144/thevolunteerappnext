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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Profile = () => {
  return (
    <div className='flex gap-10 '>
<Card className="w-1/4  h-[30rem]">
  <CardHeader>
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    <CardTitle> <span className='font-bold'> Name: </span> Kehinde ojo </CardTitle>
    
    <CardDescription> <span className='font-bold'>School</span>   Estorange campus high school</CardDescription>
  </CardHeader>
  <CardContent>
    <h4>Required hours:</h4>
    1000
    
    <h5>Completed Hours:</h5>
    <p>20</p>
    <h5>Remaining  Hours:</h5>
    <p>880</p>
    <h3>Counselor:</h3>
    <p>wagwan</p>
    <h3>Counselor Email:</h3>
    <p>ojok761@gmail.com</p>

  </CardContent>
  <CardFooter>
   <Button> LogOut </Button>
  </CardFooter>
</Card>
{/* this begins the student attended  */}
<Card className="w-[80rem]">
  <CardHeader>
    <CardTitle className="text-2xl">Recent attended Community service  </CardTitle>
    <Carousel className="w-[70rem] ml-10 ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <CardTitle className="text-2xl mt-10"> Community service Near You   </CardTitle>
    <CardDescription className="text-lg">East Orange Nj</CardDescription>
    <Carousel className="w-[70rem] ml-10   ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1  md:basis-1/3 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
  </CardHeader>
</Card>
    </div>
  )
}

export default Profile
