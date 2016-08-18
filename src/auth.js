import Config from '../config.json';
import Relay from 'react-relay';

module.exports = {
  login(user, pass, cb) {
    // cb = arguments[arguments.length - 1];
    doLogin(user, pass, (auth) => {
      if (this.checkAuth(auth)) {
        localStorage.user = user;
        localStorage.auth = JSON.stringify(auth);
        this.injectNetworkLayer();
        if (cb) {
          cb(true);
        }
        this.onChange(true);
      } else {
        if (cb) {
          cb(false);
        }
        this.onChange(false);
      }
    });
  },

  injectNetworkLayer() {
    let auth = JSON.parse(localStorage.auth);
    let init = {headers: {
      Authorization: 'Bearer ' + auth.access_token
    }};
    Relay.injectNetworkLayer(
      new Relay.DefaultNetworkLayer('/graphql', init)
    );
  },

  getToken() {
    if (!localStorage.auth) {
      return null;
    }

    let auth = JSON.parse(localStorage.auth);
    return auth === null ? null : auth.access_token;
  },

  logout(cb) {
    delete localStorage.auth;
    if (cb) {
      cb();
    }
    window.location.reload();
    this.onChange(false);
  },

  loggedIn() {
    if (!localStorage.auth) {
      return false;
    }
    return this.checkAuth(JSON.parse(localStorage.auth));
  },

  checkAuth(auth) {
    return auth && auth.access_token && auth.expires_in && auth.time
    && (auth.time + auth.expires_in > getTime());
  },

  onChange() {}
};

function getTime() {
  return Math.floor((new Date()).getTime() / 1000.0);
}

function doLogin(user, pass, cb) {
  let data = {
    client_id: 'teacher',
    client_secret: 'abcde12345',
    grant_type: 'password',
    username: user,
    password: pass,
  };
  var request = new XMLHttpRequest();
  request.open('POST', Config.ApiRoot + 'token', true);
  request.setRequestHeader(
    'Content-Type',
    'application/json; charset=UTF-8'
  );
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      console.log('[App] login success: ', request.responseText);
      let resp = JSON.parse(request.responseText);
      if (resp) {
        resp.time = getTime();
        cb(resp);
      } else {
        console.log('[App] login parse error: ', request.responseText);
        cb({});
      }
    } else {
      console.log('[App] login request error: ', request);
      cb({});
    }
  };
  request.send(JSON.stringify(data));
}
