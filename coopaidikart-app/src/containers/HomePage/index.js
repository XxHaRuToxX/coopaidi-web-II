import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from '../../components/Layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./style.css";
import cacao1 from '../../images/cacao1.jpg';
import cacao2 from '../../images/cacao2.jpg';
import cacao3 from '../../images/cacao3.jpg';
import cacao4 from '../../images/cacao4.jpeg';
import Card from "../../components/UI/Card";
// import {getProductFrontend} from "../../actions";
// import { generatePublicUrl } from "../../urlConfig";
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {

  const dispatch = useDispatch();
  // const product = useSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(getProductFrontend());
  //   console.log(getProductFrontend());
  // }, []);

 
  return(
      <Layout>
        <Carousel
            className="carousel-wrapper"
            showThumbs
            infiniteLoop useKeyboardArrows 
            autoPlay interval="5000" transitionTime="5000"
            showIndicators
        >            
          <div 
              style={{display:'block'}}
          >
              <img 
              style={{
                maxHeight:'600px'
              }}
              src={cacao1} alt=""/>
          </div>
          <div 
              style={{display:'block'}}
          >
              <img 
              style={{
                maxHeight:'600px'
              }}
              src={cacao2} alt=""/>
          </div>
          <div 
              style={{display:'block'}}
          >
              <img 
              style={{
                maxHeight:'600px'
              }}
              src={cacao3} alt=""/>
          </div>  
          <div 
              style={{display:'block'}}
          >
              <img 
              style={{
                maxHeight:'600px'
              }}
              src={cacao4} alt=""/>
          </div>    
        </Carousel>
      </Layout>
   )

 }

export default HomePage