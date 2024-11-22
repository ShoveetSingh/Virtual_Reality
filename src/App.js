import 'aframe' ;
import 'aframe-environment-component';

function App() {
  return (
    <a-scene>
      <a-box 
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
      </a-box>
      <a-entity
       environment="preset: starry; dressingAmount: 500 sky:purple">
      </a-entity>
    </a-scene>
  );
}

export default App;
