import React from 'react';
import Relay from 'react-relay';
import {
  Row,
  Col,
  Icon,
  Button,
  Tag,
  Timeline,
  Popconfirm,
  Card,
  Table
} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
class Schedule extends React.Component {
  state = {
    activeTab: 1
  };
  getTabClassName(key) {
    return key == this.state.activeTab
    ? 'schedule-header-action active'
    : 'schedule-header-action'
  }
  doEnterClassroom() {
    console.log('enter classroom [tab]' + this.state.activeTab);
  }
  renderLessonPlan() {
    let lesson = {
      objectives:["课程目标1","课程目标2","课程目标3"],
      _knowledge:["知识点一","知识点二","知识点三","知识点四","知识点一","知识点二","知识点三","知识点四","知识点一","知识点二","知识点三","知识点四"],
      _schedules:["模块一","模块二","模块三","模块四"],
      description:"XXXXXXXXXXXX"
    };
    let dataSource = lesson._knowledge.map((value,index)=>{
      return {
        "key": index,
        "index": index+1,
        "content": value,
        "width": 150
      }
    });
    const columns = [{
      title: '序号',
      dataIndex: 'index',
      width: 30
    }, {
      title: '内容',
      dataIndex: 'content'
    }];
    return (
      // <div>
      //   <h4>Lesson Plan</h4>
      //   <p>1. 课程目标</p>
      //   <p>2. 课程知识点</p>
      //   <p>3. 课程模块列表与教学指导</p>
      // </div>
      <Scrollbars>
        <h3 className="mb20">课程目标</h3>
        <Row className="bottom-line">        
          <Timeline>
          {
            lesson.objectives.map( (x,index)=> {
              return <Timeline.Item key = {index}>{x}</Timeline.Item>
            })
          }
          </Timeline>
        </Row>        
        <h3 className="mt20 mb15">课程知识点</h3>
        <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} size="middle"/>
        <h3 className="mt20 mb15">课程模块列表与教学指导</h3>
        <Row className="schedule-content-knowledge">
          {
            lesson._schedules.map( (value,index) => {return <p key={index}>{index+1}.{value}</p>})   
          }
          <div className="mt15">
            <h4 className="display-inline">教学指导：</h4><p className="display-inline">{lesson.description}</p>
          </div>
        </Row>
        
      </Scrollbars>
    );
  }
  renderReview() {
    return (
      // <div>
      //   <h4>Evaluate the Students</h4>
      //   <p>1. 评价学生上课情况</p>
      //   <p>2. 评价系统与课件</p>
      //   <p>3. 汇报系统异常 与 学生异常</p>
      // </div>
      <div>
        <Card title="评价学生上课情况">评价学生上课情况</Card>
        <Card title="评价系统与课件" className="mt30">评价系统与课件</Card>
        <Card title="汇报系统异常 与 学生异常" className="mt30">汇报系统异常 与 学生异常</Card>
      </div>
    );
  }
  renderActiveTab() {
    switch (this.state.activeTab) {
      case 1:
      return this.renderLessonPlan();
      case 2:
      return this.renderReview();
      default:
      return this.renderLessonPlan();
    }
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
      <Row style={{"height":"100%"}}>
        <Row className="schedule-header" type="flex" align="middle">
          <Col span={3} style={{textAlign: 'center'}}>
            <img className="schedule-header-logo" src={sch.logo} />
          </Col>
          <Col span={9}>
            <h2>
              Lesson {sch.title} &nbsp;
              <Tag color="green">{sch.course.title}</Tag>
            </h2>
            <p>description</p>
          </Col>
          <Col span={12}>
            <Popconfirm placement="bottomRight"
              okText="OK" cancelText="Cancel"
              title={'The class hasn\'t started yet. Do you want to enter?'}
              onConfirm={() => this.doEnterClassroom()}>
              <Button type="ghost" className={this.getTabClassName(3)}>
                <Icon type="arrow-right"/>
                <p>Classroom</p>
              </Button>
            </Popconfirm>
            <Button type="ghost" className={this.getTabClassName(2)}
              onClick={() => this.setState({activeTab: 2})}>
              <Icon type="team"/>
              <p>Students</p>
            </Button>
            <Button type="ghost" className={this.getTabClassName(1)}
              onClick={() => this.setState({activeTab: 1})}>
              <Icon type="book"/>
              <p>Lesson Plan</p>
            </Button>
          </Col>
        </Row>
        <Row className="schedule-content full-width-height" style={{"margin-top":"70px"}}>
          {this.renderActiveTab()}
        </Row>
      </Row>
    );
  }
}

export default Relay.createContainer(Schedule, {
  initialVariables: {id: null},
  fragments: {
    viewer: () => Relay.QL`
    fragments on Teacher {
      id
    }
    `,
  }
});
