import React from 'react';
import Relay from 'react-relay';

import './Schedule.less';

class EmptySchedule extends React.Component {
  render() {
    return (
      <div>
        Empty Schedule
      </div>
    );
  }
}

export default Relay.createContainer(EmptySchedule, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
