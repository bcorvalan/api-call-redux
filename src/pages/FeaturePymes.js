import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepTree from "./steps/stepTree";
import StepFour from "./steps/StepFour";

export default function FeaturePymes() {
  return (
      <Router>
        <Route exact path="/:uuid/StepOne" component={StepOne} />
        <Route path="/:uuid/StepTwo" component={StepTwo} />
        <Route path="/:uuid/StepTree" component={StepTree} />
        <Route path="/:uuid/StepFour" component={StepFour} />
      </Router>
  );
}
