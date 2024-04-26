import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <div className="z-1">
      <Swiper loop={true} pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="slide1 max-h-[600px] lg:min-h-[600px] rounded-lg bg-cover bg-center">
        <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1
              className="text-5xl font-semibold "
              
            >
              Colors Come Alive: Paint Your World!
            </h1>
            <p
              className="max-w-xl  "
            
            >
              Dive into a world of vibrant colors, endless inspiration, and supportive community. Let your creativity soar as you explore new techniques, share your artwork, and connect with fellow artists.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2 max-h-[600px] object-cover  rounded-lg bg-cover bg-center">
        <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1
              className="text-5xl max-w-2xl font-semibold "
             
            >
              Brushes & Pixels: Where Art Meets Technology
            </h1>
            <p
              className="max-w-xl  "
             
            >
               Explore the versatility of different mediums, from watercolors to digital brushes. Connect with artists worldwide, learn from experts, and let your imagination run wild in a supportive and inspiring environment.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3 max-h-[600px] rounded-lg bg-cover bg-center">
        <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1
              className="text-5xl max-w-2xl font-semibold "
              
            >
              Artistry Unleashed: Paint the Canvas of Your Dreams!
            </h1>
            <p
              className="max-w-xl  "
              
            >
               Join a diverse community of creators, from beginners to professionals, and embark on a journey of self-expression and discovery. With tutorials, challenges, and a supportive community, there's no limit to what you can create.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide4 max-h-[600px] rounded-lg bg-cover bg-center">
        <div className=" flex flex-col justify-center items-center text-white text-center py-52 space-y-4">
            <h1
              className="text-5xl max-w-2xl font-semibold "
              
            >
              Sketch. Paint. Create: Your Artistic Journey Starts Here!
            </h1>
            <p
              className="max-w-xl  "
            >
              From pencil sketches to digital paintings, unleash your imagination and express yourself freely. Join a community of like-minded artists, learn new skills, and turn your ideas into beautiful works of art.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Banner;
