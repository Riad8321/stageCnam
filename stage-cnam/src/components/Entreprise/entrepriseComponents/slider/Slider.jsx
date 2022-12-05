import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './slider.css'

const fadeImages = [
    "https://images.unsplash.com/photo-1634662784124-92130e508084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1138&q=80",
    "https://images.unsplash.com/photo-1634585248909-c80e77988e4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
    "https://www.groupe-la-boite-immo.fr/images/logo-lbi-groupe.png"
  ];

export default function Slideshow() {


  return (
    <div className="Slideshow">
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="slide" />
            </div>
            <h2>First Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className="img-img" src={fadeImages[1]} alt="slide" />
            </div>
            <h2>Second Slide</h2>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="slide" />
            </div>
            <h2>Third Slide</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
}
