"use client";

import { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import OrganizationOnboarding from "./OrganizationOnboarding";
import StudentOnboarding from "./Studentonboarding";
import CounselorOnboarding from "./CounselorOnboarding";
const Mainonbording = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

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
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchUserData();
  }, []);
console.log(userData);
  return (
    <div>
      <h1>hi</h1>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
      {userData && userData.role === "ORGANIZATION" && <OrganizationOnboarding/>}
      {userData && userData.role === "STUDENT" && <StudentOnboarding/>}
      {userData && userData.role === "COUNSELOR" && <CounselorOnboarding/>}
    </div>
  );
};

export default Mainonbording;
