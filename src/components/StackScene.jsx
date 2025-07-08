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
                        <ShinyText text="My Projects" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="We deeply care about our work."></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="We uplhold high standarts to ensure"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="each project reflects our commitment"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="to excellence and clinet success,"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="a source of immense preid for us."></ScrambleText>
                        <ShinyText text="Show more about this section" disabled={false} speed={3} className='linked-text' />
                    </div>
                </div>
                
                <div className='content-section code-section'>
                    <div className='left-text'>
                        <ShinyText text="02" disabled={false} speed={3} className='pointer' />
                        <ShinyText text="Code Stack" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="Our team of doers and innovators"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="harnesses leading-edge technology"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="to create products designed to"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="achive your goals."></ScrambleText>
                        <ShinyText text="Show more about this section" disabled={false} speed={3} className='linked-text' />
                    </div>
                </div>
                
                <div className='content-section synergy-section'>
                    <div className='left-text'>
                        <ShinyText text="03" disabled={false} speed={3} className='pointer' />
                        <ShinyText text="Motivation" disabled={false} speed={3} className='point-text' />
                    </div>
                    <div className='right-text'>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="Our code - both literally and figuratively -"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="is collaboration. Fine-tuning each small"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="detail until we can take a step back"></ScrambleText>
                        <ScrambleText className="text-line" speed={20} useOriginalCharsOnly={true} sequential={true} text="and marvel at the whole picture, together."></ScrambleText>
                        <ShinyText text="Show more about this section" disabled={false} speed={3} className='linked-text' />
                    </div>
                </div>
            </div>
        </div>
    );
}