import React from "react";
import "./coments.css";
import AV1 from "../../asset/av1.jpg";
import AV2 from "../../asset/av2.jpg";
import AV3 from "../../asset/av3.jpg";
import AV4 from "../../asset/av4.jpg";
import AV5 from "../../asset/av5.jpg";
import AV6 from "../../asset/av6.jpg";
import AV7 from "../../asset/av7.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar: AV1,
    name: "Jessica Siahaan",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV2,
    name: "Jaskya Siahaan",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV3,
    name: "Elsa Butar-butar",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV4,
    name: "Josua Hutagalung",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV5,
    name: "Hobbin Siahaan",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV6,
    name: "Andy Siahaan",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  },
  {
    avatar: AV7,
    name: "Kevin Napitupuluh",
    coment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quaerat sequi maiores pariatur rem optio necessitatibus, debitis inventore nobis temporibus magni iusto, Accusamus hic quod numquam earum magnam eos."
  }
];

const Coments = () => {
  return (
    <section id="coment">
      <h5>Review From Client Or </h5>
      <h2>Coments</h2>

      <Swiper
        className="container coments_container"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={150}
        slidesPerView={1}
      >
        {data.map((index) => {
          return (
            <SwiperSlide className="coments">
              <div className="client_avatar">
                <img src={index.avatar} alt="Client" className="client_img" />
              </div>
              <h5 className="client_name">{index.name}</h5>
              <small className="client_coment">{index.coment}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Coments;
