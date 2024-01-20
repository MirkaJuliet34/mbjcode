// testimonial slider data
export const testimonialSlider = [
  {
    image: '/Thomas Edson.png',
    name: 'Thomas Edson',
    position: 'Businessperson',
    message:
      'Genius is 1% inspiration and 99% perspiration.',
  },
  {
    image: '/Aristóteles.png',
    name: 'Aristóteles',
    position: 'Philosopher',
    message:
      'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
  },
  {
    image: '/Ralph Johnson.png',
    name: 'Ralph Johnson',
    position: 'Computer Scientist',
    message:
      'Before software can be reusable it first has to be usable.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons 
import { FaQuoteLeft } from 'react-icons/fa';
// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation,Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
            px-16'>
              {/* AVATAR, NAME, POSITTION */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* AVATAR */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* NAME */}
                  <div className='text-lg'>{person.name}</div>
                  {/* POSITION */}
                  <div className='text-[12px] uppercase font-extralight
                  tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* QUOTE & MESSAGE */}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20'>
                {/* QUOTE ICON */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                  md:mx-0' />
                </div>
                {/* MESSAGE */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;