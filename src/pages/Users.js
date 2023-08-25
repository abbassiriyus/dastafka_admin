import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Avatar,
  Typography,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import { useEffect, useState } from "react";

import url from "./host.js";
import "./user.css";

const { Title } = Typography;



function newUser() {
  document.querySelector('.modalMaybe').style="background-color:blue"
}
function Tables() {
  var [data,setData]=useState([])
  var [table,setInfo]=useState([])

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);
const columns = [
  {
    title: "patronymic",
    dataIndex: "patronymic",
    key: "patronymic",
    width: "12%",
  },
  {
    title: "Surname",
    dataIndex: "surname",
    width: "12%",
  },
  {
    title: "username",
    key: "username",
    dataIndex: "username",
    width: "12%",
  },
  {
    title: "phone",
    key: "phone",
    dataIndex: "phone",
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
    render:(_,item)=><a href={item.document_mashina}> {item.document_mashina} a</a>,
    width: "2%",
  },
  {
    title: "prava",
    key: "prava",
    dataIndex: "prava",
    width: "12%",
  },
  {
    title: "delete",
    key: "delete",
    render: (_,item)=><Radio.Button onClick={()=>{DeleteData(item.id)}} >delete</Radio.Button>,
    width: "12%",
  },
  {
    title: "edit",
    key: "edit",
    render: (_,item)=><Radio.Button onClick={()=>{alert(item.id)}} >edit</Radio.Button>,
    width: "10%",
  },
  {
    title: "information",
    key: "information",
    render: (_,item)=><Radio.Button onClick={()=>{alert(item)}}>information</Radio.Button>,
    width: "10%",
  }
]; 
//function Information() {
 // axios.information(`${url}/api/position`).then(res=>{
  //  alert("succesful")
  //})
//}
function DeleteData(key){
  axios.delete(`${url}/auth/users/${key}`).then(res=>{
    alert("o`chirildi")
    axios.get(`${url}/auth/users`).then(res1=>{
      setData(res1.data)
    })
  
  })
}
function postData() {
  var data=new FormData()
  data.append("patronymic",document.querySelector("#patronymic").value)
  data.append("surname",document.querySelector("#surname").value)
  data.append("username",document.querySelector("#username").value)
  data.append("phone",document.querySelector("#phone").value)
  data.append("email",document.querySelector("#email").value)
  data.append("login",document.querySelector("#login").value)
  data.append("position_id",document.querySelector("#position").value)
  data.append("password",document.querySelector("#password").value)
axios.post(`${url}/auth/users`,data).then(res=>{
alert("saqlandi")
axios.get(`${url}/auth/users`).then(res=>{
  setData(res.data)
  console.log(res.data);
})
})
.catch(err=>{
  alert("Ma`lumot yetarli emas")
})
  
}



useEffect(()=>{
  axios.get(`${url}/auth/users`).then(res=>{
    setData(res.data)
    console.log(res.data);
  })
},[])

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="All users"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    {/* <Radio.Button value="a">All</Radio.Button> */}
                    <Radio.Button onClick={()=>{document.querySelector(".modalMaybe").style="display:block"}} value="b">create</Radio.Button>
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


        <center><div className="modalMaybe" >
          <div className="twoOneModal">
            <div className="one">
          <label htmlFor="patronymic">Patronymic</label><br />
          <input type="text" placeholder="patronymic" id="patronymic"/>
          <label htmlFor="surname">Surname</label><br />
          <input type="text" placeholder="surname" id="surname"/>
          <label htmlFor="username">Username</label><br />
          <input type="text" placeholder="username" id="username"/>
          <label htmlFor="phone">Phone</label><br />
          <input type="text" placeholder="phone" id="phone"/>
         
          </div>
          
          <div className="one">
          <label htmlFor="email">Email</label><br />
          <input type="text" placeholder="email" id="email"/>
          <label htmlFor="position">Position</label><br />
          <input type="number" placeholder="position" id="position"/>
          <label htmlFor="login">Login</label><br />
          <input type="text" placeholder="login" id="login"/>
          <label htmlFor="password">Password</label><br />
          <input type="text" placeholder="password" id="password"/>
          </div>
          <button className="buttonExit" onClick={()=>{;document.querySelector(".modalMaybe").style="display:none"}}  >n</button>
          </div><br />
          <div className="buttonsSend">
<button className="buttonSend" onClick={()=>{postData();newUser()}}>Create</button>

    </div>
        </div></center>
      </div>
    </>
  );
}

export default Tables;
