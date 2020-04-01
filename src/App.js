import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default function App() {
  let parallax;
  return (
    <Parallax pages={2} ref={ref => parallax = ref}>
      <ParallaxLayer offset={0.3} speed={2}>
        <span>Scroll down!</span>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={2}>
        <span>Scroll down!</span>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1}>
        <img src="1.jpg"></img>
      </ParallaxLayer>
      <ParallaxLayer speed={-0.2} offset={1.3}>
        <span>I'm going in the other direction!</span>
      </ParallaxLayer>
    </Parallax>
  );
}