import img1 from "../assets/artist1.jpg";
import img2 from "../assets/artist2.jpg";
import img3 from "../assets/artist3.jpg";
import img4 from "../assets/artist4.jpg";
const Artist = () => {
  return (
    <div>
      <section className="py-10 ">
        <h1 className="text-3xl py-7 text-center">Creative Modern Artists</h1>
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full bg-gray-500 aspect-square"
              src={img1}
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square"
              src={img2}
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square"
              src={img3}
            />
            <img
              className="object-cover w-full bg-gray-500 aspect-square"
              src={img4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artist;
