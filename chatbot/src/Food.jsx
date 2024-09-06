import { useState } from "react";
import axios from "axios";
import "./app.css";
import LoadingIcons from "react-loading-icons";

const Food = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [food, setFood] = useState("Vegitarian");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");

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
                // text: `give a lunch dinner and breakfast recommandation based on disease ${question} of ${age} for  ${food}s also dont add any other unnecessary information. If you think that the mentioned disease is not a disease then just give a general recommendation.`,

                // ${question} ${gender} ${age} ${food}
                text: `give a breakfast,  lunch and dinner recommandation based on disease ${question} for ${gender} of ${age} having ${food} diet. If you think that the mentioned disease is not a disease then just give a general recommendation.`,
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
      <div className="flex flex-col justify-center mt-1 items-center bg-slate-700 p-4 rounded-lg shadow-lg  mx-auto  border  border-gray-600 w-[100%] bg-opacity-80">
        <div className="text-3xl font-bold text-white tracking-wide my-4 text-center mx-[200px] ">
          Meal Recommendation
        </div>

        <p className="text-slate-500 w-[400px] text-sm  hover:text-slate-300 hover:font-bold">
          Provide with the disease or condition you'd like to get medicine
          recommendations and precautions for
        </p>

        <div className="flex flex-col mx-2 pt-[100px] items-center">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required={true}
            className="m-2 w-[300px] h-[70px] p-3 text-center bg-white border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
            placeholder="Enter the disease"
          ></textarea>
          <div className="flex">
            <p className="px-[10px] font-bold"> Age: </p>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-[50px] bg-white text-slate-800 rounded-md"
              min="1"
              max="100"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className="flex">
            <h2 className=" font-bold mt-3">Gender:</h2>
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
          <select
            name="food"
            id="food"
            className="m-2 w-[150px] h-[40px] text-center bg-gray-800 text-white border-2 border-gray-600 rounded-lg shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFood(e.target.value)}
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="NonVegetarian">NonVegetarian</option>
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

export default Food;
