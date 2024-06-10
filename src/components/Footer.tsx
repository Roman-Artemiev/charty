import React from 'react';
import styles from "./footer.module.scss";
import Header from './header/Header';
import FooterBtn from './FooterBtn';
import Image from 'next/image';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { COLORS } from '@/theme';

const Footer = () => {
  return (

    <Box p="40px 0 20px 0" bg={COLORS.dark}>
      <Header/>

      <Flex py={'60px'} justifyContent={'center'} alignItems={'center'} columnGap={'10px'}>
        <FooterBtn pathToIcon='../../icons/store-icon.svg' clue="" alt='Store'/>
        <FooterBtn pathToIcon='../../icons/arrow-top-icon.svg' clue="" alt='Go to top'/>
        <FooterBtn pathToIcon='../../icons/triangle-icon.svg' clue="" alt='Random'/>
        <FooterBtn pathToIcon='../../icons/user-icon.svg' clue="" alt='Profile'/>
      </Flex>

      <Flex className='wrapper' pt="20px" justifyContent={'space-between'} alignItems={'center'} flexDirection={{base: 'column', md: 'row'}} gap='20px' borderTop="2px solid" borderColor={COLORS.whiteTransparent}> 
          <Text color={COLORS.whiteTransparent} textAlign={{base: 'center', sm: 'left'}} fontSize={14} fontWeight={400}>© 2024 Charty. All rights reserved.</Text>

          <Flex columnGap={'10px'}>
              <Link href='https://t.me/Romify' target='_blank'>
                <svg cursor={'pointer'} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="url(#paint0_linear_18_1694)" />
                  <path d="M8.09052 17.6032C13.325 15.2747 16.8155 13.7396 18.5619 12.9979C23.5485 10.8803 24.5846 10.5124 25.26 10.5001C25.4085 10.4976 25.7406 10.5352 25.9558 10.7134C26.1374 10.8639 26.1874 11.0672 26.2113 11.2099C26.2352 11.3526 26.265 11.6776 26.2413 11.9316C25.9711 14.8305 24.8019 21.8654 24.207 25.1122C23.9553 26.4861 23.4597 26.9467 22.9799 26.9918C21.9372 27.0898 21.1454 26.2882 20.1355 25.6123C18.5551 24.5546 17.6623 23.8962 16.1283 22.864C14.3555 21.6712 15.5047 21.0156 16.5151 19.9442C16.7795 19.6638 21.3737 15.3972 21.4627 15.0101C21.4738 14.9617 21.4841 14.7812 21.3791 14.686C21.2741 14.5907 21.1192 14.6233 21.0073 14.6492C20.8488 14.6859 18.3242 16.3897 13.4335 19.7604C12.7169 20.2629 12.0678 20.5077 11.4863 20.4948C10.8451 20.4807 9.61189 20.1247 8.6951 19.8204C7.57062 19.4472 6.6769 19.2499 6.75472 18.6161C6.79526 18.286 7.24053 17.9483 8.09052 17.6032Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear_18_1694" x1="18" y1="0" x2="18" y2="35.7329" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2AABEE" />
                      <stop offset="1" stopColor="#229ED9" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>

             <svg cursor={'pointer'} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_18_1713)">
                 <circle cx="18" cy="18" r="18" fill="white" />
                 <path d="M18.5814 17.0408C17.7229 17.4083 16.7487 17.8251 15.486 17.8251C14.9578 17.824 14.4321 17.7515 13.9233 17.6096L14.7966 26.5757C14.8275 26.9504 14.9982 27.2998 15.2749 27.5546C15.5516 27.8092 15.9138 27.9506 16.2899 27.9505C16.2899 27.9505 17.5281 28.0148 17.9413 28.0148C18.3859 28.0148 19.7194 27.9505 19.7194 27.9505C20.0953 27.9505 20.4575 27.8091 20.7341 27.5545C21.0106 27.2997 21.1814 26.9503 21.2123 26.5757L22.1476 16.6678C21.7296 16.5251 21.3077 16.4302 20.8321 16.4302C20.0097 16.4299 19.3471 16.7131 18.5814 17.0408Z" fill="#FFDD00" />
                 <path d="M26.1865 12.3881L26.0549 11.7248C25.9369 11.1296 25.6691 10.5673 25.0582 10.3522C24.8623 10.2833 24.6402 10.2538 24.49 10.1113C24.3399 9.96888 24.2954 9.74766 24.2608 9.54252C24.1965 9.166 24.136 8.78916 24.0701 8.41329C24.0132 8.09014 23.9682 7.72714 23.82 7.43068C23.627 7.03261 23.2268 6.79982 22.8286 6.6458C22.6247 6.56966 22.4165 6.50525 22.2052 6.45288C21.2107 6.19051 20.1651 6.09404 19.1419 6.03907C17.9139 5.9713 16.6825 5.99172 15.4575 6.10015C14.5455 6.18311 13.5851 6.28344 12.7186 6.59886C12.4019 6.71429 12.0755 6.85287 11.8347 7.09756C11.5392 7.3982 11.4427 7.86314 11.6585 8.23805C11.8118 8.50428 12.0716 8.69238 12.3472 8.81682C12.7061 8.97715 13.081 9.09915 13.4655 9.18079C14.5363 9.41744 15.6452 9.51037 16.739 9.54992C17.9514 9.59885 19.1658 9.5592 20.3725 9.43128C20.6708 9.39848 20.9687 9.35914 21.266 9.31327C21.6161 9.25958 21.8409 8.8017 21.7377 8.48274C21.6142 8.1014 21.2824 7.95349 20.9072 8.01105C20.8519 8.01973 20.7968 8.02777 20.7415 8.0358L20.7017 8.04159C20.5746 8.05767 20.4474 8.07268 20.3204 8.08661C20.0577 8.11491 19.7945 8.13805 19.5306 8.15606C18.9397 8.19722 18.3471 8.21619 17.7548 8.21715C17.1729 8.21715 16.5905 8.20076 16.0098 8.16249C15.7449 8.14513 15.4806 8.12305 15.217 8.09625C15.097 8.08371 14.9774 8.07053 14.8578 8.05574L14.744 8.04128L14.7191 8.03774L14.6011 8.0207C14.3601 7.98436 14.1189 7.94256 13.8803 7.89208C13.8563 7.88674 13.8347 7.87334 13.8193 7.85411C13.8038 7.83487 13.7954 7.81095 13.7954 7.7863C13.7954 7.76163 13.8038 7.73771 13.8193 7.71847C13.8347 7.69924 13.8563 7.68585 13.8803 7.68051H13.8848C14.0916 7.63646 14.2999 7.59884 14.5089 7.56604C14.5785 7.55511 14.6485 7.54439 14.7185 7.53389H14.7204C14.8513 7.52521 14.9829 7.50174 15.113 7.4863C16.2461 7.36846 17.3857 7.32827 18.5242 7.36604C19.0769 7.38212 19.6294 7.4146 20.1795 7.47054C20.2978 7.48276 20.4155 7.49563 20.5332 7.5101C20.5782 7.51556 20.6235 7.52199 20.6689 7.52746L20.7602 7.54063C21.0265 7.58029 21.2913 7.62842 21.5547 7.68501C21.9451 7.76989 22.4464 7.79755 22.62 8.22519C22.6753 8.36088 22.7003 8.51168 22.7309 8.65412L22.7698 8.83579C22.7708 8.83905 22.7716 8.84237 22.7721 8.84575C22.864 9.27447 22.9561 9.70318 23.0483 10.1319C23.055 10.1636 23.0551 10.1963 23.0488 10.228C23.0423 10.2598 23.0293 10.2898 23.0108 10.3163C22.9921 10.3429 22.9683 10.3653 22.9407 10.3822C22.9131 10.3991 22.8823 10.4101 22.8502 10.4145H22.8476L22.7913 10.4222L22.7357 10.4296C22.5595 10.4526 22.3831 10.474 22.2065 10.494C21.8586 10.5336 21.5101 10.5679 21.1611 10.5968C20.4678 10.6545 19.7729 10.6923 19.0766 10.7103C18.7218 10.7198 18.3672 10.7242 18.0126 10.7235C16.6015 10.7224 15.1915 10.6404 13.7896 10.4779C13.6379 10.4599 13.4861 10.4406 13.3343 10.421C13.452 10.4361 13.2488 10.4094 13.2076 10.4036C13.1112 10.3901 13.0147 10.3761 12.9183 10.3615C12.5945 10.3129 12.2726 10.2531 11.9495 10.2007C11.5588 10.1364 11.1852 10.1686 10.8318 10.3615C10.5417 10.5202 10.307 10.7636 10.1588 11.0592C10.0064 11.3743 9.96108 11.7174 9.89292 12.056C9.82475 12.3946 9.71865 12.7589 9.75883 13.1064C9.84533 13.8566 10.3698 14.4662 11.1241 14.6026C11.8337 14.7312 12.5472 14.8353 13.2627 14.9241C16.073 15.2682 18.9121 15.3094 21.7312 15.0469C21.9608 15.0255 22.19 15.0021 22.419 14.9768C22.4905 14.969 22.5629 14.9772 22.6308 15.0009C22.6987 15.0247 22.7604 15.0632 22.8115 15.114C22.8626 15.1646 22.9016 15.2261 22.9259 15.2939C22.9501 15.3615 22.9589 15.4339 22.9515 15.5054L22.8801 16.1993C22.7363 17.6014 22.5924 19.0034 22.4486 20.4053C22.2986 21.8776 22.1475 23.3496 21.9955 24.8216C21.9526 25.2362 21.9098 25.6506 21.8669 26.065C21.8258 26.473 21.82 26.8939 21.7425 27.2971C21.6203 27.9312 21.191 28.3205 20.5647 28.463C19.9909 28.5936 19.4046 28.6622 18.8162 28.6675C18.1638 28.671 17.5117 28.6421 16.8593 28.6456C16.1629 28.6495 15.3099 28.5852 14.7723 28.0669C14.2999 27.6116 14.2346 26.8987 14.1703 26.2824C14.0846 25.4662 13.9996 24.6503 13.9154 23.8344L13.4426 19.2979L13.1369 16.3626C13.1318 16.3141 13.1266 16.2662 13.1218 16.2173C13.0852 15.8671 12.8372 15.5244 12.4466 15.5421C12.1122 15.5569 11.7321 15.8411 11.7713 16.2173L11.998 18.3935L12.4668 22.8949C12.6004 24.1736 12.7336 25.4525 12.8665 26.7316C12.8922 26.9766 12.9163 27.2222 12.9433 27.4672C13.0902 28.8061 14.1128 29.5276 15.379 29.7309C16.1185 29.8498 16.8761 29.8743 17.6265 29.8864C18.5886 29.9019 19.5602 29.9389 20.5065 29.7645C21.9087 29.5073 22.9607 28.5711 23.1109 27.1187C23.1538 26.6994 23.1967 26.28 23.2396 25.8605C23.3821 24.4732 23.5244 23.0858 23.6666 21.6983L24.1315 17.1645L24.3447 15.0868C24.3553 14.9837 24.3988 14.8869 24.4688 14.8105C24.5387 14.7341 24.6314 14.6823 24.7331 14.6627C25.134 14.5845 25.5173 14.4511 25.8026 14.1459C26.2565 13.6602 26.3469 13.0267 26.1865 12.3881ZM11.1035 12.8363C11.1096 12.8335 11.0984 12.8859 11.0935 12.9103C11.0926 12.8733 11.0945 12.8405 11.1035 12.8363ZM11.1424 13.1373C11.1456 13.135 11.1553 13.1479 11.1652 13.1633C11.1501 13.1492 11.1405 13.1386 11.1421 13.1373H11.1424ZM11.1807 13.1878C11.1945 13.2113 11.2019 13.226 11.1807 13.1878V13.1878ZM11.2575 13.2501H11.2594C11.2594 13.2524 11.263 13.2546 11.2643 13.2569C11.2621 13.2544 11.2598 13.2521 11.2572 13.2501H11.2575ZM24.7144 13.157C24.5704 13.2939 24.3534 13.3576 24.1389 13.3894C21.7338 13.7463 19.2937 13.927 16.8622 13.8472C15.1221 13.7877 13.4002 13.5945 11.6774 13.3511C11.5086 13.3273 11.3257 13.2965 11.2096 13.172C10.991 12.9373 11.0984 12.4646 11.1553 12.1811C11.2074 11.9212 11.307 11.575 11.616 11.538C12.0983 11.4814 12.6585 11.6849 13.1356 11.7573C13.71 11.8449 14.2867 11.9151 14.8655 11.9679C17.3355 12.193 19.847 12.1579 22.3062 11.8287C22.7543 11.7684 23.2009 11.6984 23.646 11.6187C24.0424 11.5476 24.482 11.4142 24.7215 11.8248C24.8859 12.1045 24.9077 12.4788 24.8823 12.7949C24.8745 12.9326 24.8143 13.0621 24.7141 13.157H24.7144Z" fill="#0D0C22" />
               </g>
               <defs>
                 <clipPath id="clip0_18_1713">
                   <rect width="36" height="36" fill="white" />
                 </clipPath>
               </defs>
             </svg>

            <Link href='https://github.com/Roman-Artemiev' target='_blank'>
              <svg cursor={'pointer'} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0001 0C8.06024 0 0 8.26271 0 18.4557C0 26.6099 5.15759 33.5279 12.3096 35.9683C13.2092 36.1391 13.5395 35.5679 13.5395 35.0805C13.5395 34.6404 13.5228 33.1865 13.515 31.6444C8.50736 32.7608 7.45068 29.4669 7.45068 29.4669C6.63187 27.3336 5.45209 26.7664 5.45209 26.7664C3.81894 25.6209 5.57519 25.6445 5.57519 25.6445C7.38272 25.7747 8.33447 27.5463 8.33447 27.5463C9.93991 30.3678 12.5454 29.5521 13.5725 29.0805C13.7341 27.8877 14.2006 27.0736 14.7154 26.6127C10.7173 26.146 6.51443 24.5635 6.51443 17.4918C6.51443 15.4768 7.21759 13.8305 8.36905 12.538C8.18216 12.0732 7.56604 10.1961 8.54342 7.65392C8.54342 7.65392 10.055 7.1579 13.4947 9.5457C14.9306 9.13678 16.4704 8.93171 18.0001 8.92468C19.5299 8.93171 21.0709 9.13678 22.5094 9.5457C25.945 7.1579 27.4545 7.65392 27.4545 7.65392C28.4343 10.1961 27.8178 12.0732 27.631 12.538C28.7851 13.8305 29.4835 15.4768 29.4835 17.4918C29.4835 24.5803 25.2726 26.1411 21.2644 26.598C21.91 27.1707 22.4853 28.2939 22.4853 30.0157C22.4853 32.4851 22.4644 34.4726 22.4644 35.0805C22.4644 35.5716 22.7884 36.1471 23.7008 35.9658C30.849 33.5227 36 26.6072 36 18.4557C36 8.26271 27.9409 0 18.0001 0Z" fill="white" />
                <path d="M10.6161 29.8566C10.5727 29.9998 10.3707 30.0648 10.1671 30.004C9.96394 29.9414 9.83095 29.7737 9.87201 29.6291C9.91426 29.485 10.1172 29.4173 10.3222 29.4823C10.5251 29.5447 10.6584 29.7111 10.6161 29.8566Z" fill="#161514" />
                <path d="M9.27726 29.2662C9.17878 29.3767 8.96903 29.347 8.81551 29.1963C8.65842 29.0489 8.61468 28.8398 8.71346 28.7294C8.81313 28.6186 9.02407 28.6498 9.17878 28.7993C9.33468 28.9464 9.38228 29.157 9.27726 29.2662Z" fill="#161514" />
                <path d="M8.3068 28.2496C8.19672 28.3274 8.01672 28.2544 7.90545 28.0919C7.79537 27.9294 7.79537 27.7345 7.90783 27.6565C8.0194 27.5784 8.19672 27.6486 8.30948 27.8099C8.41927 27.9751 8.41927 28.17 8.3068 28.2496Z" fill="#161514" />
                <path d="M7.59841 27.1971C7.51272 27.2779 7.34522 27.2404 7.23156 27.1127C7.11404 26.9853 7.09203 26.8149 7.1789 26.7329C7.26727 26.6521 7.42971 26.69 7.54753 26.8174C7.66505 26.9463 7.68796 27.1154 7.59841 27.1971Z" fill="#161514" />
                <path d="M6.87064 26.3719C6.83107 26.4627 6.69064 26.4899 6.5627 26.4276C6.43239 26.3679 6.3592 26.2442 6.40145 26.1531C6.44012 26.0596 6.58085 26.0336 6.71087 26.0962C6.84148 26.1558 6.91586 26.2808 6.87064 26.3719Z" fill="#161514" />
                <path d="M13.4547 29.7294C13.4803 29.8765 13.3319 30.0275 13.1197 30.0678C12.9112 30.1065 12.7181 30.0157 12.6916 29.8699C12.6657 29.7192 12.8169 29.5682 13.0251 29.5291C13.2376 29.4916 13.4277 29.58 13.4547 29.7294Z" fill="#161514" />
                <path d="M12.0865 29.9664C12.0915 30.1171 11.919 30.2421 11.7053 30.2448C11.4905 30.2496 11.3168 30.1277 11.3144 29.9794C11.3144 29.8272 11.4831 29.7034 11.6979 29.6998C11.9115 29.6956 12.0865 29.8166 12.0865 29.9664Z" fill="#161514" />
              </svg>
            </Link>
          </Flex>
      </Flex>
    </Box>
  )
}

export default Footer