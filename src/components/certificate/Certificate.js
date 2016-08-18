import React from 'react';
import Relay from 'react-relay';
import {
  Row,
  Col,
  Icon,
  Button,
  Tag,
  Timeline,
  Steps
} from 'antd';
const Step = Steps.Step;
const steps = [{
  status: 'intro2',
  title: 'Intro 1',
}, {
  status: 'quiz1',
  title: 'Quiz 1',
}, {
  status: 'intro2',
  title: 'Intro 2',
}, {
  status: 'quiz2',
  title: 'Quiz 2',
}, {
  status: 'demo',
  title: 'Coaching',
}, {
  status: 'quiz3',
  title: 'Quiz 3',
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);

import './Certificate.less';

class Certificate extends React.Component {
  state = {
    activeTab: 1
  };
  getTabClassName(key) {
    return key == this.state.activeTab
    ? 'cert-header-action active'
    : 'cert-header-action'
  }
  renderActiveTab() {
    return (
      <iframe width="100%" height="100%" src="https://onedrive.live.com/embed?cid=19C198668310D4F4&resid=19C198668310D4F4%2111012&authkey=AK59HemRgh7y8jI&em=2" width="402" height="327" frameborder="0" scrolling="no"></iframe>
    );
  }
  render() {
    let sch = {
      id: '1',
      title: '1-1',
      course: {
        title: 'G1',
      },
      startAt: new Date(),
      logo: '/public/img/lesson/1.png'
    };
    return (
      <Row>
        <Row className="cert-header" type="flex" align="middle">
          <Col className="cert-header-title" span={6}>
            <h2>
              Certificate {sch.title}
            </h2>
            <p>description</p>
          </Col>
          <Col span={17}>
            <Steps size="small" current={1}>{steps}</Steps>
          </Col>
        </Row>
        <Row className="cert-content">
          {this.renderActiveTab()}
        </Row>
      </Row>
    );
  }
}


export default Relay.createContainer(Certificate, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
