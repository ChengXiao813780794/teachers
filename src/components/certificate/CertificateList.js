import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import { Row, Col, DatePicker, Menu, Tag, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { Scrollbars } from 'react-custom-scrollbars';
import './Certificate.less';

class CertificateList extends React.Component{
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
    renderSideListItem(cert) {
      return (
        <Menu.Item className="side-list-item" key={cert.id}>
          <Link to={'/certificate/' + cert.id}>
            <div className="side-list-item-title">
              &nbsp; {cert.title} &nbsp;
            </div>
          </Link>
        </Menu.Item>
      );
    }
    render() {
      let date = new Date();
      let certs = [
        {id: '1', title: 'Design Principle 2', type: 'general'},
        {id: '2', title: 'Design Principle 2', type: 'general'},
        {id: '3', title: 'Design Principle 2', type: 'general'},
        {id: '4', title: 'Design Principle 2', type: 'general'},
        {id: '25', title: 'Design Principle 2', type: 'general'},
        {id: '26', title: 'Design Principle 2', type: 'general'},
        {id: '27', title: 'Design Principle 2', type: 'general'},
        {id: '28', title: 'Design Principle 2', type: 'general'},
      ];

      let gotCerts = [
        {
          id: '5',
          title: 'Bingo Game',
          type: 'activity'
        },
        {id: '6', title: 'Slicing Card', type: 'activity'},
        {id: '7', title: 'Slicing Card', type: 'activity'},
        {id: '8', title: 'Slicing Card', type: 'activity'},
        {id: '9', title: 'Slicing Card', type: 'activity'},
        {id: '10', title: 'Slicing Card', type: 'activity'},
        {id: '11', title: 'Slicing Card', type: 'activity'},
        {id: '12', title: 'Slicing Card', type: 'activity'},
        {id: '13', title: 'Slicing Card', type: 'activity'}
      ];
      return (
        <Row className="cert" type="flex">
          <Col className="cert-side-list">
            <div className="side-list-header">
              <h2 style={{textAlign: 'center'}}>JiuQu Certificates</h2>
            </div>
            <div className="side-list-warning" style={{display: 'none'}}>
              Loading...
            </div>
            <Scrollbars className="side-list-scroll-bar" autoHide>
              <Menu onClick={this.handleClick.bind(this)}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline">
                <Menu.ItemGroup key="sub1"
                  title={this.renderSideListSubMenu(
                    'exclamation-circle-o',
                    'Assigned')
                  }>
                  {certs && certs.map(cert => this.renderSideListItem(cert))}
                </Menu.ItemGroup>
                <Menu.ItemGroup
                  key="sub2"
                  title={this.renderSideListSubMenu(
                    'check-circle-o',
                    'Acquired')
                  }>
                  {gotCerts &&
                    gotCerts.map(cert => this.renderSideListItem(cert))
                  }
                </Menu.ItemGroup>
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

  export default Relay.createContainer(CertificateList, {
    initialVariables: {id: null},
    fragments: {
      viewer: () => Relay.QL`
      fragments on Teacher {
        id
      }
      `,
    }
  });
