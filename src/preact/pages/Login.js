import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import AdminLayout from "../layouts/admin/AdminLayout";

const Login = ({ title }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    console.log("123");
    document.title = title;
  });

  const submit = async (e) => {
    e.preventDefault();
    console.log(e);

    const res = await fetch(window.__apiUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        login,
        pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AdminLayout style={style.container}>
      <h1 class="title-h2">Вход</h1>

      <form onSubmit={submit} style={style.form}>
        <label class="input-label" for="login">
          Login
        </label>
        <input
          value={login}
          onInput={(e) => {
            setLogin(e.currentTarget.value);
          }}
          class="input"
          type="text"
          id="login"
          name="login"
        />
        <label class="input-label" for="pass">
          Password
        </label>
        <input
          value={pass}
          onInput={(e) => {
            setPass(e.currentTarget.value);
          }}
          class="input"
          type="password"
          id="pass"
          name="pass"
        />
        <button style={style.btn}>Войти</button>
      </form>
    </AdminLayout>
  );
};

const style = {
  form: `
    display: flex;
    flex-direction: column;
    max-width: 400px
  `,
  btn: `
    border: none;
    color: white;
    padding: 10px 16px;
    font-size: 16px;
    border-radius: 16px;
    width: fit-content;
    background-color: #44BC1E;
    cursor: pointer;
  `,
  labelContainer: `
    margin-bottom: 10px
  `,
  container: `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
};
export default Login;
