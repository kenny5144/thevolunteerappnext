"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { format } from "date-fns";

const StudentOnboarding = () => {
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form with validation rules
  const form = useForm({
    defaultValues: {
      studentId: '',
      school: '',
      grade: '',
      bio: '',
    },
    mode: 'onBlur', // Validate fields on blur
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setMessage('');

    if (!date) {
      setError('Graduation year is required');
      setLoading(false);
      return;
    }

    try {
      // Make API request to the onboarding endpoint
      const response = await axios.post('http://localhost:8080/onboarding', {
        studentId: data.studentId,
        school: data.school,
        graduationYear: date,
        grade: data.grade,
        bio: data.bio,
      });

      setMessage('Student onboarding completed successfully');
      // Redirect to the next step or dashboard
      window.location.href = '/dashboard'; // Example redirect
    } catch (error) {
      setError('Onboarding failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Just a few more questions</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="studentId">Student Id</Label>
                <Input
                  id="studentId"
                  placeholder="Student Id"
                  {...form.register("studentId", { required: 'Student Id is required' })}
                />
                {form.formState.errors.studentId && (
                  <FormMessage>{form.formState.errors.studentId.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="school">School</Label>
                <Input
                  id="school"
                  placeholder="Name of your school"
                  {...form.register("school", { required: 'School name is required' })}
                />
                {form.formState.errors.school && (
                  <FormMessage>{form.formState.errors.school.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="graduationYear">Graduation year</Label>
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
                {error && <FormMessage>{error}</FormMessage>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="grade">Current grade</Label>
                <Input
                  id="grade"
                  placeholder="What grade are you in"
                  {...form.register("grade", { required: 'Current grade is required' })}
                />
                {form.formState.errors.grade && (
                  <FormMessage>{form.formState.errors.grade.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  placeholder="Tell us something about yourself"
                  {...form.register("bio", { required: 'Bio is required' })}
                />
                {form.formState.errors.bio && (
                  <FormMessage>{form.formState.errors.bio.message}</FormMessage>
                )}
              </div>
            </div>
            <Button type="submit" className="mt-4 w-full">
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentOnboarding;