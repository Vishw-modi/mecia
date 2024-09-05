import { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

const Cure = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  async function getdata() {
    setAnswer(<LoadingIcons.Rings size="20" />);

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAlJBt5-_QBMkojGZbggPQMb7kVE7QQvvE",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: `Provide general precautions for ${question} for ${gender} of ${age}, don't add any other unnecessary information. If you think that the mentioned disease/illness is not a disease then just give a general precautions.`,
              },
            ],
          },
        ],
      },
    });
    let cleanText =
      response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    cleanText = cleanText.replace(/[*#]/g, "");

    setAnswer(cleanText);
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-1 items-center bg-slate-700 p-4 rounded-lg shadow-lg  mx-auto  border w-[40rem] border-gray-600 max-w-3xl">
        <div className="text-3xl font-bold text-white tracking-wide mb-11 text-center">
          Home Cure And Precaution
        </div>
        <p className="text-slate-500 w-[400px] text-sm hover:text-slate-300">
          Provide with the disease or condition you'd like to get medicine
          recommendations and precautions for
          <br /> Note : If you think that the
        </p>
        <div className="flex mx-2  items-center">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required={true}
            className="m-2 w-[300px] h-[70px] p-3 text-center bg-white border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
            placeholder="Enter the disease"
          ></textarea>
        </div>
        <div className="flex ">
          <p className="px-[10px] font-bold"> Age: </p>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-[50px] bg-white text-slate-800"
            min="1"
            max="100"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="flex">
          <h2 className="mx-1 font-bold mt-3 ml-5 my-1">Gender:</h2>
          <select
            name="foodie"
            id="foodie"
            className="m-2 w-[70px] h-[40px] text-center bg-gray-800 text-white border-2 border-gray-600 rounded-lg shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button onClick={getdata} className="mb-10">
          Submit
        </button>
        <pre
          style={{ maxHeight: "300px" }}
          className="text-wrap text-sm bg-slate-800 rounded-md p-4 overflow-y-auto scroll-smooth"
        >
          {answer}
        </pre>
      </div>
    </>
  );
};

export default Cure;
