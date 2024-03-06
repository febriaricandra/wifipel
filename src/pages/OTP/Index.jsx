import React, { useState, useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import OTPService from "@/domain/services/OTPService";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [values, setValues] = useState(Array(6).fill(""));
  const inputRefs = useRef(Array(6).fill(null));
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.phone_number);
  const [data, setData] = useState({
    otp: "",
    phone_number: "",
  });

  const handleInputChange = (event, index) => {
    const newValue = event.target.value;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    // Auto-focus to next input
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.current.length) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleOTP = async () => {
    try {
      const otp = values.join("");
      await OTPService.sendOTP({ otp: otp, phone_number: user.phone_number });
      Swal.fire({
        title: "Berhasil!",
        text: "Kode OTP telah dikirimkan ke nomor telepon anda",
        icon: "success",
        confirmButtonText: "Tutup",
      });
      navigate("/home");
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan, silahkan coba lagi",
        icon: "error",
        confirmButtonText: "Tutup",
      });
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="border-b">
        <div className="flex flex-row gap-1 m-4 items-center">
          <Link to="/login">
            <GoArrowLeft size={26} />
          </Link>
          <h1 className="text-black">Kode OTP</h1>
        </div>
      </div>

      <div className="m-4">
        <p className="text-gray-400">
          Masukan kode OTP yang kami kirimkan melalui WhatsApp Anda yang
          terdaftar {user.phone_number}
        </p>
        <div className="flex flex-row justify-center items-center">
          {values.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="m-2 border h-12 w-12 text-center form-control rounded focus:outline-none focus:ring focus:ring-red-500 font-bold"
              type="text"
              id={`input${index}`}
              maxLength="1"
              value={value}
              onChange={(event) => handleInputChange(event, index)}
            />
          ))}
        </div>
        <p className="text-right font-bold">kirim ulang kode</p>
      </div>

      <div className="m-4">
        <div className="button">
          <button
            className="bg-red-500 rounded-lg p-2 text-white w-full"
            onClick={handleOTP}
          >
            <p className="mx-4">Verifikasi</p>
          </button>
        </div>
      </div>
    </div>
  );
}
