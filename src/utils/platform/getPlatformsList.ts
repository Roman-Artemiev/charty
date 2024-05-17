export default function getPlatformsList(platforms: any[]) {
  let platformArray: any[] = [];

  for(let i = 0; i <= platforms.length; i++) {
    const platformSlug = platforms[i]?.platform.slug;
    if (!platformArray.includes(platformSlug)) {
        platformArray.push(platformSlug);
    }
  }

  return platformArray;
}
