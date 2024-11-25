import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import home1 from "../../assets/images/home1.jpg";
import sib from "../../assets/images/500-SIB.jpeg";
import phone from "../../assets/images/Phone-01S 1.jpg";
import clients from "../../assets/images/clinets.jpg";
import peer from "../../assets/images/Group 827.png";
import teens from "../../assets/images/teens.png";
import employee from "../../assets/images/Group 821.png";
import wuzzuf from "../../assets/images/wuzzuf.png";
import profession from "../../assets/images/profession.png";
import VerticalProgressBar from '../VerticalProgressBar/VerticalProgressBar';
import Footer from '../Footer/Footer.tsx';

export default function Home() {
    const { t } = useTranslation();
    const sections = ['Row 1', 'Row 2', 'Row 3', 'Row 4', 'Row 5', 'Row 6'];
const [activeSection, setActiveSection] = useState<number|string>();
    const sectionRefs = sections.map(() => React.createRef<HTMLDivElement>());
useEffect(() => {
  const handleScroll = () => {
    const sectionRefsArray = sections.map((section, index) => sectionRefs[index]);
    const activeSectionIndex = sectionRefsArray.findIndex((ref) => {
      const sectionRect = ref.current?.getBoundingClientRect();
      return sectionRect && (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2);
    });
    setActiveSection(activeSectionIndex === -1 ? '' : activeSectionIndex);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [sections, sectionRefs, setActiveSection]);
useEffect(()=>{
    setActiveSection(0)
},[])
  return (
    <>
       <VerticalProgressBar sections={sections}  activeSection={activeSection} />
    <div className='container-fluid'>
        <div ref={sectionRefs[0]} className="row px-0 px-lg-5 pt-5">
            <div className="col-md-6 order-1 order-md-0 d-flex flex-column justify-content-center align-items-start">
                {/* <h1 className="fw-bolder  px-2 mb-1 " style={{maxWidth:'98%' ,fontSize:'38.375px'}}>{t("Take your English")} {t("Conversational skills to")} {t("the advanced level")}</h1> */}
                <h2 className="fw-bold h1 px-2 mb-1 d-block d-md-none" style={{fontSize:'38.375px'}}>{t("Take your English")} {t("Conversational skills to")} {t("the advanced level")}</h2>
                <h2 className="fw-bold h1 mb-1 d-none d-md-block">{t("Take your English")} </h2>
                <h2 className="fw-bold h1 mb-1 d-none d-md-block">{t("Conversational skills to")}</h2>
                <h2 className="fw-bold h1 mb-4 d-none d-md-block">{t("the advanced level")}</h2>
                <p className=" mb-4 px-2 d-block d-md-none">{t("No pressure, no long time sessions, by using the academic")} {t("repetition way, the Peer-to-Peer way, and the AI in teaching.")}</p>
                <p className=" mb-0 d-none d-md-block">{t("No pressure, no long time sessions, by using the academic")}</p>
                <p className=" mb-4 d-none d-md-block">{t("repetition way, the Peer-to-Peer way, and the AI in teaching.")}</p>
            <button className='btn bg-pikado-cyan rounded-0 px-5'>{t("Start now")}</button>
            </div>
            <div className="col-md-6 order-0 order-md-1 mb-md-0 mb-4">
                <img src={home1} className='img-fluid mb-2' alt="pikado intro" />
                <p className="text-center">{t("watch the video")}</p>
            </div>
        </div>
        <div  className="row px-0 px-lg-5 pt-4 justify-content-between">
            <div className="col-md-6 mb-3 d-flex justify-content-center justify-content-md-start align-items-center">
            <p className='rounded border p-3 px-2 px-md-4 border-1 me-3 fw-bold' style={{maxHeight:'58px'}}> {t("+9K Paid Users")}</p>
            <p className='rounded border p-3 px-2 px-md-4 border-1 me-3 fw-bold' style={{maxHeight:'58px'}}> {t("+7K Done Sessions")}</p>
             </div>
            <div className="col-md-6  d-flex  justify-content-evenly align-items-center">
            <img src={sib} alt="500" className="img-fluid w-50"/>
             </div>
        </div>
        <div ref={sectionRefs[1]} className="row px-0 px-lg-5 pt-5">
        <div className="col-md-6  mb-md-0 mb-4">
                <img src={phone} className='img-fluid mb-2' alt="phone" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                <h2 className="fw-bold h1 mb-1 px-1 px-md-0" style={{maxWidth:'98%'}}>{t("English daily exercises for ")} {t("students from home follows")} {t("the school curriculum")}</h2>
                {/* <h2 className="fw-bold h1 mb-1">{t("students from home follows")}</h2> */}
                {/* <h2 className="fw-bold h1 mb-4">{t("the school curriculum")}</h2> */}
                <p className=" mb-2 px-2 d-block d-md-none">{t("An AI-powered assistant helps English language teachers")} {t("improve students' conversational skills in schools.")}</p>
                <p className=" mb-0  d-none d-md-block">{t("An AI-powered assistant helps English language teachers")}</p>
                <p className=" mb-2  d-none d-md-block">{t("improve students' conversational skills in schools.")}</p>
            <button className='btn text-info text-decoration-underline rounded-0 ps-0  px-5'>{t("Learn more")}</button>
            </div>

        </div>
        <div  className="row px-0 px-lg-5 pt-4 w-100 mb-5">
            <img src={clients} alt="clients" className="img-fluid"/>
        </div>
        <div ref={sectionRefs[2]} className="row px-0 px-lg-5 pt-4 mb-5">

            <div className="col-md-6 order-1 order-md-0 d-flex flex-column justify-content-center align-items-start">
                <h2 className="fw-bold h1 mb-3 px-1 px-md-0" style={{maxWidth:'98%'}}>{t("Peer-to-Peer online English")} {t("sessions for kids led by")} {t("teenagers aged 13 to 17")}</h2>
                <p className=" mb-2 px-2 d-block d-md-none">{t("Revolutionize Your kid's English learning with online Peer-to-")} {t("Peer live sessions focus on English conversation and communication skills.")}</p>
                <p className=" mb-0  d-none d-md-block">{t("Revolutionize Your kid's English learning with online Peer-to-")}</p>
                <p className=" mb-2  d-none d-md-block">{t("Peer live sessions focus on English conversation and communication skills.")}</p>
            <button className='btn text-info text-decoration-underline rounded-0 ps-0 mb-3 px-5'>{t("Learn more")}</button>
            <img src={teens} className='img-fluid mb-2' alt="teens" />
            </div>
            <div className="col-md-6 order-0 order-md-1 mb-md-0 mb-4">
                <img src={peer} className='img-fluid mb-2 px-5' alt="peer to peer" />
            </div>
        </div>
        <div ref={sectionRefs[3]} className="row px-0 px-lg-5 pt-4 mb-5">
        <div className="col-md-6  mb-md-0 mb-4">
                <img src={employee} className='img-fluid px-5 mb-2' alt="employee" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start mb-5">
                <h2 className="fw-bold h1 mb-1 px-1 px-md-0" style={{maxWidth:'98%'}}>{t("Enhance the employees ")} {t("business English depending")} {t("on the company needs")}</h2>
                {/* <h2 className="fw-bold h1 mb-1">{t("students from home follows")}</h2> */}
                {/* <h2 className="fw-bold h1 mb-4">{t("the school curriculum")}</h2> */}
                <p className=" mb-2 px-2 d-block d-md-none">{t("HR teams trust our English daily exercises using AI and the")} {t("advanced reporting system to measure all the employees")} {t("improvement.")}.</p>
                <p className=" mb-0  d-none d-md-block">{t("HR teams trust our English daily exercises using AI and the")}</p>
                <p className=" mb-2  d-none d-md-block">{t("advanced reporting system to measure all the employees ")} {t("improvement.")}</p>
            <button className='btn text-info text-decoration-underline rounded-0 ps-0  px-5'>{t("Learn more")}</button>
            </div>
            <img src={wuzzuf} className='img-fluid  w-50 mx-auto  mb-2' alt="wuzzuf" />
        </div>
        <div ref={sectionRefs[4]} className="row px-0 px-lg-5 pt-4 mb-5">
        <div className="col-md-6 order-1 order-md-0 d-flex flex-column justify-content-center align-items-start">
            <h2 className="fw-bold h1 mb-3 px-1 px-md-0" style={{maxWidth:'98%'}}>{t("No matter who you are, you")} {t("can enhance your English communication skills.")} </h2>
            <p className=" mb-2 px-2 d-block d-md-none">{t("Choose what suits you between different products like Peer-")} {t("to-Peer learning for kids, daily English exercises using AI, and")} {t("business English (ESP).")} </p>
            <p className=" mb-0  d-none d-md-block">{t("Choose what suits you between different products like Peer-")}</p>
            <p className=" mb-0  d-none d-md-block">{t("to-Peer learning for kids, daily English exercises using AI, and")}</p>
            <p className=" mb-2  d-none d-md-block">{t("business English (ESP).")}</p>
        <button className='btn text-info text-decoration-underline rounded-0 ps-0 mb-3 px-5'>{t("Learn more")}</button>
        <div className="row px-2 mx-auto w-100 align-items-center justify-content-between">
                <div className="col px-0 me-2">
                <h6 className='rounded border p-3 px-2 px-md-3 border-1 me-0  text-center' > {t("English for teachers")}</h6>
                </div>
                <div className="col px-0 me-2">
                <h6 className='rounded border p-3 px-2 px-md-3 border-1 me-0  text-center'> {t("English for doctors")}</h6>
                </div>
                <div className="col px-0 me-2">
                <h6 className='rounded border p-3 px-2 px-md-2 border-1 me-0 text-center'> {t("English for managers")}</h6>
                </div>
        </div>
        <div className="row ps-2 mx-auto w-100 align-items-center justify-content-between">
                <div className="col-4 px-0 me-2">
                <h6 className='rounded border p-3 px-1 px-md-1 border-1 me-0  text-center ' > {t("English for fresh graduate")}</h6>
                </div>
                <div className="col px-0 me-2">
                <h6 className='rounded border p-3 px-2 px-md-3 border-1 me-0  text-center '> {t("English for sales")}</h6>
                </div>
                <div className="col px-0 me-2">
                <h6 className='rounded border p-3 px-2 px-md-2 border-1 me-0 text-center '> {t("English for support")}</h6>
                </div>
        </div>
        </div>
        <div className="col-md-6 order-0 order-md-1 mb-md-0 mb-4">
            <img src={profession} className='img-fluid mb-2 px-5' alt="professions" />
        </div>
        </div>
    </div>
    <div  ref={sectionRefs[5]}>

        <Footer/>
    </div>
    </>
  )
}
