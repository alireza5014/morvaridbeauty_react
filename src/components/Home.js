import React from 'react';

import AboutUs from "./AboutUs";
import Device from "./Device";
import Price from "./Price";
import Slider from "./Slider";
import Service from "./Service";
import Blog from "./Blog";
import Meta from "./Meta";


class Home extends React.Component {
  render() {
    return (
 <div>

     <Slider/>
     <AboutUs more={true}/>
     <Service limit={6}/>
     <Price/>
     <Device limit={4}/>
     <Blog limit={3}/>
     <Meta  title={'HOME'} meta={[]} />

 </div>
    );
  }
}

export default Home;
