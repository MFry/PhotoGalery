// @flow
import React from 'react';

type Props = {
  url: string,
  altText: string,
  caption: string,
};

const Image = ({url, altText, caption}: Props) => (
  <img src={url} alt={altText || caption} />
);

export default Image;
