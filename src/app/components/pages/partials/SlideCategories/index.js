import React from 'react';
import Title from 'react-title-component';
import RaisedButton from 'material-ui/RaisedButton';
import FullWidthSection from '../FullWidthSection';
import styleResizable from 'material-ui/utils/styleResizable';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { StickyContainer, Sticky } from 'react-sticky';
import styles from './style.css';


const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1'
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
    featured: true,
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const Presentations = () => (
  <div>
    <Title render={(previousTitle) => `Presentations - ${previousTitle}`} />
    <Sticky style={{zIndex: 10}}>
      <header style={{ background: 'white' }}>
        <Subheader>Overview</Subheader>
      </header>
    </Sticky>
    <StickyContainer >
          <Card>
            <Sticky style={{zIndex: 10}}>
              <header style={{ background: 'white' }}>
                <Subheader>Team</Subheader>
              </header>
            </Sticky>

           <GridList
             cols={5}
             cellHeight={75}
             padding={1}
             style={styles.gridList}
           >
           {tilesData.map((tile) => (
             <GridTile
               key={tile.img}
               containerElement="article"
               title={tile.title}
               actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
               actionPosition="left"
               titlePosition="top"
               titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
               cols={tile.featured ? 2 : 1}
               rows={tile.featured ? 2 : 2}
             >
               <img src={tile.img} />

             </GridTile>
           ))}
         </GridList>
         <Sticky style={{zIndex: 11, width: '100%'}}>
           <header style={{ background: 'white' }}>
             <Subheader>Imagery</Subheader>
           </header>
         </Sticky>

         <GridList
           cols={3}
           cellHeight={100}
           padding={1}
           style={styles.gridList}
         >
           {tilesData.map((tile) => (
             <GridTile
               key={tile.img}
               title={tile.title}
               containerElement="article"
               actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
               actionPosition="left"
               titlePosition="top"
               titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
               cols={tile.featured ? 2 : 1}
               rows={tile.featured ? 2 : 2}
             >
               <img src={tile.img} />

             </GridTile>
           ))}
           </GridList>
       </Card>
       </StickyContainer>
    </div>

);

export default Presentations;
