import React from 'react';
import styles from "./option.module.scss";
import Image from 'next/image';

const Option = ({isSelected = false, pathToIcon, text}: {isSelected?: boolean, pathToIcon: string, text: string}) => {
  return (
    <div className={`${styles.option} ${isSelected ? styles._selected : ""}`}>
      <div className={styles.option__icon}>
        <Image src={pathToIcon} width={24} height={24} alt={text}/>
      </div>
      <span className={styles.option__text}>{text}</span>
    </div>
  )
}

export default Option