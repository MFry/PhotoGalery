import React from 'react';

const Image = ({url, altText, caption}) => (
  <img src={url} alt={altText || caption} />
);

export default Image;
