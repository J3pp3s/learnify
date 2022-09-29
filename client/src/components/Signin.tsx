import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Login } from "../models/user";
import { signInUser } from "../redux/slice/userSlice";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface Props {
  toggleRegister: () => void;
}


const Signin = ({toggleRegister} : Props) => {
  const [values, setValues] = useState<Login>
  ({
    email: "",
    password: "",
  });
  
  const { Text, Title } = Typography;
  
  const { email, password } = values;

  const dispatch = useDispatch<any>();

  const [form] = Form.useForm();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues({ ...values, email: "", password: "" });
    form.resetFields();
  };

  const history = useHistory();

  const submitUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && password.length >= 6) {
        await dispatch(signInUser(values));
        history.push("/profile");
      }
      resetForm();
    } catch (err: any) {
      console.log(err);
      resetForm();
    }
  };


  return (
    <>
      <Card className="log-in-card">
        <div className="log-in-card__intro">
          <Typography>
            <Title level={2} className="log-in-card__intro-title" type="warning">
              Log in to Learnify!
            </Title>
            <Text>Use your Email and Password to Login</Text>
          </Typography>
        </div>
        <Content className="log-in__form">
          <Form
            name="login"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onSubmitCapture={submitUser}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter a valid email!',
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} value={email} name="email" onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter a valid password!',
                  min: 6,
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <br/><br/>
            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button onClick={submitUser} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <div onClick={toggleRegister} className="log-in-card__toggle">
          Not a user yet? Register here
        </div>
      </Card>
    </>
  );
};

export default Signin;