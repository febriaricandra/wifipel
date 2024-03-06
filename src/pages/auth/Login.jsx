import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/domain/providers/Auth";
import Swal from "sweetalert2";
export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone_number: "",
  });

  const formatPhoneNumber = (phoneNumber) => {
    return "62" + phoneNumber;
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login(data);
      setLoading(false);
      Swal.fire({
        title: "Berhasil!",
        text: "Silahkan cek OTP di Whatsapp anda",
        icon: "success",
        confirmButtonText: "Tutup",
      });
      navigate("/verify-otp");
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan, silahkan coba lagi",
        icon: "error",
        confirmButtonText: "Tutup",
      });
      setLoading(false);
      navigate("/login");
    }
  };

  console.log(data);
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

      <div className="flex flex-col items-center my-auto">
        <img
          className="w-1/3"
          src="src/assets/image/Logo Light.svg"
          alt="logo light"
        />
        <h1 className="font-bold text-black text-center">Asianet.id!</h1>
        <p className="text-gray-500 text-center">
          Ayo, masuk untuk pengalaman internet yang lebih baik!
        </p>
        <div className="w-full">
          <form className="">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nama Pengguna
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nomor Telepon
              </label>
              <div className="flex border border-gray-300 rounded-md">
                <select className="bg-white px-2 text-gray-700 focus:outline-none rounded-l-md">
                  <option value="62">+62</option>
                </select>
                <input
                  type="tel"
                  className="flex-1 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 rounded-r-md"
                  placeholder="Nomor Telepon"
                  onChange={(e) =>
                    setData({ ...data, phone_number: formatPhoneNumber(e.target.value) })
                  }
                />
              </div>
            </div>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "Lanjutkan"}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-center items-center">
        <div className="h-2 w-2 rounded-full bg-gray-500"></div>
        <div className="h-2 w-6 rounded-full bg-red-500"></div>
        <div className="h-2 w-2 rounded-full bg-gray-500"></div>
      </div>
    </div>
  );
}
