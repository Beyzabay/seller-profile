"use client"
import React, { useState } from 'react';

const ProfilePhotoUpload = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [image, setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  const openPopup = () => {
    setIsPopupOpen(true);
    setImage(selectedImage);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Kullanıcının dosya seçtiğinde çalışan fonksiyon
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader(); 

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Görüntüyü güncelleme işlemini yöneten fonksiyon
  const handleImageUpdate = (event) => {
    event.preventDefault();
    setSelectedImage(image); 
    setIsPopupOpen(false); 
  };

  // Görüntüyü silme işlemini yöneten fonksiyon
  const handleImageDelete = () => {
    setSelectedImage(''); 
    setImage(''); 
    setIsPopupOpen(false); 
  };

  return (
    <div className="container flex items-center justify-center">
      <div className="w-48 h-48 overflow-hidden rounded-full" onClick={openPopup}>
        <img
          src={selectedImage ? selectedImage : "https://freesvg.org/img/abstract-user-flat-4.png"}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      {/* Popup penceresi */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <div className='flex justify-around'>
              <img
                src={image ? image : "https://freesvg.org/img/abstract-user-flat-4.png"}
                alt="Selected Image"
                className="object-cover h-40 w-40 rounded-lg mb-4"
              />
            </div>
            {/* Dosya yükleme inputu */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded-md mt-2 p-1 w-full"
            />
            {/* Butonlar */}
            <div className="flex items-start mt-4 gap-5">
              {image && (
                <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleImageUpdate}>
                  Güncelle
                </button>
              )}
              {selectedImage && (
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleImageDelete}>
                  Delete
                </button>
              )}
            </div>
            <button className="absolute top-0 right-0 m-4" onClick={closePopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfilePhotoUpload;