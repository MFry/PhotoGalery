// @flow
import React from 'react';

type Props = {
  url: string,
  altText: string,
  caption: string,
};

const Image = ({url, altText, caption}: Props) => (
  <img
    src={url}
    alt={altText || caption}
    style={{maxHeight: '100vh', maxWidth: '100vw'}}
  />
);

export default Image;
