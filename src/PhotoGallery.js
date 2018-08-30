// @flow

import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    paddingLeft: '10px',
    paddingRight: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  subheader: {
    width: '100%',
  },
});

type image = {
  key: number | string,
  url: string,
  caption: string,
  altText?: string,
  cols?: number,
};

type Props = {
  classes: {
    root: {},
    gridList: {},
    subheader: {},
  },
  +width: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
};

type State = {
  tiles: Array<image>,
  +columnsRender: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
};

class PhotoGallery extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array.from(Array(20), (_, x) => ({
        key: x,
        url: 'https://source.unsplash.com/random/?nature,water',
        caption: 'nature',
        altTest: 'nature',
      })),
      columnsRender: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      },
    };
  }

  render() {
    const {classes, width} = this.props;
    const {tiles, columnsRender} = this.state;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={columnsRender[width]}>
          {tiles.map(tile => (
            <GridListTile key={tile.key} cols={tile.cols || 1}>
              <img src={tile.url} alt={tile.caption} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(PhotoGallery));
