import ellipse from './ellipse.svg';
import './App.css';
import image1 from './image1.png';
import mask from './mask.png';
import Background from './Background.png';

function App() {
  return (
    <div className="landing-page">
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="frame">
          <img className="group" alt="Group" src={Background} />
        </div>
        <div className="group-wrapper">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="ellipse" />
              <img className="img" alt="Ellipse" src={ellipse} />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="navbar-wrapper">
            <div className="navbar">
              <div className="text-wrapper">Home</div>
              <div className="text-wrapper-2">Find Doctors</div>
              <div className="text-wrapper-2">Hospitals</div>
              <div className="text-wrapper-2">Surgeries</div>
            </div>
          </div>
          <img className="group-2" alt="Group" src="group-896.png" />
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="frame-2">
            <div className="frame-3">
              <div className="text-wrapper-4">EmpowHER</div>
              <p className="empower-protect">
                &#34;Empower. Protect. Shine. Our app is every woman&#39;s shield in the digital world.&#34;
              </p>
            </div>
          </div>
        </div>
        <img className="svg" alt="Svg" src={image1} />
        <img className="mask-group" alt="Mask group" src={mask.png} />
      </div>
    </div>
  </div>

  );
}

export default App;
