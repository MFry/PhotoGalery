// @flow

import React from 'react';
import {withStyles, createMuiTheme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import orange from '@material-ui/core/colors/orange';
import _ from 'lodash';
import classNames from 'classnames';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import type {image} from './api/getImages';
import Image from './Image';

type Props = {
  imageData: image,
  open: boolean,
  handleClose: Function,
  classes: {transitionButton: {}, left: {}, right: {}},
  handleNext: Function,
  handlePrev: Function,
};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: orange.A400,
    },
  },
});

const styles = theme => ({
  transitionContainer: {},
  transitionButton: {
    transform: 'scale(3.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto',
    zIndex: 1400,
    opacity: 0.6,
    background: 'rgba(0,0,0,0.4)',
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
});

const Lightbox = ({
  imageData,
  open,
  handleClose,
  classes,
  handleNext,
  handlePrev,
}: Props) => {
  if (_.isEmpty(imageData, true)) {
    return <div />;
  }
  return (
    <Modal
      aria-labelledby={`Full page view of image ${imageData.altText}`}
      aria-describedby="Full page modal view of specific image with transition capability"
      open={open}
      onClose={handleClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div>
        <Image {...imageData} />
        <IconButton
          color="secondary"
          aria-label="Go to previous picture"
          className={classNames(classes.transitionButton, classes.left)}
          onClick={() => handlePrev()}>
          <ChevronLeft />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Go to next picture"
          className={classNames(classes.transitionButton, classes.right)}
          onClick={() => handleNext()}>
          <ChevronRight />
        </IconButton>
      </div>
    </Modal>
  );
};
export default withStyles(styles)(Lightbox);
