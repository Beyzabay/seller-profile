import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ProfilePhotoUpload from './Components/ProfilePhotoUpload '
import SellerInfoForm from './Components/SellerInfoForm'

const layout = ({children}) => {
  return (
    <html>
      <body>
        <div className='flex flex-col items-center mt-10'>
        <ChakraProvider>
        <ProfilePhotoUpload/>
        <SellerInfoForm/>
      {children}
      </ChakraProvider>
      </div>
      </body>
    </html>
  )
}

export default layout
