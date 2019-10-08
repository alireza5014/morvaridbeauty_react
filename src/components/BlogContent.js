import React, {Component} from 'react';
import Meta from "./Meta";
const meta={
    title:'BlogDetail',
    keywords:'BlogDetail',
    description:'BlogDetail',
}

export default class BlogDetail extends Component {
    componentDidMount () {
        const { handle } = this.props.match.params;
        console.log(this.props.match.params);
        // fetch(`https://api.twitter.com/user/${handle}`)
        //     .then((user) => {
        //         this.setState(() => ({ user }))
        //     })
    }

    render() {
        return (

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-6">
                            <div className="section-title mb-0 mr-0 mr-md-4">
                                <h4 className="title text-uppercase mb-4">چگونه می توان بهره وری را افزایش داد؟</h4>
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

                            </div>

                        </div>



                    </div>

                </div>

            </section>



    )
    }
}
