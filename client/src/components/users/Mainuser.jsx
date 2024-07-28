"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import CounselorProfile from './CounselorProfile';
import Profile from './Profile';
import Organizationprofile from './Organizationprofile';
import Mainonbording from "../onboardingque/Mainonbording";

const Mainuser = () => {
  const [userData, setUserData] = useState(null);
  const [onboarding, setOnboarding] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found, please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:8080/user/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.user);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      }
    };

    const fetchOnboarded = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("No token found, please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:8080/onboarding/user/onboarding-info", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
console.log(response.data );
        if (response.data) {
          setOnboarding(true);
        }
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      }
    };

    const fetchData = async () => {
      await fetchUserData();
      await fetchOnboarded();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      {onboarding ? (
        <>
          {userData && userData.role === "ORGANIZATION" && <Organizationprofile />}
          {userData && userData.role === "STUDENT" && <Profile />}
          {userData && userData.role === "COUNSELOR" && <CounselorProfile />}
        </>
      ) : (
        null
      )}
    </div>
  );
};

export default Mainuser;
