// @flow

import shortid from 'shortid';

type image = {
  key: number | string,
  url: string,
  caption: string,
  altText: string,
  cols?: number,
};

const getImages = (): Array<image> => [
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/oiqNLJkyjEs',
    caption: 'Picture 1',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/V9nLp8zE_eQ',
    caption: 'Picture 2',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/HBgr36tdKwM',
    caption: 'Picture 3',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/igX2deuD9lc',
    caption: 'Picture 4',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/mpMaD_BzP8I',
    caption: 'Picture 5',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/hFzIoD0F_i8',
    caption: 'Picture 6',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4rDCa5hBlCs',
    caption: 'Picture 7',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/BXasVMRGsuo',
    caption: 'Picture 8',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/wdX9VkE_CnM',
    caption: 'Picture 9',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/_fROYnnd26c',
    caption: 'Picture 10',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/SbqzBjlICdo',
    caption: 'Picture 11',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/1OtUkD_8svc',
    caption: 'Picture 12',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/1Z2niiBPg5A',
    caption: 'Picture 13',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/zNxlvCZhHNA',
    caption: 'Picture 14',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/v4e3JI7DDHI',
    caption: 'Picture 15',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/eWFdaPRFjwE',
    caption: 'Picture 16',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/cssvEZacHvQ',
    caption: 'Picture 17',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/JoRoy500nCc',
    caption: 'Picture 18',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4k-U1Wp2d00',
    caption: 'Picture 19',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/k2zWqv_yfNM',
    caption: 'Picture 20',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/_d0zgyMmYT8',
    caption: 'Picture 21',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/tgIr_4lwELQ',
    caption: 'Picture 22',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4htlh979uRM',
    caption: 'Picture 23',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/gIgciC_WKnY',
    caption: 'Picture 24',
    altText: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/phIFdC6lA4E',
    caption: 'Picture 25',
    altText: '',
  },
];
export default getImages;
export type {image};
