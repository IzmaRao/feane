'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import bg from '../../public/hero.jpg';

function Hero() {
  return (
    <div>
        <Image className="bg" objectFit="cover" layout="fill" src={bg} alt="bg"/>
      
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
         <SwiperSlide>
           <div className="hero-section">
             <h1>Fast Food Restaurant</h1>
             <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
             <div className='hero-btn'>
               <button type="button">Order Now</button>
             </div>
           </div>
         </SwiperSlide>
         <SwiperSlide>
           <div className="hero-section">
             <h1>Fast Food Restaurant</h1>
             <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
             <div className='hero-btn'>
               <button type="button">Order Now</button>
             </div>
           </div>
         </SwiperSlide>
         <SwiperSlide>
           <div className="hero-section">
             <h1>Fast Food Restaurant</h1>
             <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
             <div className='hero-btn'>
               <button type="button">Order Now</button>
             </div>
           </div>
         </SwiperSlide>
       </Swiper>
    </div>
  )
}

export default Hero