import React from 'react'
import logo from '../../assets/images/PikaDo-logo-Final-3 4b.png'
import globe from '../../assets/images/World-PNG-Clipart-Background 1.png'
import './Navbar.css'
import { useTranslation } from 'react-i18next';
export default function Navbar() {
    const { t ,i18n} = useTranslation();
  return (
<nav className="navbar navbar-expand-lg  border-bottom">
  <div className="container-fluid px-0">
    <a className="navbar-brand border-end-md-1 border-end-0 h-50" href="/">
        
    <img src={logo} alt="pikado logo" className='img-fluid   mx-auto' />
    </a>
    <div className="d-flex justify-content-end">

    <button className="navbar-toggler border-0 mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button className='btn btn-white border-start rounded-0 px-4 d-md-none'>
      <i className="bi bi-globe2 fs-4 text-secondary cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="language" onClick={() => i18n.changeLanguage(i18n.language =="en"?"ar":"en")}> </i>
            </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="d-flex flex-column flex-md-row w-100 justify-content-between align-items-start align-items-md-center  p-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active mx-2" aria-current="page" href="/">{t("Study at Home")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/">{t("Schools")}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/">{t("Business")}</a>
        </li>
  
      </ul>
           <div className="d-flex justify-content-evenly align-items-center">
            <button className='btn bg-pikado-cyan mx-0 mx-md-4 px-3 rounded-0'>
              {t("placement test")}
            </button>
            <button className='btn btn-white border-start rounded-0 px-4 d-none d-md-block'><i className="bi bi-globe2 text-secondary fs-4 cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="language" onClick={() => i18n.changeLanguage(i18n.language =="en"?"ar":"en")}> </i>
            </button>
            </div> 
      </div>
    </div>

  </div>
</nav>


  )
}
