import './Comments.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/bundle"

import man from './assets/man.png'
import kavichki from './assets/kavichki.svg'

function Comments() {
    return (
        <section className="Comments">
            <Swiper
                pagination={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="CommentsSwiper"
                slidesPerView={1}
                spaceBetween={250}>
                <SwiperSlide>
                    <div className="Comment">
                        <img src={man} alt=""/>
                        <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex
                            tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna
                            officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
                            Occaecat aute officia excepteur non laboris id qui ad.</p>
                        <img className="kavichki" src={kavichki} alt=''/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Comment">
                        <img src={man} alt=""/>
                        <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex
                            tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna
                            officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
                            Occaecat aute officia excepteur non laboris id qui ad.</p>
                        <img className="kavichki" src={kavichki} alt=''/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Comment">
                        <img src={man} alt=""/>
                        <p>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex
                            tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna
                            officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
                            Occaecat aute officia excepteur non laboris id qui ad.</p>
                        <img className="kavichki" src={kavichki} alt=''/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Comments;