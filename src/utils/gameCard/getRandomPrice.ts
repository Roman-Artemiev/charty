import { GameCardHome } from '@/types';
import React from 'react'

function getRandomPrice(game: GameCardHome) {
    const { released } = game;
    const isIndie = !!game.genres.find((g) => g.name === 'Indie');
    const releaseYear = new Date(released).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearsDifference = currentYear - releaseYear;
    const minPrice = 1;
    let discountPerYear = 0.35;
    let newPrice = isIndie ? 30 : 70;
    for (let i = 0; i < yearsDifference; i++) {
      newPrice *= 1 - discountPerYear;
      if (discountPerYear > 0.1) {
        discountPerYear -= 0.08;
      } else {
        discountPerYear = 0.1;
      }
    }
    newPrice = Math.ceil(newPrice);
    newPrice = newPrice < minPrice ? minPrice : newPrice;
    return (newPrice - Math.random()).toFixed(2);
}

export default getRandomPrice;