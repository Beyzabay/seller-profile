import React from "react";

const SellerInfoForm = () => {
  return (
    <>
      <div>
        <div>
        <form class="space-y-4 text-gray-700">
  <div class="flex flex-wrap">
    {/* <div class="w-full">
      <label class="block mb-1" for="formGridCode_card">Card number</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_card"/>
    </div> */}
  </div>
  <div class="flex flex-wrap space-y-4 md:space-y-0">
    <div class="w-full px-2 mb-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_name">İsim</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name"/>
    </div>
    <div class="w-full px-2 md:w-1/2">
      <label class="block mb-1" for="formGridCode_last">Soyisim</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_last"/>
    </div>
    <div  class="w-full px-2 !mt-4">
    <label class="block mb-1" for="formGridCode_last">Hakkında</label>
  <textarea rows="1" class=" p-2.5 w-full px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" id="formGridCode_last"></textarea>
    </div>
  </div>
  <div class="flex flex-col space-y-4 md:space-y-5">
    <div class="w-full px-2 ">
      <label class="block mb-1" for="formGridCode_month">İnstagram</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_month"/>
    </div>
    <div class="w-full px-2  ">
      <label class="block mb-1" for="formGridCode_year">Twitter</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_year"/>
    </div>
    <div class="md:w-full w-52 px-2">
      <label class="block mb-1" for="formGridCode_cvc">Facebook</label>
      <input class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_cvc"/>
    </div>
  </div>
  <div className="!mt-8 flex justify-end">
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Değişiklikleri Kaydet</button>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Vazgeç</button>
  </div>
</form>
        </div>
      </div>
    </>
  );
};

export default SellerInfoForm;
