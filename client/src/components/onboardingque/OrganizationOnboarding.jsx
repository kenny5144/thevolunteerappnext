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

const OrganizationOnboarding = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Initialize the form with validation rules
  const form = useForm({
    defaultValues: {
      organizationId: '',
      name: '',
  
      type: '',
      bio: '',
      founded: '',
    },
    mode: 'onBlur', 
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setMessage('');
const token = localStorage.getItem("token")
console.log(token );
    try {
      const response = await axios.post(
        'http://localhost:8080/onboarding/onboard/organization',
        {
          name: data.name,
          type: data.type,
          bio: data.bio,
          yearFounded: data.founded,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Organization onboarding completed successfully');
      if (response.status=== 201){

        window.location.href = '/Home'; 
      }
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
          <CardTitle>Organization Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <div className="grid w-full items-center gap-4">
          
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  placeholder="Name of your organization"
                  {...form.register("name", { required: 'Organization name is required' })}
                />
              </div>
             
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  placeholder="Type"
                  {...form.register("type", { required: 'Type is required' })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  placeholder="Tell us something about your organization"
                  {...form.register("bio", { required: 'Bio is required' })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="founded">Founded</Label>
                <Input
                  id="founded"
                  placeholder="Year founded"
                  {...form.register("founded", { required: 'Year founded is required' })}
                />
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

export default OrganizationOnboarding;
