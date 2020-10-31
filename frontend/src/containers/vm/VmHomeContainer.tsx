/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Redirect, Route, Switch } from "react-router-dom";
import { VmMain } from "../../components/vm/VmMain";
import { VmLoadingContainer } from "./VmLoadingContainer";
import { VmStatusContainer } from "./VmStatusContainer";

export const VmHomeContainer: React.FC = () => {
  return (
    <Switch>
      <Route path="/vm/status">
        <VmStatusContainer />
      </Route>
      <Route path="/vm/loading">
        <VmLoadingContainer />
      </Route>
      <Route path="/vm/:unknown">
        <Redirect to="/404" />
      </Route>
      <Route path="/vm">
        <VmMain />
      </Route>
    </Switch>
  );
};
