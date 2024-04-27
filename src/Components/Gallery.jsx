import img1 from '../assets/11.jpg'
import img2 from '../assets/12.jpg'
import img3 from '../assets/01.jpg'
import img4 from '../assets/Abstract Oil Painting .jpg'
import img5 from '../assets/Animal Watercolor .jpg'
import img6 from '../assets/forest.png'
import img7 from '../assets/mountaine.jpg'
import img8 from '../assets/pencil sketch.jpg'
import img9 from '../assets/Acrylic Portrait .jpg'
import img10 from '../assets/Floral Watercolor .jpg'

const Gallery = () => {
  return (
    <div>
      <section className="py-6 ">
        <h1 className='text-3xl text-center py-7'>Artistic Creations</h1>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={img9}
          />
          <img
            src={img10}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
