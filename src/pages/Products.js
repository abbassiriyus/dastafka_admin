/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  message,
  Avatar,
  Typography,
} from "antd";


// Images
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import CardsProduct from "./CardsProduct.js";
import "./style.css";
const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start
const columns = [
  {
    title: "Производитель",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Марка",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "Опции",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Цена",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
 
        </div>
      </>
    ),

    status: (
      <>
              Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
 
        </div>
      </>
    ),

    status: (
      <>
      Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
 
        </div>
      </>
    ),

    status: (
      <>
              Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
 
        </div>
      </>
    ),

    status: (
      <>
              Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
 
        </div>
      </>
    ),

    status: (
      <>
              Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJDCfJoArPLNaU2wiv2NcQPvocrWJCV42aBK8LFqy-ADnU3VxdkqBZ9VOCvRyCFjkiu0&usqp=CAU" alt="" className="someone" />
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>M200</Title>
        </div>
      </>
    ),

    status: (
      <>
              Наименование опции
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>2 000</span>
          <div className="aProduct">
          <a href="#pablo">Edit</a>
          <a href="#pablo" style={{"color":'red'}}>Delete</a>
          </div>
        </div>
      </>
    ),
  },
];
// project table start


function Tables() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <CardsProduct/> <br />  
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>


          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
