import React from 'react'
import CounselorProfile from '@/components/users/CounselorProfile'
import Profile from '@/components/users/Profile'
import Organizationprofile from '@/components/users/Organizationprofile'
const page = () => {

  return (
    <div>

      <Profile/>
      <CounselorProfile/>
      <Organizationprofile/>
    </div>
  )
}

export default page
