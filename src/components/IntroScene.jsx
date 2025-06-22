/* import Dither from "./IntroBackground"; */
import Beams from "./IntroBackground";
import '../assets/IntroScene.css';

export default function IntroScene() {
  return (
    <div className="intro-scene">
      <div className="hero-content">
        <div className="text-content">
          <div className="top-text">
            <p className="my-name">Igor Zharov</p>
            <p className="top-text-bottom-text">Find Inspiration.<br/>Create, Generate, <br />Produce & Automate.</p>
          </div>
          <p className="bottom-text">Welcome to PromptVerse. Effortlessly create content, explore endless prompts, 
            and stay ahead with real-time trends. Automate emails, social media, and more 
            while our AI extracts knowledge from any document or URL. Experience a stunning, 
            futuristic design that boosts productivity.</p>
        </div>
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