import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <form
      className="subscribe-form text-light mb-5"
      action="/subscribe"
      method="post"
    >
      <label for="name" className="form__label text-secondary"></label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        className="form__input"
        placeholder="Name"
      />
      <br />

      <label for="email" class="form__label text-secondary"></label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        className="form__input"
        placeholder="E-mail"
      />
      <br />

      <button type="submit" className="form__submit">
        Yes, send me the guide
      </button>
    </form>
  );
};

export default Form;
