import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
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
        <h1 className="font-bold text-black my-2">Verifikasi berhasil!</h1>
        <p className="text-gray-500">Nikmati pengalaman internet yang lebih baik</p>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
          <div class="h-2 w-6 rounded-full bg-red-500"></div>
        </div>
        <div className="button">
        <Link to="/home">
          <button className="bg-red-500 rounded-lg p-2 text-white">
            <p className="mx-4">Lanjutkan</p>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
