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

import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import CardsProduct from "./CardsProduct.js";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "./host";
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


function Tables() {

var [data, setdata]=useState([])


  const onChange = (e) => console.log(`radio checked:${e.target.value}`);







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
                  <Radio.Group onChange={()=>onChange} defaultValue="a">
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
