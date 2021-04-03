import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

const StepTwo = (props) => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
      //update data to sendo to backend
    props.history.push("./StepTree");
  };
  return (
    <div>
    <div className="step">
            <div className="step-dot-container">
        <span className="step-dot"></span>
        <span className="step-dot active"></span>
        <span className="step-dot"></span>
      </div>
      <p className="step__title">Opcion de cuotas</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="payment-form--multiple-inputs"
        action=""
        method="post"
        id="pymesForm"
      >
        <button className="payment-options-row">
          <label className="payment-option">
            <input type="checkbox" value="first_checkbox" /> <span>1 x</span>
           $5000
          </label>
          <span className="payment-amount">$5000</span>
        </button>
        <button className="payment-options-row">
          <label className="payment-option">
            <input type="checkbox" value="first_checkbox" /> <span>3 x</span>
            $2000
          </label>
          <span className="payment-amount">$6000</span>
        </button>
        <div className="payment-form__action">
          <button
            data-js="submit-btn"
            className="payment-form__button"
            type="submit"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default withRouter(StepTwo);
