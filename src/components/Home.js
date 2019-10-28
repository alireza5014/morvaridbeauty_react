import React from 'react';

import AboutUs from "./AboutUs";
import Device from "./Device";
import Price from "./Price";
import Slider from "./Slider";
import Service from "./Service";
import Blog from "./Blog";
import Meta from "./Meta";

const metas=[
    {
        key:"keywords",
        value:"لیزر خوب در شهر قدس ،مراکز لیزر با دستگاه دایود ،مرکز لیزر در شهرقدس ،  لیزر موهای زائد ویژه بانوان شهر قدس  ، لیزر موهای زاید ، کلینیک در شهر قدس ، لیزر مو در شهر قدس"
    },
    {
        key:"description",
        value:"بزرگترین کلینیک لیزر موهای زائد در شهر قدس  با بروزترین دستگاه های لیزر در محیطی آرام ویژه بانوان شهر قدس "}
];
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

     <Meta  title={'کلینیک لیزر موهای زائد مروارید ویژه بانوان در شهر قدس'} meta={metas} />

 </div>
    );
  }
}

export default Home;
