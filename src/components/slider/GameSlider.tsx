import React, { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Center, Image } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { COLORS } from "../../theme";


const GameSlider = ({ short_screenshots}: { short_screenshots: any }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      slidesPerView={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      loop={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {short_screenshots.map((screenshot: any) => (
        <SwiperSlide key={screenshot.id}>
          <Image
            borderRadius="10px"
            w="100%"
            h={{base: "max-content", lg: "480px", xl: "560px"}}
            src={screenshot.image}
            alt="screenshot"
            objectFit='cover'
            objectPosition='center'
          />
        </SwiperSlide>
      ))}

      <Center ref={prevRef} cursor='pointer' position='absolute' top="50%" left="0" zIndex="10" transform="translate(10px, -50%)" aria-label="Previous" bg={COLORS.whiteTransparentLight} borderRadius='50%' w='44px' h='44px'>
        <IoIosArrowBack size='36px' /> 
      </Center>

      <Center ref={nextRef} cursor='pointer' position='absolute' top="50%" right="0" zIndex="10" transform="translate(-10px, -50%)" aria-label="Next" bg={COLORS.whiteTransparentLight} borderRadius='50%' w='44px' h='44px'>
        <IoIosArrowForward size='36px' /> 
      </Center>
    </Swiper>
  );
};

export default GameSlider;