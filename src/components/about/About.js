import React, { Component } from 'react';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from './About.css';
import steph from './steph.png';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <a href='https://happy-northcutt-c0992c.netlify.com/'>
          <Thumbnail url={steph} title='Hello'/>
        </a>
        <h1>I am Stephanie.</h1>
        <h2>I made this site. Here is a little about me.</h2>
        <p>Full-Stack JavaScript developer with a degree in industrial design. I have passion for collaborating, growth, and analyzing code to find solutions. As an avid hiker and creative, you can find me in the mountains making videos about the PNW.</p>
      </div>
    );
  }
}
