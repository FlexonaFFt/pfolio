/* import Dither from "./IntroBackground"; */
import Beams from "./IntroBackground";
import '../assets/IntroScene.css';
import baseballHat from '../assets/images/baseball-hat.png';
import redHat from '../assets/images/red-hat.png';

export default function IntroScene() {
  return (
    <div className="intro-scene">
      <div className="hero-content">
        <p className="subtitle">We are good at creating</p>
        <h1 className="title">"Communication<br/>through quality visuals."</h1>
        <img src={redHat} alt="red hat" className="red-hat" />
        <img src={baseballHat} alt="baseball" className="baseball-hat" />
      </div>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/*
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div> */}
    </div> 
  );
}