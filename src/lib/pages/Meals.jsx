import React, { useState } from "react";
import ProductLayout from "../../components/ProductLayouts"; // Ensure this imports correctly

function Meals() {
  const [activeTab, setActiveTab] = useState("Breakfast");

  return (
    <>
      <div className="content-nav text-center my-10">
        <ul className="list-none p-0">
          <li className="inline-block mx-2">
            <button
              onClick={() => setActiveTab("Breakfast")}
              className={`max-md:px-3 bg-[#8b655c] text-white no-underline py-2 px-8 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === "Breakfast" ? "bg-[#b78276]" : ""
              }`}
            >
              Breakfast
            </button>
          </li>
          <li className="inline-block mx-2">
            <button
              onClick={() => setActiveTab("Lunch")}
              className={`max-md:px-3 bg-[#8b655c] text-white no-underline py-2 px-8 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === "Lunch" ? "bg-[#b78276]" : ""
              }`}
            >
              Lunch
            </button>
          </li>
          <li className="inline-block mx-2">
            <button
              onClick={() => setActiveTab("Dinner")}
              className={`max-md:px-3 bg-[#8b655c] text-white no-underline py-2 px-8 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === "Dinner" ? "bg-[#b78276]" : ""
              }`}
            >
              Dinner
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === "Breakfast" && <ProductLayout type="Meals_Breakfast" />}
        {activeTab === "Lunch" && <ProductLayout type="Meals_Lunch" />}
        {activeTab === "Dinner" && <ProductLayout type="Meals_Dinner" />}
      </div>
    </>
  );
}

export default Meals;
