import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "@/domain/services/UserService";

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await UserService.getUserList();
        if (user) {
          console.log(user);
          navigate("/home");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
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
        <img
          className="w-1/3"
          src="src/assets/image/Logo Light.svg"
          alt="logo light"
        />
        <h1 className="font-bold text-black">Selamat datang di Asianet.id!</h1>
        <p className="text-gray-500">
          Temukan layanan internet terbaik untuk kebutuhan Anda
        </p>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <div class="h-2 w-6 rounded-full bg-red-500"></div>
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
          <div class="h-2 w-2 rounded-full bg-gray-500"></div>
        </div>
        <div className="button">
          <Link to="/login">
            <button className="bg-red-500 rounded-full p-4">
              <FaArrowRightLong color="white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
