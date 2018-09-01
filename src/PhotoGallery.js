// @flow

import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CircularProgress from '@material-ui/core/CircularProgress';
import getImages from './api/getImages';

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
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

type Props = {
  classes: {
    root: {},
    gridList: {},
    subheader: {},
    progress: {
      margin: number,
    },
  },
  +width: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
};

type State = {
  renderedTiles: Array<Object>,
  +columnsRender: {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
  },
  loading: boolean,
  modalOpen: boolean,
};

class PhotoGallery extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      renderedTiles: [],
      columnsRender: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      },
      loading: true,
      modalOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const images = getImages();
      const renderedTiles = images.map(tile => (
        <GridListTile key={tile.key} cols={tile.cols || 1}>
          <img src={tile.url} alt={tile.altText || tile.caption} />
        </GridListTile>
      ));
      this.setState({loading: false, renderedTiles});
    }, 1500);
  }

  handleCloseModal = () => {
    this.setState({modalOpen: false});
  };

  render() {
    const {classes, width} = this.props;
    const {columnsRender, loading, renderedTiles} = this.state;

    return (
      <div className={classes.root}>
        {loading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <GridList className={classes.gridList} cols={columnsRender[width]}>
            {renderedTiles}
          </GridList>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(withWidth()(PhotoGallery));
