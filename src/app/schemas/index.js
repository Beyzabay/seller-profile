import * as yup from "yup";

export const basicSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-mail adresi giriniz")
    .required("E-mail bilgisi girmek zorunludur"),
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, "Ad yalnızca harf içermelidir")
    .required("Ad bilgisi girmek zorunludur"),
  surname: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Soyad yalnızca harf içermelidir")
    .required("Soyad bilgisi girmek zorunludur"),
  about: yup
    .string()
    .max(200, "En fazla 200 karakter girebilirsiniz")
    .required("Hakkında bilgisi giriniz")
});
