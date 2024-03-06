import { useState, useEffect } from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import HomePackage from "@/components/HomePackage";
import HomeUsage from "@/components/HomeUsage";
import { useNavigate } from "react-router-dom";
import PaymentService from "@/domain/services/PaymentService";
import PackageService from "@/domain/services/PackageService";
import Swal from "sweetalert2";

export default function Index() {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState([]);
  const [setPackage, setSelectedPackage] = useState(null);
  const [setPayment, setSelectedPayment] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPackage = async () => {
      const response = await PackageService.getPackageList();
      setPackageData(response.data.data);
    };
    const fetchPayment = async () => {
      const response = await PaymentService.getInformationPayment();
      setPaymentInfo(response.data);
    };

    fetchPayment();
    fetchPackage();
  }, []);

  console.log(paymentInfo);
  return (
    <div className="flex flex-col h-screen justify-between m-4">
      <div className="">
        <div className="flex flex-row gap-1 items-center">
          <img
            className="w-12"
            src="src/assets/image/Logo Light.svg"
            alt="logo light"
          />
          <h1 className="font-bold text-red-500">Asianet.id</h1>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-black">Hai, {user.name}!</h1>
          <p className="text-gray-500">{user.phone_number}</p>
        </div>

        <div className="flex flex-col bg-[#F1F1F1] border p-2 rounded-lg my-2">
          <div className="flex flex-row justify-between my-2">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 text-start">Paket layanan</p>
              <h1 className="font-bold text-black text-start">{paymentInfo ? paymentInfo.package : "Free Access"}</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-end text-gray-400">Harga</p>
              <h1 className="font-bold text-end text-black">Rp {paymentInfo ? paymentInfo.amount : "0"}</h1>
            </div>
          </div>
          <div className="flex flex-row justify-between my-2">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400 text-start">Tersisa</p>
              <div className="bg-red-500 px-1">
                <h1 className="font-bold text-white text-start">{paymentInfo ? paymentInfo.kuota : "0"}</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-end text-gray-400">Kapal</p>
              <h1 className="font-bold text-end text-black">{paymentInfo ? paymentInfo.ship : "Kapal"} </h1>
            </div>
          </div>
        </div>
        {paymentInfo ? (
          <HomeUsage paymentInfo={paymentInfo} />
        ) : (
          <HomePackage packageData={packageData} />
        )}
      </div>

      {/* <div className="flex flex-row gap-2">
        <button
          className={`${
            isPackage === true
              ? "bg-white border-2 border-red-500 rounded-lg p-2 text-red-500 w-full"
              : "bg-red-500 rounded-lg p-2 text-white w-full"
          }`}
          onClick={handlePackage}
        >
          <p className="mx-4">Beli Paket</p>
        </button>
        {isPackage === true ? (
          <button className="bg-red-500 rounded-lg p-2 text-white w-full">
            <p className="mx-4">Login Portal</p>
          </button>
        ) : null}
      </div> */}
    </div>
  );
}
