"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
  } from "@/components/ui/card";
const Cardwrapper = ({label, title, backButtonHref, backButtonLabel, children}) => {
    return (
      <Card className="xl:w-1/4 md:w-1/2 shadow-md">

          <CardHeader>
                  <h1> Welcome back </h1>
          </CardHeader>
          <CardContent>
              {children}
          </CardContent>
          <CardFooter>
              </CardFooter>
      </Card>
    )
  }
  
  export default Cardwrapper