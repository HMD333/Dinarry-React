import React, { useState } from "react";
import ProductLayout from "../../components/ProductLayouts"; // Ensure this imports correctly

function Drinks() {
  const [activeTab, setActiveTab] = useState("Cold");

  return (
    <>
      <div className="content-nav text-center my-10">
        <ul className="list-none p-0">
          <li className="inline-block mx-2">
            <button
              onClick={() => setActiveTab("Cold")}
              className={`bg-[#8b655c] text-white no-underline py-2 px-8 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === "Cold" ? "bg-[#b78276]" : ""
              }`}
            >
              Cold
            </button>
          </li>
          <li className="inline-block mx-2">
            <button
              onClick={() => setActiveTab("Hot")}
              className={`bg-[#8b655c] text-white no-underline py-2 px-8 flex justify-center items-center rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === "Hot" ? "bg-[#b78276]" : ""
              }`}
            >
              Hot
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === "Cold" && <ProductLayout type="COLD_Drinks" />}
        {activeTab === "Hot" && <ProductLayout type="HOT_Drinks" />}
      </div>
    </>
  );
}

export default Drinks;
