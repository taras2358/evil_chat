// Native components
// import "components/page/page";
// import "components/auth-form/auth-form";
// import "components/chat/chat";

// import "init";
import './application.css'

// React components
import "@babel/polyfill";
import ReactOnRails from "react-on-rails";
// import Routes from 'js-routes'

import HelloWorld from "components/hello_world/hello_world.jsx";
import StoreIndex from "components/store/index/index.jsx";
import RegistrationForm from "components/registration/form.jsx";
import LoginForm from "components/login/form.jsx";

ReactOnRails.register({
  HelloWorld,
  StoreIndex,
  RegistrationForm,
  LoginForm
});
