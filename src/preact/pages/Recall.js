import { h } from "preact";
import Layout from "../layouts/Layout";

import { useEffect, useRef, useState } from "preact/hooks";

const Recall = ({ title }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const refBtn = useRef();

  useEffect(() => {
    document.title = title;
    console.log(window.__apiUrl);
  }, [title]);

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(window.__apiUrl + "/sendRecall", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    }).catch((e) => {
      console.log(e);
    });
    if (res.ok) {
      alert("Запрос отправлен!");
    }
  };

  const toggle = () => {
    console.log(checked);
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <Layout navColour="lavender">
      <h1 class="title-h2">Оставьте заявку и мы перезвоним</h1>
      <form style={style.form} onSubmit={submit}>
        <label class="input-label" for="fname">
          Ваше имя
        </label>
        <input
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
          }}
          placeholder="Елена"
          class="input"
          type="text"
          id="fname"
          name="fname"
        />
        <label class="input-label" for="phone">
          Ваш телефон
        </label>
        <input
          value={phone}
          onInput={(e) => {
            setPhone(e.currentTarget.value);
          }}
          class="input"
          placeholder="8 900 000 00-00"
          type="tel"
          id="phone"
          name="lname"
        />
        <div style={style.labelContainer}>
          <input
            checked={checked}
            onChange={toggle}
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1"> privacy policy agree</label>
        </div>
        <button
          style={style.btn}
          ref={refBtn}
          disabled={!checked}
          type="submit"
        >
          Отправить
        </button>
      </form>
    </Layout>
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
  `,
  labelContainer: `
    margin-bottom: 10px
  `,
};

export default Recall;
