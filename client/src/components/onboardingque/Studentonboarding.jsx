"use client"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useState } from "react"
const Studentonboarding = () => {
  const [date, setDate] = useState()
  return (
    <div>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Just a few more questions</CardTitle>
      </CardHeader>
      {/* school, bio, gender, grade, graduationYear, studentId  */}
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">student Id</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">School</Label>
              <Input id="name" placeholder="Name of your school" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Graduation year</Label>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
            </div>
            <div>
            <Label htmlFor="name">Current grade</Label>
            <Input id="name" placeholder="What grade are you in " />
            </div>
            <div>
            <Label htmlFor="name">Bio</Label>
            <Input id="name" placeholder="tell us something about yourself" />
            </div>
          </div>

        <Button >Submit</Button>
        </form>
      </CardContent>
    </Card> 
    </div>
  )
}

export default Studentonboarding
