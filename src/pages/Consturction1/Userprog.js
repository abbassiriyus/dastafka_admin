import { Button, Checkbox, Image, Modal, Select, Space, Table, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../host'

export default function Userprog() {
const [isModalOpen11,setIsModalOpen11]=useState(false)
const [isModalOpen12,setIsModalOpen12]=useState(false)
const [isModalOpen13,setIsModalOpen13]=useState(false)
const [checkFile,setCheckFile]=useState()
var [SelectUsers,SetSelectUsers]=useState()
var [Selectfoods,SetSelectfoods]=useState()

const [selectId,setSelectId]=useState(0)
const [user_prog,setuser_prog]=useState(0)
function onFile11(e){
  setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#image11").type="file"
     }else{
       document.querySelector("#image11").type="text"
     }
   }


function onFile13(e){
    setCheckFile(e.target.checked)
       if(e.target.checked){
       document.querySelector("#image13").type="file"
       }else{
         document.querySelector("#image13").type="text"
       }
     }

function createuser_prog() {
  var postdata=new FormData()
  postdata.append("user_id",SelectUsers)
  postdata.append("food_id",Selectfoods)
  if(checkFile){
    postdata.append("image",document.querySelector("#image11").files[0])   
  }else{
    postdata.append("image",document.querySelector("#image11").value)    
  }
  
  axios.post(`${url}/api/userprog`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen11(false)
  axios.get(`${url}/api/user_prog`).then(res=>{
      setuser_prog(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen11(false)
  })
 
}
function updateuser_prog() {
    var postdata=new FormData()
    postdata.append("user_id",SelectUsers)
    postdata.append("food_id",Selectfoods)
    if(checkFile){
    postdata.append("image",document.querySelector("#image13").files[0])   
    }else{
    postdata.append("image",document.querySelector("#image13").value)    
    }
    
    axios.put(`${url}/api/userprog/${selectId}`,postdata).then(res=>{
        message.success("create new data")
        setIsModalOpen13(false)
    axios.get(`${url}/api/userprog/header`).then(res=>{
        setuser_prog(res.data)
    })
    }).catch(err=>{
    message.error("not create")
    setIsModalOpen13(false)
    })
   
     }

function deleteuser_prog() {
  axios.delete(`${url}/api/userprog/${selectId}`,).then(res=>{
    setIsModalOpen12(false)
    axios.get(`${url}/api/userprog/header`).then(res2=>{
      setuser_prog(res2.data)
    })
    message.success("delete user_prog")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen12(false)
  })  
}

const user_progcolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
    render: (_,text) => <Image src={text.image} height={"40px"}/>,
  },{
  title: 'user_id',
  dataIndex: 'user_id',
  key: 'user_id',
},
{
  title: 'food_id',
  dataIndex: 'food_id',
  key: 'food_id',
},
{
  title: 'title',
  dataIndex: 'title',
  key: 'title',
},

{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
     <Button  type="dashed"
     onClick={()=>{
      setSelectId(record.id)
      setIsModalOpen13(true)
   setTimeout(() => {
    document.querySelector("#user_id13").value=record.user_id
    document.querySelector("#food_id13").value=record.food_id
    document.querySelector("#image13").value=record.image
   }, 900);
     }}
     >Edit</Button>
    <Button danger onClick={()=>{
      setIsModalOpen12(true)
      setSelectId(record.id)
    }} >Delete</Button>
    </Space>
  ),
},
];

var [users,setUsers]=useState([])
var [foods,setFoods]=useState([])

useEffect(()=>{
axios.get(`${url}/api/userprog/header`).then(res=>{
setuser_prog(res.data)
axios.get(`${url}/api/users`).then(res=>{
    setUsers(res.data)
    axios.get(`${url}/api/foods`).then(res=>{
        setFoods(res.data)
        })
    })
})
},[])

  return (
    <div>


<div style={{display:'flex',
flexWrap:'wrap',
justifyContent:'space-around'}}>
<div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Ветвь</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen11(true)
   }
   } >create</Button>  </div>
   <div className="table-responsive">  <Table  columns={user_progcolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={user_prog} /></div></div>
</div>




{/* user_prog */}
<Modal title="Осторожность" visible={isModalOpen11} onOk={()=>createuser_prog()} onCancel={()=>setIsModalOpen11(false)}>
<label htmlFor="">users</label><br />
<Select style={{width:'90%'}} id="marka" onChange={(value) => {
            SetSelectUsers(value)
          }} >
            {users.map(item => {
              return <Select.Option value={item.id}> {item.id} {item.name}</Select.Option>
            })}
</Select>
          <label htmlFor="">foods</label><br />
          <Select style={{width:'90%'}} id="marka" onChange={(value) => {
            SetSelectfoods(value)
          }} >
            {foods.map(item => {
              return <Select.Option value={item.id}> {item.id} {item.foods_name}</Select.Option>
            })}
          </Select>

    <br />
    <br />
    <Checkbox onChange={(e)=>onFile11(e)}>file</Checkbox>
    <input type='text' id='image11' placeholder='image'  />
</Modal>
<Modal title="Осторожность" visible={isModalOpen12} onOk={()=>deleteuser_prog()} onCancel={()=>setIsModalOpen12(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
 <Modal title="Осторожность" visible={isModalOpen13} onOk={()=>updateuser_prog()} onCancel={()=>setIsModalOpen13(false)}>
 <input id='user_id13' showCount maxLength={50} placeholder='user_id'  />
    <br />
    <br />
    <input id='food_id13' showCount maxLength={50} placeholder='food_id'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile13(e)}>file</Checkbox>
    <input type='text' id='image13' placeholder='image'  />
</Modal>
    </div>
  )
}
