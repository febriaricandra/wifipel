import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const paymentInfo = JSON.parse(localStorage.getItem("selectedPayment"));
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col m-4 h-screen">
      <div className="flex flex-row gap-1 items-center">
        <img
          className="w-12"
          src="src/assets/image/Logo Light.svg"
          alt="logo light"
        />
        <h1 className="font-bold text-red-500">Asianet.id</h1>
      </div>

      <div className="flex flex-col text-center items-center my-auto">
        <img src="src/assets/image/Group 77.svg" alt="success" />
        <h1 className="font-bold text-black my-2">
          Pembayaran {paymentInfo.name} berhasil!
        </h1>
        <p className="text-gray-500">
          Selamat! Layanan internet Anda sudah aktif. Mulai nikmati kecepatan
          terbaik dengan Asianet.id
        </p>
      </div>

      <div className="">
        <Link to="/home">
          <button className="bg-red-500 rounded-lg p-2 text-white w-full">
            <p className="mx-4">Lanjutkan</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
