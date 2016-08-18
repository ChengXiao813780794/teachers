import ReactDOM from 'react-dom';
import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  hashHistory,
  applyRouterMiddleware,
} from 'react-router';

import Relay from 'react-relay';
import useRelay from 'react-router-relay';

import Loading from '../components/Loading';
import Login from '../components/Login';
import App from '../components/App';
import ScheduleList from '../components/schedule/ScheduleList';
import Schedule from '../components/schedule/Schedule';
import EmptySchedule from '../components/schedule/EmptySchedule';
import CertificateList from '../components/certificate/CertificateList';
import Certificate from '../components/certificate/Certificate';
import EmptyCertificate from '../components/certificate/EmptyCertificate';
import Billing from '../components/billing/Billing';
import EmptyBilling from '../components/billing/EmptyBilling';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};

ReactDOM.render(
  <Router
    history={hashHistory}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}>
    <Route path="/" component={App} queries={ViewerQueries}
      /* onEnter={requireAuth} */
      /*renderFailure={() => { auth.logout(); console.log(this.arguments); }}*/
      renderLoading={() => <Loading />} >
      <Route path="schedule" component={ScheduleList} queries={ViewerQueries}
        renderLoading={() => <Loading />} >
        <Route path=":id" component={Schedule} queries={ViewerQueries}
          renderLoading={() => <Loading />} />
        <IndexRoute component={EmptySchedule} queries={ViewerQueries}
          renderLoading={() => <Loading />} />
      </Route>
      <Route path="certificate" component={CertificateList} queries={ViewerQueries}
        renderLoading={() => <Loading />} >
        <Route path=":id" component={Certificate} queries={ViewerQueries}
          renderLoading={() => <Loading />} />
        <IndexRoute component={EmptyCertificate} queries={ViewerQueries}
          renderLoading={() => <Loading />} />
      </Route>
      <Route path="billing" component={Billing} queries={ViewerQueries}
        renderLoading={() => <Loading />} >
        <IndexRoute component={EmptyBilling} queries={ViewerQueries}
          renderLoading={() => <Loading />} />
      </Route>
    </Route>
    <Route path="login" component={Login} />
  </Router>,
  document.getElementById('react-content')
);
