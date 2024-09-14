/*eslintjsx-ally/anchor-is-valid: 0 */
import React from "react";
import "../../styles/listUsers.css";

import logo from "../../images/logo.svg";

import users2 from "../../images/placeholders/user-2.jpg";

export default function ListUsers() {
  return (
    <main>
      <div>
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu"></div>
      </div>

      <div className="users">
        <h2>Lista de Usuários</h2>

        <div className="users__list">
          <a href="/" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users2} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">John Walter</div>
          </a>
          <a href="/" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users2} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">John Walter</div>
          </a>

          <a href="/" className="users__list-item">
            <div className="users__list-item-photo">
              <img src={users2} className="responsive avatar" alt="" />
            </div>
            <div className="users__list-item-name">Bryan Cornell</div>
          </a>
        </div>
      </div>
    </main>
  );
}
