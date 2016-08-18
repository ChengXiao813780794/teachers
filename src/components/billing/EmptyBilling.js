import React from 'react';
import Relay from 'react-relay';

import './Billing.less';

class EmptyBilling extends React.Component {
  render() {
    return (
      <div>
        Empty Billing
      </div>
    );
  }
}

export default Relay.createContainer(EmptyBilling, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
