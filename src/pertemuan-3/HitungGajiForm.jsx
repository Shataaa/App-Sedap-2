import { useState } from "react";
import InputField from "./components/InputField";
import Alert from "./components/Alert";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");

  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
        Hitung Gaji Bersih
      </h2>
      <div>
        <InputField
          label="Masukkan Jumlah Gaji"
          type="Number"
          onChange={(e) => setGaji(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Pajak: <b className="text-red-500">11%</b>
        </label>
      </div>

      {!gaji ? (
        <Alert
          type="red"
          message="Silahkan masukkan gaji yang valid (tidak boleh kosong atau negatif)"
        />
      ) : (
        <div className="mt-4 p-3 bg-orange-100 border-1-4 border-orange-500 text-orange-700">
          <p className="font-semibold">
          Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
          </p>
        </div>
      )}
    </>
  );
}
