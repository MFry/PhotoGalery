import Unsplash from 'unsplash-js';

const getImages = (
  imageCount = 20,
  width = 500,
  height = 450,
  type = ['nature', 'water'],
) =>
  Promise.all(
    Array.from(
      Array(imageCount),
      Unsplash.photos.getRandomPhoto({width, height, collection: type}),
    ),
  );
export default getImages;
