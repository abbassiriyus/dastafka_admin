import {
  Row,
  Col,
  Card,
  Radio,

  Table,
  Button,
  Avatar,
  Typography,
  Input,
  Modal,

} from "antd";

import axios from "axios";
import { useEffect, useState } from "react";

import url from "./host.js";
import "./user.css";





function newUser() {
  document.querySelector('#modalMaybe').style="background-color:blue"
}
function Tables() {

  var [data,setData]=useState([])
  var [table,setInfo]=useState([])
  var [information,setInformation] = useState([])
  var [userModal,setUserModal] =useState(false)
  var [userId,setUserId]=useState()

  function abbas(params) {
  setInformation(params)
document.querySelector('#modalInformation').style='display:flex'
  }
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
    title: "fomo",
    key: "fomo",
    dataIndex: "fomo",
    width: "12%",
  },
  {
    title: "login",
    key: "login",
    dataIndex: "login",
    width: "12%",
  },
  {
    title: "password",
    key: "password",
    dataIndex: "password",
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
    render: (_,item)=><Radio.Button onClick={()=>{UserEditOpen(item)}}>edit</Radio.Button>,
    width: "10%",
  },
  {
    title: "information",
    key: "information",
    render: (_,item)=><Radio.Button onClick={()=>{abbas(item)}}>information</Radio.Button>,
    width: "10%",
  }
]; 

function UserEditOpen(item){
setUserModal(true)
setUserId(item.id)
setTimeout(() => {
document.querySelector("#patronymic1").value=item.patronymic
document.querySelector("#surname1").value=item.surname
document.querySelector("#username1").value=item.username
document.querySelector("#phone1").value=item.phone
document.querySelector("#email1").value=item.email
document.querySelector("#login1").value=item.login
document.querySelector("#position1").value=item.position_id
document.querySelector("#password1").value=item.password
}, 1000);
}

function putUser(){
  var data=new FormData()
  data.append("patronymic",document.querySelector("#patronymic1").value)
  data.append("surname",document.querySelector("#surname1").value)
  data.append("username",document.querySelector("#username1").value)
  data.append("phone",document.querySelector("#phone1").value)
  data.append("email",document.querySelector("#email1").value)
  data.append("login",document.querySelector("#login1").value)
  data.append("position_id",document.querySelector("#position1").value)
  data.append("password",document.querySelector("#password1").value)
axios.put(`${url}/auth/users/${userId}`,data).then(res=>{
alert("Сохранено в нашей базе данных")
setUserModal(false)
axios.get(`${url}/auth/users`).then(res=>{
  setData(res.data)
  console.log(res.data);
})
})
.catch(err=>{
  alert("Недостаточно информации")
})
}


function DeleteData(key){
  axios.delete(`${url}/auth/users/${key}`).then(res=>{
    alert("Удалено")
    axios.get(`${url}/auth/users`).then(res1=>{
      setData(res1.data)
    })
  
  }).catch(err=>{
    alert("Не удалось удалить")
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
alert("Сохранено в нашей базе данных")
axios.get(`${url}/auth/users`).then(res=>{
  setData(res.data)
  console.log(res.data);
})
})
.catch(err=>{
  alert("Недостаточно информации")
})

}

function all1(id) {
  axios.get(`${url}/auth/users`).then(res=>{
    if(id==0){
    setData(res.data)
    }else{
     var a=res.data.filter(item=>item.position_id==id)
    setData(a)  
    }
  })
}

