"use client";
import React from "react";
import { useFormik } from "formik";
import { basicSchemas } from "../schemas";

const onSubmit = () => {};

const SellerInfoForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
    },
    validationSchema: basicSchemas,
    onSubmit,
  });
  return (
    <>
      <div>
        <form class="space-y-4 text-gray-700" onSubmit={handleSubmit}>
          <div class="flex flex-wrap"></div>
          <div class="flex flex-wrap space-y-4 md:space-y-0">
            <div class="w-full px-2 mb-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_name">
                İsim
              </label>
              <input
                className={`w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg ${
                  errors.name ? "input-error" : ""
                }`}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Adınızı Giriniz"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div class="w-full px-2 md:w-1/2">
              <label class="block mb-1" for="formGridCode_last">
                Soyisim
              </label>
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
            <div class="w-full px-2 !mt-4">
              <label class="block mb-1" for="formGridCode_last">
                Hakkında
              </label>
              <textarea
                rows="1"
                class=" p-2.5 w-full px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                id="formGridCode_last"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-col space-y-4 md:space-y-5">
            <div class="w-full px-2 ">
              <label class="block mb-1">E-mail</label>
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
            <div class="w-full px-2  ">
              <label class="block mb-1" for="formGridCode_year">
                Twitter
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_year"
              />
            </div>
            <div class="md:w-full w-52 px-2">
              <label class="block mb-1" for="formGridCode_cvc">
                Facebook
              </label>
              <input
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                id="formGridCode_cvc"
              />
            </div>
          </div>
          <div className="!mt-8 flex justify-end">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Değişiklikleri Kaydet
            </button>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Vazgeç
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SellerInfoForm;
