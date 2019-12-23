import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppBreadcrumb,
  // AppFooter,
  //AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
import DefaultHeaderDropdown from "./DefaultHeaderDropdown";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";
const DefaultAside = React.lazy(() => import("./DefaultAside"));
// const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
//const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

const DefaultLayout = props => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  // const signOut = e => {
  //   e.preventDefault();
  //   props.history.push("/login");
  // };

  return (
    <div className="app">
      {/* <AppHeader fixed>
        <Suspense fallback={this.loading()}>
          <DefaultHeader onLogout={e=>this.signOut(e)}/>
        </Suspense>
      </AppHeader> */}
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <div className="top-header">
            <AppBreadcrumb appRoutes={routes} />
          </div>
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                {/* <Redirect from="/" to="/dashboard" /> */}
                <Redirect from="/" to="/reservation" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        <AppAside fixed>
          <Suspense fallback={loading()}>
            <DefaultAside />
          </Suspense>
        </AppAside>
      </div>
      {/* <AppFooter>
        <Suspense fallback={this.loading()}>
          <DefaultFooter />
        </Suspense>
      </AppFooter> */}
    </div>
  );
};
export default DefaultLayout;
