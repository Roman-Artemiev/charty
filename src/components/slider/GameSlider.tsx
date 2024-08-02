import React, { useEffect, useRef } from "react";
import { SwiperSlide, Swiper, SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, Button, Center, Image } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { COLORS } from "@/theme";

import { RefObject } from "react";


const GameSlider = ({ short_screenshots, watchSwiper, onSwiperReady  }: { short_screenshots: any, watchSwiper?: RefObject<SwiperRef>, onSwiperReady: () => void }) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <Swiper
      ref={watchSwiper}
      slidesPerView={1}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={onSwiperReady}
      loop={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {short_screenshots.map((screenshot: any) => (
        <SwiperSlide key={screenshot.id}>
          <Image
            borderRadius="10px"
            w="100%"
            src={screenshot.image}
            alt="screenshot"
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