import React, { useState } from "react";
import "./Form.css";
import bgImg from "../../assets/bg_form.png";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [jabatan, setJabatan] = useState(1);

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          {/* <div className='logo'>
                    <img src={logo} alt="" style={{width: '171.43px', height: '160px'}}/>
                </div> */}
          <span>Form Registrasi Karyawan</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("nama", {
                required: true,
              })}
              placeholder="Nama"
            />
            <input type="text" {...register("nrp")} placeholder="NRP" />
            <input
              type="date"
              {...register("birthday")}
              placeholder="Tanggal Lahir"
            />
            <select className="selected">
              <option value="" selected disabled hidden>
                Perusahaan
              </option>
              <option value="0">YKBUT</option>
              <option value="1">UT SCHOOL</option>
              <option value="2">UT DCARE</option>
              <option value="3">MITRA BAKTI UT</option>
              <option value="4">GLOBAL SERVICE INDONESIA</option>
              <option value="5">KAMAJU</option>
              <option value="6">DPP</option>
              <option value="7">LSP ABI</option>
              <option value="8">KANITRA</option>
              <option value="9">KOPKAR YKBUT</option>
            </select>
            <input
              type="date"
              {...register("tahunmasuk")}
              placeholder="Tahun Masuk"
            />
            {/* <input
              type="text"
              {...register("status")}
              placeholder="Status Karyawan"
              style={{ borderRadius: "5px" }}
            /> */}
            <select className="select">
              <option value="" selected disabled hidden>
                Status Karyawan
              </option>
              <option value="1">Karyawan Tetap</option>
              <option value="2">Karyawan Kontrak</option>
            </select>
            <select className="select">
              <option value="" selected disabled hidden>
                Jabatan
              </option>
              <option value="0">Admin / Officer</option>
              <option value="1">Analyst/Staff</option>
              <option value="2">Advisor</option>
              <option value="3">Department Head</option>
              <option value="4">Section Head / Supervisor</option>
              <option value="5" onClick={() => setJabatan(2)}>
                Lainnya
              </option>
            </select>
            <input
              className={jabatan === 2 ? "open" : "close"}
              type="text"
              {...register("jabatan")}
              placeholder="Silahkan isi jika tidak ada pilihan"
            />
            {/* <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' /> */}
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button
              className="btn"
              onClick={() => (window.location.href = "/questionpage")}
            >
              Continue
            </button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
