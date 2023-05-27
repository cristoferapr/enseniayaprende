import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import img1 from "../../img/home4.png"
import img2 from "../../img/home2.png"
import img3 from "../../img/home3.png"
import logo from "../../img/logo.png"


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid h-100 bg-white text-center">
		<div className="row h-100 mb-5 mt-4">
		  <div className="col-lg-6 d-flex justify-content-md-center">
			<div className="p-4 justify-content-center text-center">
			<img src={logo} id="logo" alt="Representación visual" className="img-fluid justify-content-center" />
			  <p>¡Bienvenido/a a nuestra página! Aquí encontrarás recursos educativos para enseñar y aprender de manera efectiva.</p>
			</div>
		  </div>
		  <div className="col-lg-6 d-flex text-center align-items-center">
			<img src={img1} alt="Representación visual" id="img1"className="img-fluid smaller-img-lg mx-auto ps-4 pe-5" />
		  </div>
		</div>
		<div className="row h-100 mb-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex align-items-center">
          <img src={img2} alt="Representación visual" className="img-fluid smaller-img-lg mx-auto ps-4 pe-5" />
        </div>
        <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center">
          <div className="p-4 mb-3">
            <h2 className="titulo">Aprende sobre música...</h2>
            <p>Aquí podrás encontrar una amplia variedad de recursos relacionados con la música, desde clases de instrumentos, teoría musical, composición y mucho más. ¡Explora y expande tus conocimientos musicales!</p>
          </div>
        </div>
      </div>
	  <div className="row h-100 mb-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="p-4 mb-3">
            <h2 className="titulo">Y mucho mas!</h2>
            <p>En nuestro sitio web, podrás aprender sobre una amplia variedad de temas. Desde ciencia y tecnología hasta arte y cultura. ¡Te invitamos a unirte a nuestra comunidad y expandir tus conocimientos!</p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <img src={img3} alt="Representación visual" className="img-fluid smaller-img-lg mx-auto ps-4 pe-5" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6 d-flex justify-content-center">
          <button className="btn btn-primary mt-2">Únete para aprender</button>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <button className="btn btn-secondary mt-2">Únete para enseñar</button>
        </div>
      </div>
	  </div>
	);
};