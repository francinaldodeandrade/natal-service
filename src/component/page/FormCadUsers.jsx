import React from "react";
import "../../styles/stylesFormCadUser.css";
import "../../scripts/formcadUser.js";

// import "../../scripts/scriptsTab.js";
// import "../../styles/styleTest.css";

// import NewPostData from "./NewPostData.jsx";
// import DataAdress from "./DataAdress.jsx";

// import post_1 from "../../images/placeholders/post-1.jpg";
// import post_2 from "../../images/placeholders/post-2.jpg";
// import post_3 from "../../images/placeholders/post-3.jpg";
//import post_4 from "../../images/placeholders/user-3.jpg";

// const tabs = document.querySelectorAll(".tab-btn");

// console.log(tabs);

// tabs.forEach((tab) => tab.addEventListener("click", () => tabClicked(tab)));

// const tabClicked = (tab) => {
//   const contents = document.querySelectorAll(".content");

//   console.log(contents);

//   contents.forEach((content) => content.classList.remove("show"));

//   const contentId = tab.getAttribute("content-id");

//   console.log(contentId);

//   const content = document.getElementById(contentId);

//   console.log(content);

//   content.classList.add("show");
// };

export default function FormCadUsers() {
  return (
    <div className="container">
      <div className="tab-button">
        <button className="tab-btn active" content-id="login">
          Login
        </button>
        <button className="tab-btn" content-id="data_person">
          Dados Pessoais
        </button>
        <button className="tab-btn" content-id="adress">
          Endereço
        </button>
        <button className="tab-btn" content-id="service">
          Serviço
        </button>
      </div>
      {/*************************************************************************************************/}
      <div className="tab-contents">
        <div className="content " id="login">
          {/* <img src={post_3} alt="" className="content-img" /> */}

          <div className="infos">
            <h2>Login</h2>
            <div>
              <div className="modalCriarConta">
                <div className="form_criarConta">
                  <div className="close_modalCriar">X</div>
                  <h2>Criar Conta</h2>
                  <form>
                    <input id="nome" type="text" placeholder="Nome" />
                    <input id="email" type="email" placeholder="Email" />
                    <input id="password" type="password" placeholder="Senha" />
                    <input type="submit" value="Criar Conta" />
                  </form>
                </div>
              </div>

              <span className="header">Olá, aqui é um ternário</span>

              <div>
                <form className="input">
                  <div>
                    <input type="text" placeholder="Nome" />
                  </div>
                  <div>
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <button type="submit" id="button-env">
                    Enviar
                  </button>
                </form>
                <div className="btn_criarConta">
                  <button>Criar Conta</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*************************************************************************************************/}
        <div className="content" id="data_person">
          {/* <img src={post_3} alt="" className="content-img" /> */}

          <div className="infos">
            <h2>Dados Pessoais</h2>
            <p className="content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              excepturi corrupti tempora hic ex mollitia quos, quaerat ad
              aspernatur dolorum laudantium inventore consequuntur, quae nemo
              ullam dignissimos distinctio odio rerum!
            </p>
          </div>
        </div>
        {/******************************************************************************************************/}
        <div className="content" id="adress">
          {/* <img src={post_1} alt="" className="content-img" /> */}

          <div className="infos">
            <h2>Endereço</h2>
            <p className="content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              excepturi corrupti tempora hic ex mollitia quos, quaerat ad
              aspernatur dolorum laudantium inventore consequuntur, quae nemo
              ullam dignissimos distinctio odio rerum!
            </p>
          </div>
        </div>
        {/******************************************************************************************************/}
        <div className="content" id="service">
          {/* <img src={post_2} alt="" className="content-img" /> */}

          <div className="infos">
            <h2>Serviço</h2>
            <p className="content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              excepturi corrupti tempora hic ex mollitia quos, quaerat ad
              aspernatur dolorum laudantium inventore consequuntur, quae nemo
              ullam dignissimos distinctio odio rerum!
            </p>
          </div>
        </div>
        {/*******************************************************************************************************/}
      </div>
    </div>
  );
}
