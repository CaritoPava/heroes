// punto 3

import Swal from "sweetalert2";

const onSuccessfulRequest = (userData, token) => {
  localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("user", JSON.stringify(userData));
  history.replaceState(null, "", "/home");
};

const onFailedRequest = () => {
  const errorMessage = {
    icon: "error",
    title: "Lo siento...",
    text: "Tu usuario o constraseña no son correctos!",
    footer:
      '<a href="https://www.alkemy.org">Si crees que es un error, comunícate con el equipo de Alkemy?</a>'
  };

  Swal.fire(errorMessage);
};


// punto 4
import React from 'react'


export default function News({ newsList }) {
  return (
    <div>
      {
        newsList.map(news =>
          <article key={news.id}>
            <img style={{ maxWidth: 100 }}>{news.img}</img>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </article>
        )
      }
    </div>
  )
}


// punto 5
import React from "react";
import axios from "axios";
const useState = React.useState;
const useEffect = React.useEffect;


const LoginForm = () => {
  const [invalidForm, setInvalidForm] = React.useState(true);

  const sendRequest = async () => {
    try {
      const response = axios({
        method: 'post',
        url: 'http://challenge-react.alkemy.org/',
        data: {
          email: 'Fred',
          password: 'Flintstone'
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      return setInvalidForm(false)
    }
    setInvalidForm(true)
  }, [isValidEmail, isValidPassword])


  return (
    <form>
      <input
        type="email"
        onChange={isValidEmail}
      />
      <input
        type="password"
        onChange={isValidPassword}
      />
      <button disabled={invalidForm} onClick={sendRequest}>
        Enviar
      </button>
    </form>
  );
};
export { LoginForm, isValidEmail, isValidPassword };






await axios({
  method: "post",
  url: "http://challenge-react.alkemy.org/",
  data: {
    email,
    password
  }
})


punto 5 completo

import React from "react";
import axios from "axios";
const useState = React.useState;
const useEffect = React.useEffect;

export const LoginForm = () => {
  const [invalidForm, setInvalidForm] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const sendRequest = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email,
        password
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("responseasda");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const isValidEmail = true;
  const isValidPassword = true;

  useEffect(() => {
    if (isValidEmail && isValidPassword) {
      return setInvalidForm(false);
    }
    setInvalidForm(true);
  }, [isValidEmail, isValidPassword]);
  return (
    <form>
      <input
        type="email"
        onChange={(isValidEmail, handleEmail)}
        value={email}
      />
      <input
        type="password"
        onChange={(isValidPassword, handlePassword)}
        value={password}
      />
      <button disabled={invalidForm} onClick={sendRequest}>
        Enviar
      </button>
    </form>
  );
};