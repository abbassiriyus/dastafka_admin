import { Card, Col, Radio, Row, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import url from './host';

export default function Work() {
const [data,setData]=useState([])
function all1(params) {
    
}
const columns = [
    {
      title: "organizatsiya",
      dataIndex: "organizatsiya",
      key: "organizatsiya",
      width: "12%",
    },
    {
      title: "mashina",
      dataIndex: "mashina",
      width: "12%",
    },
    {
        title: "shving",
        dataIndex: "shving",
        width: "12%",
      },
    {
      title: "sayt",
      key: "sayt",
      dataIndex: "sayt",
      width: "12%",
    },
    {
      title: "liso_contact",
      key: "liso_contact",
      dataIndex: "liso_contact",
      width: "12%",
    },
    {
      title: "email",
      key: "email",
      dataIndex: "email",
      width: "12%",
    },
    {
      title: "inn",
      key: "inn",
      dataIndex: "inn",
      width: "12%",
    },
    {
      title: "document_mashina",
      key: "document_mashina",
      render: (_, item) => (
        <a href={item.document_mashina}> {item.document_mashina?item.document_mashina:"document not"} </a>
      ),
      width: "2%",
    }
  ];
const onChange = (e) => console.log(`radio checked:${e.target.value}`);
useEffect(()=>{
axios.get(`${url}/api/work`).then(res=>{
axios.get(`${url}/api/shving`).then(res1=>{
    axios.get(`${url}/api/mashina`).then(res2=>{
for (let i = 0; i < res.data.length; i++) {
 for (let j = 0; j < res1.data.length; j++) {
   if(res.data[i].mashina==res1.data[j].id){
res.data[i].mashia1=res1.data[j]
   }    
    }
for (let k = 0; k < res2.data.length; k++) {

    
}
}





    setData(res.data)
})})})
},[])
  return (
    <div>
    <div className="tabled">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24}>
          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="All users"
            extra={
              <div>
                <Radio.Group onChange={onChange} defaultValue="a">
                  <Radio.Button onClick={() => all1(0)} value="a1">
                    Все
                  </Radio.Button>
                  <Radio.Button onClick={() => all1(2)} value="a2">
                    Юридическое лицо
                  </Radio.Button>
                  <Radio.Button onClick={() => all1(1)} value="a3">
                    Физическое лицо
                  </Radio.Button>
                  <Radio.Button onClick={() => all1(3)} value="a4">
                    Менеджер
                  </Radio.Button>
                  <Radio.Button
                    onClick={() => {
                      document.querySelector("#modalMaybe").style =
                        "display:flex";
                    }}
                    value="b"
                  >
                    create
                  </Radio.Button>
                </Radio.Group>
              </div>
            }
          >
            <div className="table-responsive">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{pageSize:'7'}}
                className="ant-border-space"
              />
            </div>
          </Card>
        </Col>
      </Row>

    </div>
    
    </div>
  )
}
