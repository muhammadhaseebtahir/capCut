import React from 'react'

import logo from "../Assest/logo.webp"

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark" style={{backgroundColor:"#1A202C",borderBottom:"3px solid #00cea0" }}>
  <div className="container-fluid px-5">
    <a className="navbar-brand" href="#"><img src={logo} width={180}  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">CapCut MOD APK</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CapCut for PC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CapCut For iOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> CapCut Old Version</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> CapCut Templates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Comparison</a>
        </li>
       
       
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </header>
  )
}
