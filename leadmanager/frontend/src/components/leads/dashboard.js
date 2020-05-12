import React, { Fragment } from "react";

import Form from "./form";
import Leads from "./leads";

function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}

export default Dashboard;
