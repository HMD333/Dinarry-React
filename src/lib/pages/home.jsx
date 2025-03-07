import Cared from "../../components/ContentCared";

const Cards = [
  [
    "public section have a nice view, drinks bar, powerfully network and comfortable place.",
    "src/assets/Home/Valle___a_Guadalupe_Valley_Kitchen.jpg",
  ],
  [
    "occasion section have a magnificent view, background music band and open buffet.",
    "src/assets/Home/large-restaurant.jpg",
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
