import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: ReturnType<typeof useParams>;
  navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
  OldComponent: React.ComponentType<Props>
) => {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();
    return (
      <>
        <OldComponent
          {...(props as Props)}
          location={location}
          params={params}
          navigate={navigate}
        ></OldComponent>
      </>
    );
  };
};

export default withRouter;
