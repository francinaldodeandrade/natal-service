import React, { useEffect, useState } from "react";

// Importar funções do Firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
const auth = getAuth(app);

export default function LoginForm() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName || user.email);
      } else {
        setUser(null);
      }
    });

    // Limpar o listener quando o componente for desmontado
    return () => unsubscribe();
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

  function getAccount() {
    const email = "user@example.com";
    const password = "user_password";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
        console.log("Usuário autenticado:", user);
      })
      .catch((error) => {
        // Erro ao autenticar usuário
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
      });
  }

  async function criarConta(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await authUser.user.updateProfile({
        displayName: nome,
      });
      alert("Conta criada com sucesso!");

      const modal = document.querySelector(".modalCriarConta");
      modal.style.display = "none";
      setUser(nome); // Atualizar o estado do usuário
    } catch (err) {
      alert(err.message);
    }

    getAccount();
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
            <input id="nome" type="text" placeholder="Nome" />
            <input id="email" type="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Senha" />
            <input type="submit" value="Criar Conta" />
          </form>
        </div>
      </div>
      {user ? (
        <span className="header">
          Olá, <b>{user}</b>
        </span>
      ) : (
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
            <button
              onClick={(e) => {
                abrirModal(e);
              }}
            >
              Criar Conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
