import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import { Row, Col, DatePicker, Menu, Tag, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

import { Scrollbars } from 'react-custom-scrollbars';
import './Billing.less';

class BillingList extends React.Component{
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
  renderSideListSubMenu(icon, title) {
    return (
      <span>
        <Icon type={icon}/> &nbsp;
          <span>{title}</span>
        </span>
      );
    }
    renderSideListItem(billing) {
      return (
        <Menu.Item className="side-list-item" key={billing.id}>
          <Link to={'/Billing/' + billing.id}>
            <div className="side-list-item-title">
              &nbsp; {billing.title} &nbsp;
            </div>
          </Link>
        </Menu.Item>
      );
    }
    render() {
      let date = new Date();
      return (
        <Row className="billing" type="flex">
          <Col className="billing-side-list">
            <div className="side-list-header">
              <h2 style={{textAlign: 'center'}}>Billing Center</h2>
            </div>
            <div className="side-list-warning" style={{display: 'none'}}>
              Loading...
            </div>
            <Scrollbars className="side-list-scroll-bar" autoHide>
              <Menu onClick={this.handleClick.bind(this)}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline">
                <MenuItem className="side-list-item" key="overview">
                  <Link to="/billing/overview">
                    <Icon type="bar-chart"/>
                    Overview
                  </Link>
                </MenuItem>
                <MenuItem className="side-list-item" key="report">
                  <Link to="/billing/report">
                    <Icon type="pay-circle-o"/>
                    Detail Report
                  </Link>
                </MenuItem>
                <MenuItem className="side-list-item" key="payslip">
                  <Link to="/billing/payslip">
                    <Icon type="credit-card"/>
                    Payslip
                  </Link>
                </MenuItem>
                <MenuItem className="side-list-item" key="setting">
                  <Link to="/billing/setting">
                    <Icon type="setting"/>
                    Payment Setting
                  </Link>
                </MenuItem>
              </Menu>
            </Scrollbars>
          </Col>
          <Col className="main-content">
            {this.props.children}
          </Col>
        </Row>
      );
    }
  }

  export default Relay.createContainer(BillingList, {
    initialVariables: {id: null},
    fragments: {
      viewer: () => Relay.QL`
      fragments on Teacher {
        id
      }
      `,
    }
  });
