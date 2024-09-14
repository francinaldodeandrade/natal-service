import React from "react";

import products1 from "../../images/products/700005 - Unidade Vácuo Ordenhadeira Gold 1000.webp";
import products2 from "../../images/products/700011 - Unidade de Ordenha Standard PT.webp";
import products3 from "../../images/products/700055 - Unidade de Ordenha Canalizada Gold Linha Baixa.webp";
import "../../styles/listProducts.css";
//import Default from "../template/Default";

export default function ListProduct() {
  return (
  
      <div className="display-card">
        <div className="users__list-item">
          <div className="users__list-item-photo">
            <img src={products1} className="responsive avatar" alt="" />
          </div>
          <div className="description">
            <div className="users__list-item-name">Master Camp</div>
            <div className="users__list-item-price">R$20,00</div>
          </div>
        </div>
        <div className="users__list-item">
          <div className="users__list-item-photo">
            <img src={products2} className="responsive avatar" alt="" />
          </div>
          <div className="description">
            <div className="users__list-item-name">Master Camp</div>
            <div className="users__list-item-price">R$20,00</div>
          </div>
        </div>
        <div className="users__list-item">
          <div className="users__list-item-photo">
            <img src={products3} className="responsive avatar" alt="" />
          </div>
          <div className="description">
            <div className="users__list-item-name">Master Camp</div>
            <div className="users__list-item-price">R$20,00</div>
          </div>
        </div>
      </div>
   
  );
}
