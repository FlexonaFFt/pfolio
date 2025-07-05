import ShinyText from './assets/ShinyText.jsx';
import ScrambleText from './assets/ScrambleText.jsx';
import '../assets/StackScene.css';

export default function StackScene() {
    return (
        <div className='stack-block'>
            <div className='content-container'>
                <div className='content-section design-section'>
                    <div className='left-text'>
                        <ShinyText text="01" disabled={false} speed={3} className='pointer' />
                        <ShinyText text="Design" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="We deeply care about our work."></ScrambleText>
                        <p className='text-line'>We deeply care about our work.</p>
                        <p className='text-line'>We uphold high standards to ensure</p>
                        <p className='text-line'>each project reflects our commitment</p>
                        <p className='text-line'>to excellence and client success,</p>
                        <p className='text-line'>a source of immense pride for us.</p>
                    </div>
                </div>
                
                <div className='content-section code-section'>
                    <div className='left-text'>
                        <ShinyText text="02" disabled={false} speed={3} className='pointer' />
                        <ShinyText text="Code Stack" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <p className='text-line'>Our team of doers and innovators</p>
                        <p className='text-line'>harnesses leading-edge technology</p>
                        <p className='text-line'>to create products designed to</p>
                        <p className='text-line'>achieve your goals.</p>
                    </div>
                </div>
                
                <div className='content-section synergy-section'>
                    <div className='left-text'>
                        <ShinyText text="03" disabled={false} speed={3} className='pointer' />
                        <ShinyText text="Synergy" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <p className='text-line'>Our code - both literally and figuratively -</p>
                        <p className='text-line'>is collaboration. Fine-tuning each small</p>
                        <p className='text-line'>detail until we can take a step back</p>
                        <p className='text-line'>and marvel at the whole picture, together.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}