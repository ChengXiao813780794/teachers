import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import { Icon, Badge, Tooltip } from 'antd';

import 'antd/dist/antd.css';
import './App.less';

class App extends React.Component {
  render() {
    return <div>
      <div className="left-panel">
        <div className="avatar">
          <img src="/public/img/avatar.jpg"/>
        </div>
        <ul className="nav">
          <li>
            <Tooltip placement="right" title="Class Schedule">
              <Link activeClassName="active" to="/schedule">
                <Icon type="calendar" />
                <Badge className="new-message" dot={true}></Badge>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip placement="right" title="Teaching Certificates">
              <Link activeClassName="active" to="/certificate">
                <Icon type="solution" />
                <Badge className="new-message" dot={false}></Badge>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip placement="right" title="Billing Center">
              <Link activeClassName="active" to="/billing">
                <Icon type="pay-circle-o" />
                <Badge className="new-message" dot={false}></Badge>
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip placement="right" title="JiuQu Help Desk">
              <Link activeClassName="active" to="/message">
                <Icon type="message" />
                <Badge className="new-message" dot={false}></Badge>
              </Link>
            </Tooltip>
          </li>
        </ul>
        <div className="logout">
          <Tooltip placement="right" title="Sign Out">
            <Link to="logout">
              <Icon type="poweroff" />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="center-panel">
        {this.props.children}
      </div>
    </div>;
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id,
      username,
      mobile,
      email,
    }
    `,
  }
});
