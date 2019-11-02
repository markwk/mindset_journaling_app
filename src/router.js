import { Router, Scene, Drawer } from "react-native-router-flux";
import React from "react";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EditRecords from "./components/RecordList/EditRecords";
import MyProfile from "./components/Profile/MyProfile";
import SplashComponent from "./components/SplashComponent";
import DrawerLayout from "./components/dashboard/DrawerLayout";

import {
  AUTH,
  LOGIN,
  PROFILE,
  RECORDS,
  MAIN,
  EDIT_RECORDS,
  SPLASH,
  SPLASH_SCREEN
} from "./utils/constants";

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key={SPLASH} hideNavBar initial>
        <Scene key={SPLASH_SCREEN} component={SplashComponent} hideNavBar />
      </Scene>
      <Scene key={AUTH} hideNavBar>
        <Scene key={LOGIN} component={Login} hideNavBar />
      </Scene>
      
      <Scene key={MAIN}>
        <Scene key={RECORDS} component={Dashboard} hideNavBar />
        <Scene key={EDIT_RECORDS} component={EditRecords} hideNavBar />
        <Scene key={PROFILE} component={MyProfile} hideNavBar />
        {/* </Drawer> */}
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
