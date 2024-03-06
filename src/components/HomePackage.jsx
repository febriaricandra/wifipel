import React, { useState, useEffect } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import PackageService from "@/domain/services/PackageService";
import PaymentService from "@/domain/services/PaymentService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function HomePackage({ packageData }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState({
    id: 1,
    name: "Gopay",
    image: "src/assets/image/gopay.svg",
  });

  const handlePackage = async () => {
    try {
      setSelectedPayment(localStorage.getItem("selectedPayment"));
      setSelectedItem(localStorage.getItem("selectedPackage"));
      localStorage.setItem("isPackage", true);
      setLoading(true);
      PaymentService.createPayment({
        package_id: selectedItem,
        payment_id: selectedPayment.id,
      });
      Swal.fire({
        title: "Berhasil!",
        text: "Pembelian paket berhasil",
        icon: "success",
        confirmButtonText: "Tutup",
      });
      navigate("/success");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan, silahkan coba lagi",
        icon: "error",
        confirmButtonText: "Tutup",
      });
      navigate("/login");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    localStorage.setItem("selectedPackage", JSON.stringify(item));
    setSelectedItem(item);
  };

  const handleSelectedPayment = (item) => {
    localStorage.setItem("selectedPayment", JSON.stringify(item));
    setSelectedPayment(item);
  };

  const PaymentData = [
    {
      id: 1,
      name: "Gopay",
      image: "src/assets/image/gopay.svg",
    },
    {
      id: 2,
      name: "Ovo",
      image: "src/assets/image/ovo.svg",
    },
  ];

  return (
    <div className="flex flex-col my-auto">
      <div className="div">
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Pembelian Paket</h1>
          <div className="grid grid-cols-3 gap-2">
            {packageData.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col bg-[#F1F1F1] border p-2 rounded-lg justify-center items-center w-full ${
                  selectedItem === item.id
                    ? "selected outline-none ring ring-red-500 "
                    : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <h1
                  className={`font-bold ${
                    selectedItem === item.id ? "text-red-500" : "text-black"
                  }`}
                >
                  Rp {item.price}
                </h1>
                <p
                  className={`text-gray-500 text-sm ${
                    selectedItem === item.id ? "text-red-500" : ""
                  }`}
                >
                  {item.time_limit}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Pembayaran</h1>

          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="flex flex-col bg-[#F1F1F1] p-4 rounded-md"
            type="button"
            onClick={toggleDropdown}
          >
            <div className="flex flex-row gap-2 items-center justify-between">
              <div className="flex flex-row items-center gap-2">
                <img src={selectedPayment.image} alt="img" />
                {selectedPayment.name}
              </div>
              {isDropdownOpen ? (
                <RiArrowDownSLine color="red" size={32} />
              ) : (
                <RiArrowRightSLine color="red" size={32} />
              )}
            </div>
            {isDropdownOpen && (
              <div id="dropdownHover" data-dropdown-content className="">
                <div className="border-b-2 border-black-200 my-2 rounded"></div>
                {PaymentData.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row gap-2 items-center my-2"
                    onClick={() => handleSelectedPayment(item)}
                  >
                    <img src={item.image} alt="img" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>

      <button
        className="bg-red-500 rounded-lg p-2 text-white w-full my-4"
        onClick={handlePackage}
      >
        {loading ? "Loading..." : "Beli Paket"}
      </button>
    </div>
  );
}
