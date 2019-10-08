import React, {Component} from 'react';
import Meta from "./Meta";
const meta={
    title:'about',
    keywords:'about',
    description:'about',
}
export default class AboutUs extends Component {


    render() {
        return (

            <section className="section" id="about">
                <Meta meta={meta} />

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="section-title mb-0 mr-0 mr-md-4">
                                <h4 className="title text-uppercase mb-4">درباره کلینیک مروارید</h4>
                                <p className="text-muted">لیزر رفع موهای زائد دستگاهی است که فرایند از بین بردن مو‌های
                                    ناخواسته یا موهای زائد را با استفاده از قرار گرفتن در معرض پالس لیزر نور انجام
                                    می‌دهد و منجر به از بین بردن فولیکول مو و عدم رشد مجدد مو می‌شود. امروزه ليزرها براي
                                    درمان و همچنين براي زيبايي چهره و بدن استفاده مي‌شوند.
                                    كلينيك ليزر مروارید در سال ۱۳92 تأسيس‌شده است كه تحت نظر پزشکان مجرب اقدام به
                                    لیزرموهای زاید نواحی مختلف بدن و صورت می نماید هم چنین با انجام دیگر کارهای متنوع به
                                    مشكلات زيبايي مي‌پردازد.
                                    وجه تمايز كلينيك ليزر مروارید با دیگر کلینیک های موجود در این منطقه اين است كه این
                                    کلینیک به صورت تمام وقت و حتی روزهای تعطیل اماده ارایه تمام خدمات مرتبط با پوست و مو
                                    می باشد هم چنین داشتن فضای ارام و بزرگ و طراحی شیک و تهویه مناسب پرسنل مجرب و با
                                    اخلاق تمای شرایط موردنیاز جهت حفظ ارامش بیماران و مشتریان را فراهم اورده است.
                                    شايان‌ذكر است كه استفاده از دستگاه‌هاي به‌روز دنيا مجهز به سيستم‌هاي خنك‌كننده قوي،
                                    درمان مؤثر، ايمن و بدون عارضه‌اي را براي مراجعين به ارمغان آورده است. استقبال چشمگير
                                    مراجعين از نحوه خدمت رساني و همچنين اثربخشي دستگاه‌هاي ليزر بدون كمترين عارضه در طول
                                    ساليان گواه اين امر است.
                                </p>
                                <a href={'/'} className="btn btn-custom ">مطالعه بیشتر <i
                                    className="mdi mdi-chevron-right"/></a>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="position-relative">
                                <img src="../images/business/about.jpg" className="img-fluid shadow rounded" alt="" />
                                    <div className="play-icon">
                                        <a href="http://vimeo.com/7396421" className="video-play-icon text-center"
                                           title="تماشا کن">
                                            <i className="mdi mdi-play text-white rounded-pill"/>
                                        </a>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


    )
    }
}
