// @flow

import shortid from 'shortid';

type image = {
  key: number | string,
  url: string,
  caption: string,
  altText?: string,
  cols?: number,
};

const getImages = (): Array<image> => [
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/wVjoNpcTHxM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/V9nLp8zE_eQ',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/HBgr36tdKwM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/igX2deuD9lc',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/mpMaD_BzP8I',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/hFzIoD0F_i8',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4rDCa5hBlCs',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/BXasVMRGsuo',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/wdX9VkE_CnM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/_fROYnnd26c',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/SbqzBjlICdo',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/1OtUkD_8svc',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/1Z2niiBPg5A',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/zNxlvCZhHNA',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/v4e3JI7DDHI',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/eWFdaPRFjwE',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/cssvEZacHvQ',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/JoRoy500nCc',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4k-U1Wp2d00',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/k2zWqv_yfNM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/_d0zgyMmYT8',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/k2zWqv_yfNM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/4htlh979uRM',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/gIgciC_WKnY',
    caption: '',
  },
  {
    key: shortid.generate(),
    url: 'https://source.unsplash.com/p7S6AxykCl0',
    caption: '',
  },
];
export default getImages;
