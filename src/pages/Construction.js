import { Button, Input, Modal, Space, Table, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from './host'

export default function Construction() {
const [isModalOpen,setIsModalOpen]=useState(false)
const [isModalOpen2,setIsModalOpen2]=useState(false)
const [isModalOpen3,setIsModalOpen3]=useState(false)

const [selectId,setSelectId]=useState(0)
const [position,setPosition]=useState([])
const [userCount,setUserCount]=useState(0)
const [homiy,setHomiy]=useState(0)

const [manegerCount,setManegerCount]=useState(0)



function handleOk2(){
  axios.delete(`${url}/api/position/${selectId}`,).then(res=>{
    setIsModalOpen2(false)
    axios.get(`${url}/api/position`).then(res2=>{
      setPosition(res2.data)
    })
    message.success("delete Position")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen2(false)
  }) 
}
function CreatePosition() {
  var postdata=new FormData()
postdata.append('position_name', document.querySelector("#title").value)
axios.post(`${url}/api/position`,postdata).then(res=>{
  setIsModalOpen(false)
  axios.get(`${url}/api/position`).then(res2=>{
    setPosition(res2.data)
  })
  message.success("create Position")
}).catch(err=>{
  message.error("NOT Create")
  setIsModalOpen(false)
})
}
function PutPosition(params) {
  var postdata=new FormData()
  postdata.append('position_name', document.querySelector("#title3").value)
  axios.put(`${url}/api/position/${selectId}`,postdata).then(res=>{
    setIsModalOpen3(false)
    axios.get(`${url}/api/position`).then(res2=>{
      setPosition(res2.data)
    })
    message.success("update Position")
  }).catch(err=>{
    message.error("NOT update")
    setIsModalOpen3(false)
  })
}


const positoincolumn = [{
  title: 'Position',
  dataIndex: 'position_name',
  key: 'position_name',
},
{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
     <Button  type="dashed" onClick={()=>{setSelectId(record.id);setIsModalOpen3(true);setTimeout(() => {
        document.querySelector("#title3").value=record.position_name
     }, 100);}}>Edit</Button>
    <Button danger onClick={()=>{setSelectId(record.id);setIsModalOpen2(true)}} >Delete</Button>
    </Space>
  ),
},
];

useEffect(()=>{
  axios.get(`${url}/api/position`).then(res=>{
    setPosition(res.data)
    axios.get(`${url}/auth/users`).then(res2=>{
      var a=res2.data
      var b=res2.data
    
      var a1=a.filter(item=>item.position_id==1)
      var a2=b.filter(item=>item.position_id==2)
    setManegerCount(a2.length)
setUserCount(a1.length)
axios.get(`${url}/api/homeiy`).then(res3=>{
  setHomiy(res3.data.length)
})
    })
  })
},[])

  return (
    <div>
<div className="dd" style={{minWidth:'300px',width:'80%',margin:'auto',maxWidth:'500px',marginBottom:'30px'}}>
<input style={{marginTop:'40px'}} id="slider" class="customSlider" type="checkbox"/>
  <label for="slider"></label>

<div class="wrapper">
	<div class="top-icons">
		{/* <i class="fa fa-long-arrow-alt-left"></i>
		<i class="fa fa-ellipsis-v"></i> */}
		<i class="fa fa-pencil"></i>
	</div>
	
	<div class="profile">
		<img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail" />
<p class="title">telegram:</p>
<p class="title">email:</p>
<p class="title">whatsapp:</p>
<p class="title">phone:</p>

	</div>
	
	<div class="social-icons">
		<div class="icon">
			<a href='/tables' ><i class="fa fa-user" aria-hidden="true"></i></a>
			<h4>{userCount}</h4>
			<p>Пользователь</p>
		</div>
		
		<div class="icon">
			<a href='/tables'><i class="fa fa-address-card" aria-hidden="true"></i></a>
			<h4>{manegerCount}</h4>
			<p>Менеджер</p>
		</div>
		
		<div class="icon">
			<a href='/configProduct' ><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
			<h4>{homiy}</h4>
			<p>Спонсор</p>
		</div>
	</div>
</div> 

</div>

  <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Position</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen(true)
   }
   } >create</Button>  </div>
    <Table  columns={positoincolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={position} /></div>





{/* Марка */}
<Modal title="Марка Создавать" visible={isModalOpen} onOk={()=>CreatePosition()} onCancel={()=>setIsModalOpen(false)}>
      <Input id='title' showCount maxLength={50} placeholder='title'  />
    </Modal>
 <Modal title="Осторожность" visible={isModalOpen2} onOk={()=>handleOk2()} onCancel={()=>setIsModalOpen2(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
  <Modal title="Марка изменять" visible={isModalOpen3} onOk={()=>PutPosition()} onCancel={()=>setIsModalOpen3(false)}>
      <Input id='title3' showCount maxLength={50} placeholder='position Name'  />
    </Modal>




    </div>
  )
}
