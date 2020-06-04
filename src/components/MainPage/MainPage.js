import React from "react";

import Summary from "../../containers/Summary/Summary";
import Calculator from "../../containers/Calculator/Calculator";

const MainPage = () => {
  return (
    <React.Fragment>
      <Calculator />
      <Summary />
    </React.Fragment>
  );
};

export default MainPage;
