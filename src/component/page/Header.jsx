import React, { useEffect, useState } from "react";

// import { auth, authCreate } from "../../firebase.js";

// Importar funções do Firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  // signInWithEmailAndPassword,
} from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFuAslSWC-cSRkSuIpxCzO0SaTnRHWd3g",
  authDomain: "natal-service.firebaseapp.com",
  projectId: "natal-service",
  storageBucket: "natal-service.appspot.com",
  messagingSenderId: "394529064077",
  appId: "1:394529064077:web:4a01043ff219a5b9ad0ec4",
  measurementId: "G-D539NZ9X0W",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Obter a instância de Authentication
const auth = getAuth(app);

export default function Header() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser("");
  }, []);

  function abrirModal(e) {
    e.preventDefault();
    const modal = document.querySelector(".modalCriarConta");

    modal.style.display = "block";
  }

  function fecharModal() {
    const modal = document.querySelector(".modalCriarConta");
    modal.style.display = "none";
  }

  // function getAccount() {
  //   const email = "";
  //   const password = "";

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Login bem-sucedido
  //       const user = userCredential.user;
  //       console.log("Usuário autenticado:", user);
  //     })
  //     .catch((error) => {
  //       // Erro ao autenticar usuário
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error("Erro ao fazer login:", errorCode, errorMessage);
  //     });
  // }

  async function criarConta(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Atualizar perfil do usuário
      await updateProfile(user, {
        displayName: nome,
      });

      alert("Conta criada com sucesso!");

      // Atualizar estado com o nome do usuário
      setUser(nome);

      // Fechar modal ou qualquer outra ação após sucesso
      const modal = document.querySelector(".modalCriarConta");
      modal.style.display = "none";
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "O e-mail fornecido já está em uso. Tente fazer login ou usar um e-mail diferente."
        );
      } else {
        alert(`Erro: ${error.message}`);
      }
    }

    // e.preventDefault();

    // let nome = document.getElementById("nome").value;
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((authUser) => {
    //     authUser.user.updateProfile({
    //       displayName: nome,
    //     });
    //     alert("conta criada");

    //     const modal = document.querySelector(".modalCriarConta");
    //     modal.style.display = "none";
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    // // getAccount();
  }

  return (
    <div>
      <div className="modalCriarConta">
        <div className="form_criarConta">
          <div onClick={() => fecharModal()} className="close_modalCriar">
            X
          </div>
          <h2>Criar Conta</h2>
          <form onSubmit={criarConta}>
            <input id="nome" type="text" placeholder="nome" />
            <input id="email" type="text" placeholder="email" />
            <input id="password" type="password" placeholder="senha" />
            <input type="submit" value="criar conta" />
          </form>
        </div>
      </div>
      {user ? (
        <span className="header">
          olá, <b>{user}</b>
        </span>
      ) : (
        <div>
          <form className="input">
            <div>
              <input type="text" placeholder="nome" />
            </div>
            <div>
              <input type="email" placeholder="E-mail" />
            </div>

            <button type="submit" id="button-env">
              enviar
            </button>
          </form>
          <div className="btn_criarConta">
            <button
              onClick={(e) => {
                abrirModal(e);
              }}
            >
              Criar conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
