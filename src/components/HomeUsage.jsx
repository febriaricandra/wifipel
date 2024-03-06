import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
export default function HomeUsage({ paymentInfo }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };
  return (
    <div className="flex flex-col py-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold text-black">Password Anda</h1>
        <a href="" className="text-red-500 text-md">
          Ganti Password
        </a>
      </div>
      <div className="my-2">
        <div className="flex flex-row gap-2 relative">
          <input
            type="text"
            value={paymentInfo.password}
            className="w-full bg-[#F1F1F1] border p-2 rounded-lg"
            disabled
          />
          <CopyToClipboard text={paymentInfo.password} onCopy={handleCopy}>
            <button className="rounded-lg p-2 absolute right-0 top-0 bottom-0 my-auto">
              <IoCopyOutline color="red" size={18} />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <p className="text-sm text-gray-400 text-start">
        Gunakan password default diatas untuk login pada portal. Anda juga dapat
        mengganti dengan password baru.
      </p>
      <div className="flex flex-col my-2">
        <h3 className="font-bold text-xl mb-4">Intruksi Penggunaan</h3>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 me-2 text-red-500 dark:text-red-400 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" fill="red" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="10"
                font-weight="bold"
              >
                1
              </text>
            </svg>
            Salin password diatas
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 me-2 text-red-500 dark:text-red-400 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" fill="red" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="10"
                font-weight="bold"
              >
                2
              </text>
            </svg>
            Klik tombol Login Portal lalu masukkan no hp dan password yang
            tertera di atas
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 me-2 text-red-500 dark:text-red-400 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" fill="red" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="10"
                font-weight="bold"
              >
                3
              </text>
            </svg>
            Silahkan menggunakan paket internet Anda
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 me-2 text-red-500 dark:text-red-400 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="9" fill="red" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-size="10"
                font-weight="bold"
              >
                4
              </text>
            </svg>
            Jika paket Anda habis, silahkan klik Beli Paket Lagi
          </li>
        </ul>
      </div>
      {/* <button className="bg-red-500 rounded-lg p-2 text-white w-full my-2">
        <p className="mx-4">Login Portal</p>
      </button> */}

      <div className="flex flex-row gap-2">
        <button className="bg-white border-2 border-red-500 rounded-lg p-2 text-red-500 w-full">
          <p className="mx-4">Beli Paket</p>
        </button>
        <a
          href="https://portal.openkoneksi.com/hotspot/"
          className="bg-red-500 rounded-lg p-2 text-white text-center w-full"
        >
          Login Portal
        </a>
      </div>
    </div>
  );
}
