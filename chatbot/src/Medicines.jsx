import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function Medicines() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const medicines = [
    {
      id: 1,
      name: "Aspirin",
      description: "Used to reduce fever, pain, and inflammation.",
      price: "5.00",
      imageUrl: "https://m.media-amazon.com/images/I/71mtKP91HHL._SL1300_.jpg",
    },
    {
      id: 2,
      name: "Paracetamol",
      description: "Commonly used for pain relief and fever reduction.",
      price: "3.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/8/QM/AX/SS/129887935/paracetamol-tablets.jpeg",
    },
    {
      id: 3,
      name: "Ibuprofen",
      description: "Used for treating pain, fever, and inflammation.",
      price: "4.50",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLP0wCySZkc86cyoW-6EbJPNd5y_qOmFow2A&s",
    },
    {
      id: 4,
      name: "Amoxicillin",
      description: "An antibiotic used to treat bacterial infections.",
      price: "10.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuq_dSJU_wFi2AOiot1LEZ0f5rtrjIfnXqw&s",
    },
    {
      id: 5,
      name: "Ciprofloxacin",
      description: "An antibiotic used for treating bacterial infections.",
      price: "15.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWwkq4vv82XbAlh1fF4Q8bbKMYZNdiMMndw&s",
    },
    {
      id: 6,
      name: "Metformin",
      description: "Used to control high blood sugar in type 2 diabetes.",
      price: "8.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/10/WZ/RL/YY/5875610/metformin-hydrochloride-500-mg-tablet-500x500.jpeg",
    },
    {
      id: 7,
      name: "Lisinopril",
      description: "Used to treat high blood pressure and heart failure.",
      price: "12.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquzMUwap3aIcmZQhZ4FOztWQorUZSonP4wg&s",
    },
    {
      id: 8,
      name: "Losartan",
      description:
        "Used to treat high blood pressure and protect the kidneys from damage due to diabetes.",
      price: "14.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2024/6/427618787/YS/UO/YO/205460954/losartan-50-mg-tablet-500x500.png",
    },
    {
      id: 9,
      name: "Atorvastatin",
      description: "Used to lower cholesterol and triglyceride levels.",
      price: "18.00",
      imageUrl:
        "https://wellonapharma.com/admincms/product_img/product_resize_img/atorvastatin-tablets_1619445470.jpg",
    },
    {
      id: 10,
      name: "Omeprazole",
      description:
        "Used to treat heartburn, stomach ulcers, and gastroesophageal reflux disease (GERD).",
      price: "6.00",
      imageUrl:
        "https://cpimg.tistatic.com/06443492/b/4/OMEPRAZOLE-20-MG-CAPSULE-OMECIL-20-.jpeg",
    },
    {
      id: 11,
      name: "Levothyroxine",
      description: "Used to treat an underactive thyroid (hypothyroidism).",
      price: "9.00",
      imageUrl:
        "https://thumbs.dreamstime.com/z/levothyroxine-prescription-bottle-thyroid-medication-disease-label-created-photographer-157191465.jpg",
    },
    {
      id: 12,
      name: "Azithromycin",
      description:
        "An antibiotic used to treat a variety of bacterial infections.",
      price: "13.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/328523507/HJ/PT/HG/125278182/azithromycin-tablet-500-mg.jpeg",
    },
    {
      id: 13,
      name: "Clindamycin",
      description: "An antibiotic used to treat infections caused by bacteria.",
      price: "15.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/327948977/LI/KI/MA/132158408/clindamycin-phosphate-gel.jpeg",
    },
    {
      id: 14,
      name: "Doxycycline",
      description:
        "An antibiotic used for a variety of infections including respiratory and skin infections.",
      price: "7.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/302099086/RT/BD/KJ/7034457/welldox-100-doxycycline-100mg-capsules.jpg",
    },
    {
      id: 15,
      name: "Montelukast",
      description: "Used to treat asthma and allergies.",
      price: "11.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/4/SG/LF/QE/31640038/montelukast-5mg-tablets.jpg",
    },
    {
      id: 16,
      name: "Cetirizine",
      description:
        "Used to treat allergy symptoms such as runny nose, sneezing, and itching.",
      price: "4.00",
      imageUrl:
        "https://c8.alamy.com/comp/H2NNCR/stock-photo-of-a-box-of-cetirizine-hydrochoride-antihistamine-tablets-H2NNCR.jpg",
    },
    {
      id: 17,
      name: "Furosemide",
      description:
        "A diuretic used to treat fluid retention and swelling caused by heart failure or liver disease.",
      price: "8.50",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/8/VB/DI/HY/6548604/furosemide-20mg-tablet.jpg",
    },
    {
      id: 18,
      name: "Simvastatin",
      description:
        "Used to lower cholesterol levels and prevent heart disease.",
      price: "16.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/NP/LE/KJ/101315720/simvastatin-10mg-tablet-500x500.jpg",
    },
    {
      id: 19,
      name: "Glyburide",
      description:
        "Used to control high blood sugar in people with type 2 diabetes.",
      price: "10.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/355938784/HX/ZA/LU/160651657/glyburide-metformin-hydrochloride-tablets-dibeta-gb-500x500.jpg",
    },
    {
      id: 20,
      name: "Warfarin",
      description:
        "An anticoagulant (blood thinner) used to prevent blood clots.",
      price: "13.50",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436019811/YB/VH/LG/156521613/warfarin-3mg-im-500x500.jpg",
    },
    {
      id: 21,
      name: "Metoprolol",
      description: "Used to treat high blood pressure and angina (chest pain).",
      price: "14.00",
      imageUrl:
        "https://m.media-amazon.com/images/I/81D0w12FmlL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 22,
      name: "Amlodipine",
      description: "Used to treat high blood pressure and chest pain (angina).",
      price: "12.00",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mkZNWrYgvbeOW75IV8tVErYQksMd3fj2rg&s",
    },
    {
      id: 23,
      name: "Hydrochlorothiazide",
      description:
        "A diuretic used to treat high blood pressure and swelling due to fluid build-up.",
      price: "9.50",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/LE/LY/HM/99449851/hydrochlorothiazide-12-5-mg-tablet.jpg",
    },
    {
      id: 24,
      name: "Sertraline",
      description:
        "Used to treat depression, anxiety disorders, and obsessive-compulsive disorder.",
      price: "14.00",
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/363171422/TG/KP/HI/51257137/sertraline-50mg-sertraline-100mg.jpg",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/purchase", formData);
      console.log(response.data); // handle success
    } catch (error) {
      console.error(error); // handle error
    }
  };

  return (
    <div
      className="overflow-y-auto mx-[10px] bg-slate-800"
      style={{
        // position: "relative",
        // top: "10vh", // This ensures the content starts after 10% of the viewport height
        height: "90vh",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      {" "}
      <h1 className="pb-[10px]">Common Medicines</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {medicines.map((medicine, index) => (
          <div
            className="bg-black"
            key={index}
            style={{
              border: "1px solid #ccc",
              top: "10%",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={medicine.imageUrl}
              alt={medicine.name}
              style={{
                width: "400px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <h2>{medicine.name}</h2>
            <p>
              <strong>Description:</strong>

              {medicine.description}
            </p>

            <p>
              <strong>Price:</strong> {medicine.price}
            </p>
            <button
              onClick={() => setShowForm(true)}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Medicines;
