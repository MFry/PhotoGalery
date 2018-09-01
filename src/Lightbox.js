// @flow

import React from 'react';
import Modal from '@material-ui/core/Modal';
import type {image} from './api/getImages';
import Image from './Image';

type Props = {
  imageData: image,
  open: boolean,
  handleClose: Function,
};

const Lightbox = ({imageData, open, handleClose}: Props) => (
  <Modal
    aria-labelledby={`Full page view of image ${imageData.altText}`}
    aria-describedby="Full page modal view of specific image with transition capability"
    open={open}
    onClose={handleClose}>
    <Image {...imageData} />
  </Modal>
);
export default Lightbox;
