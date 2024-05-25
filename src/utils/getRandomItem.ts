const getRandomItems = (items: unknown[], length: number) => {
    const randomItems = new Set();
    while (randomItems.size < length) {
      const index = Math.floor(Math.random() * items.length);
      randomItems.add(items[index]);
    }
    return Array.from(randomItems);
};

export default getRandomItems;