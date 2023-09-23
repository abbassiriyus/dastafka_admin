import { Button, Card, Col, Image, Modal, Radio, Row, Table, message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import url from './host';

export default function Work() {
const [data,setData]=useState([])
const [loading,setLoading]=useState(true)
const [isModalOpen1,setIsModalOpen1]=useState(false)
const [id,setId]=useState(0)
function all1(params) {
  setLoading(true)
if(params==0){

  getData()
}else{

  axios.get(`${url}/api/work`).then(res=>{
    axios.get(`${url}/api/shving`).then(res1=>{
        axios.get(`${url}/api/mashina`).then(res2=>{
    for (let i = 0; i < res.data.length; i++) {
      res.data[i].mashina1=""
      res.data[i].shving1=""
     for (let j = 0; j < res2.data.length; j++) {
       if(res.data[i].mashina==res2.data[j].id){
    res.data[i].mashina1=res2.data[j]
       }    
        }
    for (let j = 0; j < res2.data.length; j++) {
      if(res.data[i].shving==res1.data[j].id){
        res.data[i].shving1=res1.data[j]
           }   
    }
    }
    setLoading(false)
 var a=res.data.filter(item=>item.type==params)
        setData(a)
    })})})
}

}
const columns = [
    {
      title: "organizatsiya",
      dataIndex: "organizatsiya",
      key: "organizatsiya",
      width: "12%",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      width: "12%",
    },
    {
      title: "mashina",
      render: (_,item)=>(<div>{(item.mashina1).length!==0?(<div>{item.mashina1.m3}m<sup>3</sup> <Image width="40px" src={item.mashina1.image} /></div>):(<div>not mashina</div>)}</div>),
      width: "12%",
    },
    {
        title: "shving",
       render: (_,item)=>(<div>{(item.shving1).length!==0?(<div>{item.shving1.m}m <Image width="40px" src={item.shving1.image} /></div>):(<div>not shving</div>)}</div>),
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
        <Button danger onClick={()=>{setId(item.id);setIsModalOpen1(true)}} >delete</Button>
      ),
      width: "2%",
    }
  ];
  function getData() {
    axios.get(`${url}/api/work`).then(res=>{
      axios.get(`${url}/api/shving`).then(res1=>{
          axios.get(`${url}/api/mashina`).then(res2=>{
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].mashina1=""
        res.data[i].shving1=""
       for (let j = 0; j < res2.data.length; j++) {
         if(res.data[i].mashina==res2.data[j].id){
        res.data[i].mashina1=res2.data[j]
         }    
          }
      for (let j = 0; j < res2.data.length; j++) {
        if(res.data[i].shving==res1.data[j].id){
          res.data[i].shving1=res1.data[j]
             }   
      }
      }
      setLoading(false)
    console.log(res.data);
          setData(res.data)
      })})})
  }
  function handleOk1(){
    setLoading(true)
    axios.delete(`${url}/api/work/${id}`).then(res=>{
     setIsModalOpen1(false)   
     getData()
      message.success("delete worker") 
    }).catch(err=>{
      message.error(err)
      setIsModalOpen1(false)
      setLoading(false)
    })
  }
const onChange = (e) => console.log(`radio checked:${e.target.value}`);
useEffect(()=>{
getData()
},[])
  return (
    <div>
  {loading?(<div style={{width:'100%',height:"100vh",background:"#00000024",position:'fixed',top:'0px',left:'0px',zIndex:'213123'}}><p></p></div>):(<div></div>)}
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
                   <Radio.Button onClick={() => all1(1)} value="a2">
                  Без машины
                   </Radio.Button>
                   <Radio.Button onClick={() => all1(2)} value="a3">
                  Фирма
                  </Radio.Button>
                  <Radio.Button onClick={() => all1(3)} value="a4">
                  Машина
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
      <Modal title="Осторожность" visible={isModalOpen1} onOk={() => handleOk1()} onCancel={()=>setIsModalOpen1(false)}>
          <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
        </Modal>
    </div>
    
    </div>
  )
}
