import React from 'react';
import { Carousel } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, ScheduleOutlined } from '@ant-design/icons';

const ContactPage = () => {
    return (
        <div className="contact__main-div">
            <header className="contact__main-header">
            </header>

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
        </div>
    );

};

export default ContactPage;