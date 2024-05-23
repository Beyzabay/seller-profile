import React from 'react'
import Image from 'next/image';

const ProfilePhotoUpload  = () => {
  return (
<div className="container flex items-center justify-center">
      <div className="w-48 h-48 overflow-hidden rounded-full">
        <img 
          src="https://media.istockphoto.com/id/1386479313/tr/foto%C4%9Fraf/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=X0duG4XnaH_BMWk9S2k0h96ztBAB7bguOL0e6iYljIY=" 
          alt="Happy Millennial Afro American Business Woman" 
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>

  )
}

export default ProfilePhotoUpload 