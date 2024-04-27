import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CraftItem from "../Components/CraftItem";
import Gallery from "../Components/Gallery";
import Artist from "../Components/Artist";

const Home = () => {
  const loadedData=useLoaderData()
  console.log(loadedData)
  return (
    <div>
      <Banner></Banner>
      <div className="my-20">
        <div className="text-center w-full flex justify-center items-center flex-col">
          <h1 className="text-4xl text-[#331A15] font-semibold py-2">
            Work of Art
          </h1>
          <p className="max-w-2xl pt-5 text-gray-700 text-center ">
            Explore the versatility of different mediums, from watercolors to
            digital brushes. Connect with artists worldwide, learn from experts,
            and let your imagination run wild in a supportive and inspiring
            environment.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10">
            {
                loadedData.slice(0,6).map(craft=><CraftItem key={craft._id} craft={craft}></CraftItem>)
            }
        </div>
        <div>
          <Gallery></Gallery>
          <Artist></Artist>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
