import React from 'react'
import ProfilePhotoUpload from './Components/ProfilePhotoUpload '
import SellerInfoForm from './Components/SellerInfoForm'

const layout = ({children}) => {
  return (
    <html>
      <body>
        <div className='flex flex-col items-center mt-10'>
        <ProfilePhotoUpload/>
        <SellerInfoForm/>
      {children}
      </div>
      </body>
    </html>
  )
}

export default layout
