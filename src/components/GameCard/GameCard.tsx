"use client";

import React from "react";
import styles from "./game-card.module.scss";
import { GameCardProps } from "@/types";
import Image from "next/image";
import getPlatformIcons from "@/utils/platform/getPlatformsIcon";
import getPlatformsList from "@/utils/platform/getPlatformsList";

const GameCard = ({ name, src, price, platforms }: GameCardProps) => {
  const platformsList = getPlatformsList(platforms);
  const platformsIcon = getPlatformIcons(platformsList)?.sort();

  return (
    <div
      className={styles.game_card}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className={styles.game_card__info}>
        <div className={styles.game_card__info__additional}>
          <span className={styles.game_card__info_title}>{name}</span>

          <div className={styles.game_card__info_platforms}>
            {platformsIcon &&
              platformsIcon.map((platform: any, index: number) => (
                <Image
                  key={index}
                  src={`/icons/platforms/${platform}.svg`}
                  width={14}
                  height={14}
                  alt={platform}
                />
              ))}
          </div>
        </div>

        <p className={styles.game_card__info_price}>${price}</p>
      </div>
    </div>
  );
};

export default GameCard;
