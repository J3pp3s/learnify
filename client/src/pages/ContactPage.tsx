import React from 'react';
import { Carousel, Badge, Card, Row, Col } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, ScheduleOutlined } from '@ant-design/icons';

const ContactPage = () => {
    return (
        <div className="contact__main-div">
            <header className="contact__main-header">
            </header>
  <Row gutter={[24, 32]}>
  <Col span={24}>
              <Carousel autoplay>
              <div>
                <h3><GithubOutlined /> GitHub: <a target="_blank" href="https://github.com/J3pp3s" rel="noreferrer">J3pp3s</a>
              </h3>
              </div>
              <div>
                <h3><LinkedinOutlined /> LinkedIn: <a target="_blank" href="https://se.linkedin.com/in/jespher-olausson" rel="noreferrer">J3pp3s</a></h3>
              </div>
              <div>
                <h3><MailOutlined /> Mail: jespher2010@live.com</h3>
              </div>
              <div>
                <h3><ScheduleOutlined /> Education: <a target="_blank" href="https://www.tucsweden.se/" rel="noreferrer">TUC Yrkeshögskola</a></h3>
              </div>
            </Carousel>
          </Col>
        <Col span={6}></Col>
        <Col span={12}>
        <div className="contact__second-div">
          <Badge.Ribbon text="React <3">
            <Card title="Webbapplikationer och mobil utveckling" size="default">
            I made this webpage to learn more about React and ASP.NET Core. 
            With the help from a great tutorial
            and a clever teacher it has been very informative. <br/><br/>
            Feel free to contact me! <br/><br/>
            /Jespher Olausson
            </Card>
          </Badge.Ribbon>
        </div>
        </Col>
  </Row>
      </div>
    );
};

export default ContactPage;