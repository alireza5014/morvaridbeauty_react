import React from 'react';

import AboutUs from "./AboutUs";
import Device from "./Device";
import Price from "./Price";
import Slider from "./Slider";
import Service from "./Service";
import Blog from "./Blog";
import Meta from "./Meta";

const meta={
    title:'Home',
    keywords:'Home',
    description:'Home',
}
class Home extends React.Component {
  render() {
    return (
 <div>

     <Slider/>
     <AboutUs/>
     <Service/>
     <Price/>
     <Device/>
     <Blog/>
     <Meta meta={meta} />

 </div>
    );
  }
}

export default Home;
