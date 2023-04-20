import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            We would love to hear from you. Please reach out to us with any
            questions, comments or concerns.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
            <div className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <HiOutlineLocationMarker className="mr-4" />
              Address
            </div>
            <div className="text-gray-500 text-center">
              123 Simpang Lima St
              <br />
              Semarang, Indonesia 12345
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
            <div className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <HiOutlinePhone className="mr-4" />
              Phone Number
            </div>
            <div className="text-gray-500 text-center">(123) 456-7820</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
            <div className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <HiOutlineMail className="mr-4" />
              Email
            </div>
            <div className="text-gray-500 text-center">yukari@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
