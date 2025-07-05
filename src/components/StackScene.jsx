import '../assets/StackScene.css';

export default function StackScene() {
    return (
        <div className='stack-block'>
            <div className='content-container'>
                <div className='content-section design-section'>
                    <div className='left-text'>
                        <p className='pointer'>01</p>
                        <p className='point-text'>Design</p>
                    </div>
                    <div className='right-text'>
                        <p className='text-line'>We deeply care about our work.</p>
                        <p className='text-line'>We uphold high standards to ensure</p>
                        <p className='text-line'>each project reflects our commitment</p>
                        <p className='text-line'>to excellence and client success,</p>
                        <p className='text-line'>a source of immense pride for us.</p>
                    </div>
                </div>
                
                <div className='content-section code-section'>
                    <div className='left-text'>
                        <p className='pointer'>02</p>
                        <p className='point-text'>Code</p>
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
                        <p className='pointer'>03</p>
                        <p className='point-text'>Synergy</p>
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