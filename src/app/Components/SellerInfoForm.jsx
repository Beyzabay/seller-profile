"use client"
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Modal, ModalOverlay, ModalContent, ModalBody, Button, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { basicSchemas } from "../schemas";

const SellerInfoForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
// Form kaydedilince çalışan fonksiyon
  const onSubmit = () => {
    setIsSubmitted(true);
  };
// Vazgeç butonu ile çalışan fonksiyon
  const handleCancel = () => {
    setIsSubmitted(false);
    window.location.reload();
  }
// Formik yapısına ait validationlar
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      about: "",
    },
    validationSchema: basicSchemas,
    onSubmit,
  });

  const closeModal = () => {
    setIsSubmitted(false);
    window.location.reload();
  };
// isSubmitted true döndükten 3 saniye sonra closeModal fonksiyonunu çağırır.
  useEffect(() => {
    let timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        closeModal();
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [isSubmitted]);

  return (
    <>
      <div>
        {/* Form alanı */}
        <form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
          <div className="flex flex-wrap"></div>
          <div className="flex flex-wrap space-y-4 md:space-y-0">
            <div className="w-full px-2 mb-2 md:w-1/2">
              <label className="required block mb-1 font-nunito">İsim</label>
              <input
                className={`required w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg ${
                  errors.name ? "input-error" : ""
                }`}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Adınızı Giriniz"
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="w-full px-2 md:w-1/2">
              <label className="block mb-1 required font-nunito">Soyisim</label>
              <input
                className={`w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg ${
                  errors.surname ? "input-error" : ""
                }`}
                type="text"
                id="surname"
                name="surname"
                onChange={handleChange}
                value={values.surname}
                placeholder="Soyadınızı Giriniz"
              />
              {errors.surname && <p className="error">{errors.surname}</p>}
            </div>
            <div className="w-full px-2 !mt-4">
              <label className="block mb-1 required font-nunito">Hakkında</label>
              <textarea
                rows="1"
                className={`p-2.5 w-full px-3 text-base placeholder-gray-600 border rounded-lg ${
                  errors.about ? "input-error" : ""
                }`}
                type="text"
                id="about"
                name="about"
                onChange={handleChange}
                value={values.about}
                placeholder="Hakkınızda kısa bir açıklama yazın"
              />
              {errors.about && <p className="error">{errors.about}</p>}
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-5">
            <div className="w-full px-2">
              <label className="required block mb-1 font-nunito">E-mail</label>
              <input
                className={`w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg ${
                  errors.email ? "input-error" : ""
                }`}
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="E-mail adresinizi giriniz"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="w-full px-2">
              <label className="block mb-1 font-nunito">Instagram</label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Instagram adresinizi giriniz"
              />
            </div>
            <div className="w-full px-2">
              <label className="block mb-1 font-nunito">Twitter</label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Twitter adresinizi giriniz"
              />
            </div>
            <div className="w-full px-2">
              <label className="block mb-1 font-nunito">Facebook</label>
              <input
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Facebook adresinizi giriniz"
              />
            </div>
          </div>
          <div className="!mt-10 !mb-10 flex justify-end">
            <button
              type="button"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mr-15"
              onClick={handleSubmit}
            >
              Değişiklikleri Kaydet
            </button>
            <button
              type="submit"
              onClick={handleCancel}
              className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2"
            >
              Vazgeç
            </button>
          </div>
        </form>
      </div>
{/* Formun submit edilmesiyle gösterilen modal */}
      <Modal isOpen={isSubmitted} onClose={closeModal} closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay />
        <ModalContent borderRadius={0} boxShadow="none" bg="transparent">
          <ModalBody>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Form Başarıyla Gönderildi
              </AlertTitle>
            </Alert>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SellerInfoForm;



