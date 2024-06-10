'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./header.module.scss";
import { motion } from 'framer-motion';

const Header = () => {
    const [isInputFocus, setIsInputFocus] = useState<boolean>(false);

    const handleSearchFocus = () => {
        setIsInputFocus(true);
    }

    const handleSearchBlur = () => {
        setIsInputFocus(false);
    }

    return (
        <header className={styles.header}>
            <div className="wrapper">
                <div className={styles.header__wrapper}>
                    <Image className={styles.logo} src="./logo.svg" alt='Logo' width={98} height={40} />

                    <form className={styles.header__search}>
                        <motion.input
                            className={styles.search__input}
                            type="text"
                            placeholder='Search for...'
                            animate={{width: isInputFocus ? '80%' : '50%'}}
                            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.3 }}
                            onBlur={handleSearchBlur}
                            onFocus={handleSearchFocus}
                        />  
                        <button className={styles.search__btn}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4792 14.4935L19.25 19.25M16.5 9.625C16.5 13.4219 13.4219 16.5 9.625 16.5C5.82804 16.5 2.75 13.4219 2.75 9.625C2.75 5.82804 5.82804 2.75 9.625 2.75C13.4219 2.75 16.5 5.82804 16.5 9.625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </form>

                    <div className={styles.header__cart}>
                        <div className={styles.wishlist}>
                            <Image src={'./icons/medal-star-icon.svg'} alt='Wishlist' width={22} height={22}/>
                            <p className={styles.header__cart_count}>23</p>
                        </div>
                        <div className={styles.header__cart_line}></div>
                        <div className={styles.cart}>
                            <Image src={'./icons/bag-icon.svg'} alt='Cart' width={22} height={22}/>
                            <p className={styles.header__cart_count}>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header