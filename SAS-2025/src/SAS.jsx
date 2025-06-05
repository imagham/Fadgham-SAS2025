import React from "react";
import gambar from "./assets/gambar.jpg"

function SAS() {
return (
    <>
       <section>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#B6B09F]  via-[#EAE4D5] to-[#B6B09F] py-4 text-center font-akaya-kanadaka ">TUGAS PROJECT SAS-2025 </h1>
            <div className="bg-[#EAE4D5] py-[5%] w-1/2 mx-auto mt-[5%] rounded-lg shadow-[20px_20px_100px_0px_#B6B09F]">
           
          <img src={gambar} alt="" className="w-[60%] mx-auto p-[2%] bg-white" />
            <h2 className="bg-[#B6B09F] mt-[5%] py-[10%] text-center w-[80%] mx-auto  rounded-lg  text-3xl font-poetsen-one shadow-[20px_20px_100px_0px_#EAE4D5]  ">FADGHAM KHAIRUL HAFIZH </h2>
           <p className=" mt-[5%] py-[10%] text-center font-akaya-kanadaka mx-auto  rounded-lg  text-xl  shadow-[20px_20px_100px_0px_#B6B09F] ">ini adalah hasil foto saya yg saya ambil menggunakan handphone xiomi 13T jika penasaran dengan hasil foto saya yg  lain silahkan follow akun instagram saya <span className="font-semibold font-whinky text-[25px]">@imagham</span> </p>
            </div>
            <h2 className=" text-3xl  mx-auto font-bold bg-gradient-to-r from-[#B6B09F]  via-[#EAE4D5] to-[#B6B09F] py-[5%] text-center font-akaya-kanadaka uppercase mt-[5%] shadow-[20px_20px_100px_0px_#EAE4D5] ">Terimakasih telah mengunjungi website ini</h2>
        </section> 
    </>
);
}

export default SAS  