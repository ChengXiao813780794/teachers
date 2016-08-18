import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import { Row, Col, DatePicker, Menu, Tag, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { Scrollbars } from 'react-custom-scrollbars';
import './Schedule.less';

class ScheduleList extends React.Component{
  state = {
    current: '1',
  };
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  changeDate() {

  }
  render() {
    let date = new Date();
    let schedules = [
      {
        id: '1',
        title: '2-1',
        course: {
          title: 'G1',
        },
        startAt: new Date(),
        logo: '/public/img/lesson/1.png'
      },

      {
        id: '2',
        title: '1-2',
        course: {
          title: 'G1',
        },
        startAt: new Date(),
        logo: '/public/img/lesson/2.png'
      }
    ]
    return (
      <Row className="schedule" type="flex">
        <Col className="side-list">
          <div className="side-list-header">
            <DatePicker
              style={{width: 230}}
              defaultValue={date}
              size="large"
              onChange={this.changeDate.bind(this)}>
            </DatePicker>
          </div>
          <div className="side-list-warning" style={{display: 'none'}}>
            Loading...
          </div>
          <Scrollbars className="side-list-scroll-bar" autoHide>
            <Menu onClick={this.handleClick.bind(this)}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              >
              {schedules && schedules.map(sch =>
                <Menu.Item className="side-list-item" key={sch.id}>
                  <Link to={'/schedule/' + sch.id}>
                    <Row type="flex" align="middle">
                        <img className="side-list-item-logo" src={sch.logo} />
                      <Col >
                        <div className="side-list-item-title">
                          Lesson {sch.title} &nbsp;
                          <Tag color="green">{sch.course.title}</Tag>
                        </div>
                        <div className="side-list-item-date">description</div>
                      </Col>
                    </Row>
                  </Link>
                </Menu.Item>)
              }
            </Menu>
          </Scrollbars>
        </Col>
        <Col className="main-content" >
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default Relay.createContainer(ScheduleList, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
