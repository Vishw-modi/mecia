import React, { useState } from "react";

const DoctorList = () => {
  // JSON data containing doctor profiles
  const doctors = [
    {
      id: 1,
      name: "Dr. Darshan Panchal",
      degree: "MBBS",
      phone: "+919409373655",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg",
    },
    {
      id: 2,
      name: "Dr. Vishw Modi",
      degree: "MD",
      phone: "+918780267184",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg",
    },
    {
      id: 3,
      name: "Dr. Darshan Pardesi",
      degree: "MD",
      phone: "+918320374225",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/028/287/384/small/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    },
    {
      id: 4,
      name: "Dr. Netra Patel",
      degree: "MD",
      phone: "+917862005679",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
    },
    {
      id: 4,
      name: "Dr. Deep Modi",
      degree: "MBBS",
      phone: "+919911897648",
      imageUrl:
        "https://t3.ftcdn.net/jpg/01/67/15/98/360_F_167159846_MCrwVzB7ysdZKr2vIiJkiCacEoNWagdn.jpg",
    },
  ];

  // State to store the selected doctor's phone number
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

  // Handle button clicks for message and video call
  const handleMessageClick = () => {
    window.location.href = `https://wa.me/${selectedDoctor.phone}?text=Hello%20${selectedDoctor.name}%2C%20I%20would%20like%20to%20schedule%20an%20appointment.`;
  };

  return (
    <>
      <div className="flex flex-col h-[70vh] overflow-auto bg-black w-[800px] ">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex my-2 mx-2 shadow-lg"
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
              src={doctor.imageUrl}
              alt={`Profile of ${doctor.name}`}
              className="profile-image object-cover"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <div className="flex flex-col p-4">
              <h2 className="mt-[3rem] font-bold">{doctor.name}</h2>
              <p className="font-bold">{doctor.degree}</p>
            </div>
            <div className="px-10 pt-[5rem]">
              <button
                className="bg-blue-500 text-white mr-[30px] pr-4 py-2 rounded"
                onClick={() => setSelectedDoctor(doctor)}
              >
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedDoctor && (
        <div>
          <h3 className="mt-4">
            <strong>Contacting {selectedDoctor.name}</strong>
          </h3>
          <button onClick={handleMessageClick}>Send Message</button>
        </div>
      )}
    </>
  );
};

export default DoctorList;
