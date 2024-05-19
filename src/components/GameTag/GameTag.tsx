import React from 'react';
import styles from "./game-tag.module.scss";
import Image from 'next/image';

const GameTag = ({pathToIcon, text}: {pathToIcon: string, text: string}) => {
  return (
    <div className={styles.game_tag}>
        <Image src={pathToIcon} width={32} height={32} alt="Icon"/>
        <span>{text}</span>
    </div>
  )
}

export default GameTag