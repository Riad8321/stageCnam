import React, { Component } from "react";
import tpm from '../../assets/Logo-Tpm-min.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stage.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="caroussel-css">
        <Slider {...settings}>
          <div>
          <img className='lbi' src="https://www.la-boite-immo.com/assets/img/modules/laBoite/module_introduction/imgLaBoite_1.jpg" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://www.la-boite-immo.com/assets/img/modules/laBoite/module_infosEntreprise/imgLaBoite_2.jpg" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/o6hvF63Ni_gMdYnM619fxKLy8fyQcuSpcRZsfpQdB2I/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNTYvMTY0NjkyLzFiNTFmOTIzLTQwYmQtNGZjOC04MjRhLTAwNzkzYzUzMWY5MS5qcGc" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/hO2EFYRJI-Ry2fN1i7CA-VXfhYxEReAAlYYzEHPoz0o/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNjAvMTY0NjkyLzA5OGZiNmMwLWY3YWUtNDNiZS04ZTc1LWYwN2RhODhhNWRhZC5qcGc" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/mTDnSsM77ybvAOwkeP6QgYAOT0ngqUvCo13BkTOC1JI/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNTcvMTY0NjkyLzE5MjBlMWY1LTRhNzctNGFmZi05OWY4LTc3MTAyZjgxMDY5NC5qcGc" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/yTJnP4I5Rs-8tfjdY0FGWLoF-xWUOVU7GBr3biIgujo/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNTcvMTY0NjkyL2VkZmRkYTVjLWQxZjUtNDM2MS04MWVhLTY3N2U2ZjM4ODIxYS5qcGc" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/Xj7dGsAiKgyxREegFCMx52ShXDYx8OE8KlXxPFtW-so/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNTgvMTY0NjkyLzllNTk5YjA3LWRlMjAtNGJjYy05ODY4LWM2YjlhMjFlOWNiZS5qcGc" alt="lbi" />
          </div>
          <div>
          <img className='lbi' src="https://cdn-images.welcometothejungle.com/YMDJYomeTnOKb1TpVTwqbMa2cxypc4PZ0USxkhRuffY/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzMyNTYvMTY0NjkyLzA5MTg0Yjk5LWU4NTQtNGI2YS1iYzM3LTYwYzRhMjY2MGJiZC5qcGc" alt="lbi" />
          </div>
        </Slider>
      </div>
    );
  }
}