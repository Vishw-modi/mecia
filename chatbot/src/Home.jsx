import React from "react";
import "../src/assets/zxc.mp4";
function Home() {
  return (
    <>
      <div
        className="rounded-lg shadow-xl bg-white bg-opacity-20 z-10 text-black font-bold text-lg"
        style={{
          // position: "relative",
          // top: "10vh", // This ensures the content starts after 10% of the viewport height
          width: "130vh",

          border: "1px solid #ccc",
          // borderRadius: "10px",

          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        {/* <div className="rounded-lg flex-row">
           <video
            src="../src/assets/zxc.mp4"
            alt=""
            height="700vh"
            width="500px"
            className="mt-[12rem] ml-[12rem] rounded-lg"
          />  */}
        {/* </div>  */}
        <div>
          <h1 className="pb-3">Details</h1>
          <div className="flex flex-col justify-start text-left">
            <h2 className="font-weight-bold pl-5">
              Medicus a your comprehensive health companion designed to simplify
              and enhance your well-being. Our app provides:
            </h2>
            <ul className="p-[10px]">
              <li className="p-[10px]">
                <strong>Personalized Food Plans: </strong> Tailor your diet to
                meet your specific health needs with customized meal plans and
                nutritional advice.
              </li>

              <li className="p-[10px]">
                <strong>Symptom Checker: </strong> Quickly get reliable
                information about common symptoms and basic medical conditions
                to better understand your health.
              </li>
              <li className="p-[10px]">
                <strong>Medication Info: </strong> Access detailed information
                about various medications, including usage, side effects, and
                interactions.
              </li>

              <li className="p-[10px]">
                <strong> Doctor Directory: </strong> Easily find and contact
                healthcare professionals based on your needs, with direct links
                for appointments and consultations. Empower yourself with
                MedAssist Pro for a more informed and proactive approach to your
                health!
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="Footer"
        style={{
          position: "bottom",
          // top: "10vh", // This ensures the content starts after 10% of the viewport height
          // width: "130vh",
          // height: "80vh",
          // border: "1px solid #ccc",
          // borderRadius: "10px",

          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          // padding: "20px",
        }}
      >
        <div className="flex flext-start">{/* <p>About</p> */}</div>
        <div className="flex flex-start justify-between">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Home;
