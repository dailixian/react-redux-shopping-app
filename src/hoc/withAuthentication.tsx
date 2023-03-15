import React from "react";
import { Navigate} from "react-router-dom";
import store from "../redux/store";

export interface WithAuthenticationProps {}

export const withAuthentication = <Props extends WithAuthenticationProps>(
  OldComponent: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithAuthenticationProps>) => {
    const { isAuthenticated } = store.getState().authReducerState;

    if (!isAuthenticated) {
      return <Navigate to="/login"></Navigate>;
    }
    return (
      <>
        <OldComponent {...(props as Props)}></OldComponent>
      </>
    );
  };
};

export default withAuthentication;
