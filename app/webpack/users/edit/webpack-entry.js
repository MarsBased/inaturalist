import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from "redux";

import userSettingsReducer, { fetchUserSettings } from "./ducks/user_settings";
import sitesReducer, { fetchNetworkSites } from "./ducks/network_sites";
import revokeAccessModalReducer from "./ducks/revoke_access_modal";
import deleteRelationshipModalReducer from "./ducks/delete_relationship_modal";
import authenticatedAppsReducer, { fetchAuthorizedApps } from "./ducks/authorized_applications";
import relationshipsReducer, { fetchRelationships } from "./ducks/relationships";
import thirdPartyTrackingModalReducer from "./ducks/third_party_tracking_modal";
import creativeCommonsLicensingModalReducer from "./ducks/cc_licensing_modal";
import AppContainer from "./containers/app_container";

const rootReducer = combineReducers( {
  profile: userSettingsReducer,
  sites: sitesReducer,
  revokeAccess: revokeAccessModalReducer,
  deleteRelationship: deleteRelationshipModalReducer,
  apps: authenticatedAppsReducer,
  relationships: relationshipsReducer,
  thirdPartyTracking: thirdPartyTrackingModalReducer,
  creativeCommonsLicensing: creativeCommonsLicensingModalReducer
} );

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    // enable Redux DevTools if available
    window.devToolsExtension ? window.devToolsExtension() : applyMiddleware()
  )
);

store.dispatch( fetchUserSettings( null ) );
store.dispatch( fetchNetworkSites( ) );
store.dispatch( fetchAuthorizedApps( ) );
store.dispatch( fetchRelationships( true ) );

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById( "app" )
);
