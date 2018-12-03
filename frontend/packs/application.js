// Native components
// import "init";
// import "components/page/page";
// import "components/auth-form/auth-form";
// import "components/chat/chat";

// React components
import "@babel/polyfill";
import ReactOnRails from "react-on-rails";
// import Routes from 'js-routes'

import HelloWorld from "components/hello_world/hello_world.jsx";
import StoreIndex from "components/store/index/index.jsx";
import RegistrationForm from "components/registration/form.jsx";

ReactOnRails.register({
  HelloWorld,
  StoreIndex,
  RegistrationForm
});
