// import React from 'react'

// export default function NavBar() {
//   return (
//     <div>NavBar</div>
//   )
// }

import React from "react";
import "../../styles/appHeader.css";
import "../../scripts/appHeader.js";

import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  return (
    <div>
      <nav>
        {/* <a href="/" class="logo"><img src={"img/logo preta.jpeg"} alt="" id="img-logo"></a> */}
        <div class="search-box">
          <input
            class="search-txt"
            type="text"
            name=""
            placeholder="pesquisar..."
          ></input>
          <FaSearch class="search-btn " id="img-pesquisa" />

          {/* <a class="search-btn"href="#"><img src={"img/pesquisa-de-lupa.png"} alt="" id="img-pesquisa"></a> */}
        </div>
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-list">
          <li>
            {" "}
            <a href="/">Serviços</a>
          </li>
          <li>
            {" "}
            <a href="/">Cursos</a>
          </li>
          <li>
            {" "}
            <a href="/">Valores</a>
          </li>
          <li>
            {" "}
            <a href="/">Material didático</a>
          </li>
          <li>
            {" "}
            <a href="/">Horários</a>
          </li>
          <li>
            {" "}
            <a href="/">Sobre</a>
          </li>
          <li>
            {" "}
            <a href="/">Projeto</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>

      <main></main>
    </div>
  );
}
