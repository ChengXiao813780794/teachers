import React from 'react';
import Relay from 'react-relay';

import './Certificate.less';

class EmptyCertificate extends React.Component {
  render() {
    return (
      <div>
        Empty Certificate
      </div>
    );
  }
}

export default Relay.createContainer(EmptyCertificate, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