useEffect(()=>{
  axios.get(`${url}/auth/users`).then(res=>{
    setData(res.data)
  })
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

                     <Radio.Button onClick={()=>all1(0)} value="a1">Все</Radio.Button> 
                     <Radio.Button onClick={()=>all1(2)} value="a2">Юридическое лицо</Radio.Button> 
                     <Radio.Button onClick={()=>all1(1)} value="a3">Физическое лицо</Radio.Button> 
                     <Radio.Button onClick={()=>all1(3)} value="a4">Менеджер</Radio.Button> 
                    <Radio.Button onClick={()=>{document.querySelector("#modalMaybe").style="display:flex"}} value="b">create</Radio.Button>

                  </Radio.Group>
                </div>
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


        <div id="modalMaybe" className="Modal">
        <div className="modalMaybe" style={{position:'relative'}}  >
          <div className="twoOneModal">
            <div className="one">
          <br /><label htmlFor="patronymic">Patronymic</label><br />
          <input type="text" placeholder="patronymic" id="patronymic"/>
          <br /><label htmlFor="surname">Surname</label><br />
          <input type="text" placeholder="surname" id="surname"/>
          <br /><label htmlFor="username">Username</label><br />
          <input type="text" placeholder="username" id="username"/>
          <br /><label htmlFor="phone">Phone</label><br />
          <input type="text" placeholder="phone" id="phone"/>
         
          <br /><label htmlFor="email">Email</label><br />
          <input type="text" placeholder="email" id="email"/>
          <br /><label htmlFor="position">Position</label><br />
          <select style={{width:'85%',height:'35px',border:'1px solid grey'}} name="" id="position">
          <option value={1}>Пользователь</option>
          <option value={2}>Менеджер</option>
          <option value={3}>Водитель</option>
          </select>
          <br /><label htmlFor="login">Login</label><br />
          <input type="text" placeholder="login" id="login"/>
          <br /><label htmlFor="password">Password</label><br />
          <input type="text" placeholder="password" id="password"/>
          </div>
          <Button className="buttonExit" onClick={()=>{;document.querySelector("#modalMaybe").style="display:none"}}  >x</Button>
          </div><br />
          <div className="buttonsSend">
<Button className="buttonSend" type="primary" onClick={()=>{postData();newUser()}}>Create</Button>

    </div>
        </div>
        </div>
        <div id="modalInformation" className="Modal">
        <div className="modalInformation">
          <button className="exitInformation" onClick={()=>{;document.querySelector("#modalInformation").style="display:none"}}>x</button>
          <div className="photoText">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="" />
          <div className="writtenInfo">
          <h2><b>Full name: </b> <span>{information.username}, {information.surname}, {information.patronymic}</span></h2>
          <h2><b>Phone number: </b><span>{information.phone}</span></h2>
          <h2><b>Email address: </b><span>{information.email}</span></h2>
          <h2><b>INN: </b><span>{information.inn}</span></h2>
          <h2><b>Requisite: </b><span>{information.recvizit}</span></h2>
          <h2><b>Login/email: </b><span>{information.login}</span></h2>
          <h2><b>Password: </b><span>{information.password}</span></h2>
          </div>
          </div>
        </div>
        </div>

      </div>
      <Modal title="User" visible={userModal} onOk={()=>putUser()} onCancel={()=>setUserModal(false)}>
      <div className="one">
      <br /><label htmlFor="patronymic1">Patronymic</label><br />
      <input type="text" placeholder="patronymic" id="patronymic1"/>
      <br /><label htmlFor="surname1">Surname</label><br />
      <input type="text" placeholder="surname" id="surname1"/>
      <br /><label htmlFor="username1">Username</label><br />
      <input type="text" placeholder="username" id="username1"/>
      <br /><label htmlFor="phone1">Phone</label><br />
      <input type="text" placeholder="phone" id="phone1"/>
     
      <br /><label htmlFor="email1">Email</label><br />
      <input type="text" placeholder="email" id="email1"/>
      <br /><label htmlFor="position1">Position</label><br />
      <select style={{width:'90%',height:'35px',border:'1px solid grey'}} name="" id="position1">
      <option value={1}>Пользователь</option>
      <option value={2}>Менеджер</option>
      <option value={3}>Водитель</option>
      </select>
      <br /><label htmlFor="login1">Login</label><br />
      <input type="text" placeholder="login" id="login1"/>
      <br /><label htmlFor="password1">Password</label><br />
      <input type="text" placeholder="password" id="password1"/>
      </div>
      </Modal>
    </div>
  );
}

export default Tables;
