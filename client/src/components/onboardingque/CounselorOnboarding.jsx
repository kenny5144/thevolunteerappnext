"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const CounselorOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form with validation rules
  const form = useForm({
    defaultValues: {
      name: '',
      gender: '',
    },
    mode: 'onBlur', // Validate fields on blur
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      // Make API request to the onboarding endpoint
      const response = await axios.post('http://localhost:8080/onboarding', {
        name: data.name,
        gender: data.gender,
      });

      setMessage('Counselor onboarding completed successfully');
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
          <CardTitle>Counselor Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Tell us about you </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...form.register("name", { required: 'Name is required' })}
                />
                {form.formState.errors.name && (
                  <FormMessage>{form.formState.errors.name.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">School Name </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  {...form.register("name", { required: 'Name is required' })}
                />
                {form.formState.errors.name && (
                  <FormMessage>{form.formState.errors.name.message}</FormMessage>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  {...form.register("gender", { required: 'Gender is required' })}
                  className="input"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {form.formState.errors.gender && (
                  <FormMessage>{form.formState.errors.gender.message}</FormMessage>
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

export default CounselorOnboarding;