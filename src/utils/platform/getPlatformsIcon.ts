export default function getPlatformsIcon(slugs: string[]): string[] | undefined {
  const iconSlugs = <string[]>([]);
  const categories: Record<string, string[]> = {
      pc: ['pc', 'web'],
      linux: ['linux'],
      playstation: ['playstation4', 'playstation3', 'playstation5', 'playstation2', 'playstation1', 'ps-vita', 'psp'],
      xbox: ['xbox-one', 'xbox360', 'xbox-series-x', 'xbox-old'],
      nintendo: ['nintendo-switch', 'wii-u', 'nintendo-3ds', 'wii', 'gamecube', 'nintendo-64', 'nintendo-ds', 'nintendo-dsi'],
      apple: ['ios', 'macintosh', 'macos', 'apple-ii'],
      android: ['android']
  };

  slugs.forEach(slug => {
    for(const category in categories) {
      if(categories[category].includes(slug) && !iconSlugs.includes(category)) {
        iconSlugs.push(category);
      }
    }
  });
  
  return iconSlugs.length > 0 ? iconSlugs : undefined;
}