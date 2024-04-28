import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CraftItem from "../Components/CraftItem";
import Gallery from "../Components/Gallery";
import Artist from "../Components/Artist";
import { useEffect, useState } from "react";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";


const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoryName")
      .then((res) => res.json())
      .then((data) => {
        setCategoryName(data);
      });
  }, []);
  console.log(categoryName);
  return (
    <div>
      <Banner></Banner>
      <div className="my-20">
        <div className="text-center w-full flex justify-center items-center flex-col">
          <Bounce duration="2000" direction="top">
            <h1 className="text-4xl font-semibold py-2">Work of Art</h1>
          </Bounce>
          <Slide duration="2000" direction="left">
            <p className="max-w-2xl pt-5  text-center ">
              Explore the versatility of different mediums, from watercolors to
              digital brushes. Connect with artists worldwide, learn from
              experts, and let your imagination run wild in a supportive and
              inspiring environment.
            </p>
          </Slide>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-10">
          {loadedData.slice(0, 6).map((craft) => (
            <CraftItem key={craft._id} craft={craft}></CraftItem>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center my-20">
          <div className="text-center max-w-2xl py-6">
            <Bounce duration="2000">
              <h1 className="text-4xl font-medium py-3 ">
                Painting and Drawing categories
              </h1>
            </Bounce>
            <Slide duration="2000">
              <p className="py-3 ">
                Dive into a world of boundless creativity with our Art & Craft
                Categories section. Discover a spectrum of artistic pursuits,
                from traditional to contemporary, meticulously curated to
                inspire the artisan in you.
              </p>
            </Slide>
          </div>
          <div className="grid lg:grid-cols-6 gap-2 md:grid-cols-2 grid-cols-2">
            {categoryName.map((catName) => (
              <Link
                to={`/category/${catName.subcategory_Name}`}
                key={catName._id}
              >
                <div className="max-w-xs p-2 h-[360px] rounded-md shadow-md ">
                  <Zoom duration="2000">
                    <img
                      src={catName.image}
                      alt=""
                      className="object-cover object-center w-full rounded-md h-44 bg-gray-500"
                    />
                  </Zoom>
                  <Slide duration="2000">
                    <div className="mt-6 mb-2">
                      <span className="block text-xs font-medium tracking-widest uppercase text-[#331A15]">
                        {catName.item_name}
                      </span>
                      <h2 className="text-lg font-semibold tracking-wide ">
                        <span>Category:</span>
                        <span>{catName.subcategory_Name}</span>
                      </h2>
                    </div>
                    <p className="text-[14px] text-gray-400">
                      {catName.short_description}
                    </p>
                  </Slide>
                </div>
              </Link>
            ))}
          </div>
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
