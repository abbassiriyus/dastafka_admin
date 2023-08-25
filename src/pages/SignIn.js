
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/img-signin.jpg";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import axios from "axios";
function onChange(checked) {
  console.log(`switch to ${checked}`);
}
const { Title } = Typography;
const {  Footer, Content } = Layout;


export default class SignIn extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

function loginIn() {
  var data =new FormData()
  data.append("login",document.querySelector("#email").value)
  data.append("password",document.querySelector("#parol").value)
  axios.post('https://dastafka-back.onrender.com/auth/login',data).then(res=>{
    sessionStorage.setItem('token',res.data.access)
    window.location.reload()
  }).catch(err=>{
    alert("xato")
  })
}



    return (
      <>
        <Layout className="layout-default layout-signin">
          {/* <Header>
            <div className="header-col header-brand">
              <h5>Muse Dashboard</h5>
            </div>
            <div className="header-col header-nav">
              <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/dashboard">
                    {template}
                    <span> Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/profile">
                    {profile}
                    <span>Profile</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/sign-up">
                    {signup}
                    <span> Sign Up</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/sign-in">
                    {signin}
                    <span> Sign In</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className="header-col header-btn">
              <Button type="primary">FREE DOWNLOAD</Button>
            </div>
          </Header> */}
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Sign In</Title>
                <Title className="font-regular text-muted" level={5}>
                  Enter your email and password to sign in
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" id-="email" />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input placeholder="Password" id="parol" />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item>

                  <Form.Item>
                    <Button
                    onClick={()=>loginIn()}
                      type="primary"  
                      htmlType="submit"
                      style={{ width: "100%" }}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src={signinbg} alt="" />
              </Col>
            </Row>
          </Content>
       
        </Layout>
      </>
    );
  }
}
