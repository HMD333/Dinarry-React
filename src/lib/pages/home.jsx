import img1 from "../../assets/Home/Valle___a_Guadalupe_Valley_Kitchen.jpg";
import img2 from "../../assets/Home/large-restaurant.jpg";
import Cared from "../../components/ContentCared";

const Cards = [
  [
    "public section have a nice view, drinks bar, powerfully network and comfortable place.",
    img1,
  ],
  [
    "occasion section have a magnificent view, background music band and open buffet.",
    img2,
  ],
];

function Home() {
  return (
    <>
      <div className="flex justify-between flex-wrap m-8">
        {Cards.map((item, index) => (
          <Cared key={index} context={item[0]} url={item[1]} />
        ))}
      </div>
    </>
  );
}

export default Home;
