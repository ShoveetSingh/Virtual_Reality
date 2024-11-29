import 'aframe' ;
import 'aframe-environment-component';

function App() {
  return (
    <a-scene>
      <a-assets>
         <img id="city" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg"/>
          <img id="city-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"/>
          <img id="cubes" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"/>
          <img id="cubes-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"/>
          <img id="sechelt" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"/>
         <img id="sechelt-thumb" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"/>
        <audio id="ad" src="click.mp3"/>
      {/* <a-sound src="sound.mp3" autoplay position="0 2 5"></a-sound> */}
      </a-assets>
      <a-entity
       environment="
       preset: starry; 
       dressingAmount: 200;
       lighting:distant;
       shadow:true;
       "
       >
      </a-entity>
      <a-camera>
        <a-cursor
         id="cursor"
         animation_click="
         property:scale;from: 0.1 0.1 0.1;to: 1 1 1; 
         easing:easeInCubic;
         dur:150;
         startEvents:click"
          animation__clickreset="
          property: scale; to: 0.1 0.1 0.1;
           dur: 1;
            startEvents: 
            animationcomplete__click"
         animation_fusing="
         property:scale;from : 1 1 1;to: 0.1 0.1 0.1; 
         easing:easeInCubic;
         dur:150;
         startEvents:click
         "
       >
        </a-cursor>
        
      </a-camera>
      <a-entity
      class="link"
      geometry="primitive:box; height:0.5; width:0.4"
      material="shader:flat; src:#city"
      sound="on:click;  src:#ad"
      position="-1 2 -2"
      rotation=" -5 -5 -5"
      >

      </a-entity>
    </a-scene>
  );
}

export default App;


{/* <a-box 
color="tomato" 
position="0 2 -5"
rotation="0 45 0"
scale="2 2 2"
width="0.4" height="0.3" depth="0.1"
animation="
property:object3D.position.x; 
to: -2.2; dir:reverse;
dur:2500; loop:true;"
>
</a-box> */}