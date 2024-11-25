import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pikado from "../../assets/images/PikaDo-Icon-Final 9b.png";
import slide1 from "../../assets/images/Mask groupz.png";
import slide2 from "../../assets/images/Mask groupv.png";
import slide3 from "../../assets/images/Mask group14.png";
import ataa from "../../assets/images/Isolation_Modea.png";
import andalus from "../../assets/images/Isolation_Modes.png";
import logo from "../../assets/images/PikaDo-logo-Final-3 4b.png";
const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <div className="bg-black row w-100 mx-auto  p-5 ">
        <div className="d-flex justify-content-start align-items-center">
          <img
            src={pikado}
            className="img-fluid mb-2 "
            alt="pikado icon"
            style={{ width: "8%" }}
          />
          <h5
            className="fw-bold px-3  text-white text-uppercase"
            style={{ maxWidth: "98%" }}
          >
            {t("PikaDo Updates")}{" "}
          </h5>
        </div>

        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          slidesPerGroupSkip={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            769: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-5 border-bottom border-1 border-dark"
          style={{ minHeight: "220px" }}
        >
          <SwiperSlide
            className="text-center text-white mb-3"
            onClick={() => setOpenModal(true)}
          >
            {" "}
            <img src={slide1} className="img-fluid mb-0 " alt="slide1" />
            Shark Tank Egypt - 2023
          </SwiperSlide>
          <SwiperSlide className="text-center text-white mb-3">
            {" "}
            <img src={slide2} className="img-fluid mb-0 " alt="slide1" />
            Innoxira Oman - 2024
          </SwiperSlide>
          <SwiperSlide className="text-center text-white mb-3">
            {" "}
            <img src={slide3} className="img-fluid mb-0 " alt="slide1" />
            Vodafone Business Egypt - 2023
          </SwiperSlide>
          <SwiperSlide
            className="text-center text-white mb-3"
            onClick={() => setOpenModal(true)}
          >
            {" "}
            <img src={slide1} className="img-fluid mb-0 " alt="slide1" />
            Shark Tank Egypt - 2023
          </SwiperSlide>
          <SwiperSlide className="text-center text-white mb-3">
            {" "}
            <img src={slide2} className="img-fluid mb-0 " alt="slide1" />
            Innoxira Oman - 2024
          </SwiperSlide>
          <SwiperSlide className="text-center text-white mb-3">
            {" "}
            <img src={slide3} className="img-fluid mb-0 " alt="slide1" />
            Vodafone Business Egypt - 2023
          </SwiperSlide>
        </Swiper>

        {/* Partners swiper */}
        <Swiper
          loop={true}
          id="partner"
          slidesPerView={1}
          spaceBetween={50}
          slidesPerGroupSkip={3}
          pagination={{
            clickable: true,
            enabled: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              navigation: {
                enabled: false,
              },
              pagination: {
                clickable: true,
                enabled: true,
              },
            },
            769: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              navigation: {
                enabled: true,
              },
              pagination: {
                clickable: true,
                enabled: false,
              },
            },
          }}
          navigation={true}
          modules={isSmallScreen ? [Pagination] : [Navigation, Pagination]}
          className="mySwiper px-md-5 "
          style={{ maxHeight: "300px" }}
        >
          <SwiperSlide>
            <div className="d-flex justify-content-evenly align-items-center ">
              <img src={ataa} className="img-fluid mb-0 w-25 py-5" alt="ataa" />
              <div className="d-flex flex-column px-4">
                <h5 className="text-white fw-semibold">
                  {t("Partnership with Ataa Educational company")}
                </h5>
                <h6 className="text-white mb-2 fw-lighter">
                  {t(
                    "Choose what suits you between different products like Peer-to-Peer learning for kids, daily English exercises using AI, and business English (ESP)."
                  )}
                </h6>
                <h6 className=" text-info text-decoration-underline rounded-0 ps-0 cursor-pointer w-25">
                  {t("Learn more")}
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-evenly align-items-center ">
              <img
                src={andalus}
                className="img-fluid mb-0 w-25 py-5"
                alt="andalus"
              />
              <div className="d-flex flex-column px-4">
                <h5 className="text-white fw-semibold">
                  {t("Academic experiment with Alandalus Educational company")}
                </h5>
                <h6 className="text-white mb-2 fw-lighter">
                  {t(
                    "Choose what suits you between different products like Peer-to-Peer learning for kids, daily English exercises using AI, and business English (ESP)."
                  )}
                </h6>
                <h6 className=" text-info text-decoration-underline rounded-0 ps-0 cursor-pointer w-25">
                  {t("Learn more")}
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-evenly align-items-center ">
              <img src={ataa} className="img-fluid mb-0 w-25 py-5" alt="ataa" />
              <div className="d-flex flex-column px-4">
                <h5 className="text-white fw-semibold">
                  {t("Partnership with Ataa Educational company")}
                </h5>
                <h6 className="text-white mb-2 fw-lighter">
                  {t(
                    "Choose what suits you between different products like Peer-to-Peer learning for kids, daily English exercises using AI, and business English (ESP)."
                  )}
                </h6>
                <h6 className=" text-info text-decoration-underline rounded-0 ps-0 cursor-pointer w-25">
                  {t("Learn more")}
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-evenly align-items-center ">
              <img
                src={andalus}
                className="img-fluid mb-0 w-25 py-5"
                alt="andalus"
              />
              <div className="d-flex flex-column px-4">
                <h5 className="text-white fw-semibold">
                  {t("Academic experiment with Alandalus Educational company")}
                </h5>
                <h6 className="text-white mb-2 fw-lighter">
                  {t(
                    "Choose what suits you between different products like Peer-to-Peer learning for kids, daily English exercises using AI, and business English (ESP)."
                  )}
                </h6>
                <h6 className=" text-info text-decoration-underline rounded-0 ps-0 cursor-pointer w-25">
                  {t("Learn more")}
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container-fluid   bg-black d-flex  py-2 border-top border-bottom border-dark">
        <div className="d-flex w-100 justify-content-center justify-content-md-between align-items-center ">
          <div className="d-none d-md-flex">
            <a
              className="navbar-brand border-end border-dark px-5 h-50"
              href="/"
            >
              <img
                src={logo}
                alt="pikado logo"
                className="img-fluid py-1  mx-auto"
              />
            </a>

            <div className="d-flex  w-100 justify-content-center justify-content-md-between align-items-start align-items-md-center  p-md-3">
              <ul className="list-unstyled d-flex justify-content-center align-items-center mb-0">
                <li className="nav-item ">
                  <a
                    className="text-white text-decoration-none   mx-2"
                    aria-current="page"
                    href="/"
                  >
                    {t("Study at Home")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-white text-decoration-none mx-2" href="/">
                    {t("Schools")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="text-white text-decoration-none mx-2" href="/">
                    {t("Business")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex px-md-5 w-md-auto justify-content-center  align-items-center  p-md-3">
            <ul className="list-unstyled d-flex justify-content-center align-items-center mb-0">
              <li className="nav-item ">
                <a
                  className="text-white text-decoration-none   mx-2"
                  aria-current="page"
                  href="/"
                >
                  {t("About PikaDo")}
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none mx-2" href="/">
                  {t("News")}
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none mx-2" href="/">
                  {t("Press")}
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none mx-2" href="/">
                  {t("Investment")}
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none mx-2" href="/">
                  {t("Imprint")}
                </a>
              </li>
              <li className="nav-item">
                <a className="text-white text-decoration-none mx-2" href="/">
                  {t("Contact us")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black containerw-100" dir="ltr">
        <div className="d-flex flex-row  mx-auto justify-content-center align-items-start align-items-md-center  p-3">
          <h6 className=" px-3  text-white ">{t("info@PikaDo.io")} </h6>
          <h6 className=" px-3  text-white ">
            {t("Copyright © 2023, PikaDo, All Rights Reserved")}{" "}
          </h6>
        </div>
      </div>

      {/* video modal */}
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            maxHeight: "100%",
          },
          content: {
            width: "80%",
            maxWidth: "800px",
            margin: "40px auto",
            padding: "0px",
            overflow: "hidden",
            maxHeight: "60%",
          },
        }}
      >
        <video width="100%" height="100%" controls>
          <source
            src={"https://youtu.be/fMCAaM9RFuc?feature=shared"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
          <track kind="captions" src="captions-url.vtt" default />
        </video>
        {/* <iframe width="100%" height="80%" src="https://www.youtube.com/embed/fMCAaM9RFuc?si=qpvXBSxxv7qkK7bn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </Modal>
    </>
  );
});
export default Footer;
