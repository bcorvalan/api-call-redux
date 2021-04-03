import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPayment } from "../../redux/paymentData/action";
import { withRouter, useParams } from "react-router-dom";

function StepOne({ payment, fetchPayment }) {
  let { uuid } = useParams();
  useEffect(() => {
    if(!uuid) return
    fetchPayment();
  }, [uuid]);
  return  <div>{console.log({payment})}</div>
}
  

const mapStateToProps = (state) => {
  return {
    payment: state.paymentData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchPayment()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StepOne));
