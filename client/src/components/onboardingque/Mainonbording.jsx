"use client"
import { useState,useEffect } from "react"

const Mainonbording = () => {
const [userData, setUserData] = useState(null);
const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const token = localStorage.getItem("token"); // Replace with your actual token
            const response = await axios.get('http://localhost:8080/user/user', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUserData(response.data.user);
          } catch (err) {
            setError(err.response ? err.response.data.message : err.message);
          }
        };
    
        fetchUserData();
      }, []);
  return (
    <div>
        <h1>hi</h1>
        {
            userData && <h1>{userData.name}</h1>
        }
    </div>
  )
}

export default Mainonbording
