import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";


const StepTree = (props) => {
  const { handleSubmit } = useForm();
  const onSubmit = () => {
      //update data to sendo to backend
    props.history.push("./stepFour");
  };

  return (
    <div>
    <div className="step">
        <div className="step-dot-container">
        <span className="step-dot"></span>
        <span className="step-dot"></span>
        <span className="step-dot active"></span>
      </div>
      <p className="step__title">Tarjeta</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="payment-form--multiple-inputs"
        action=""
        method="post"
      >
        <div className="payment-options-row">
          <div className="payment-option">
            <p type="checkbox" value="first_checkbox" /> <span>Brubank</span>
            4545 **** **** ****
          </div>
          <span className="payment-amount">logo</span>
        </div>
        <p className="step__title">Método de pago</p>
        <button
          data-js="submit-btn"
          className="payment-form__button"
          type="submit"
        >
          Confirmar pago
        </button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(StepTree);
