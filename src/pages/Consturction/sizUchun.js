import { Button, Checkbox, Image, Input, Modal, Space, Table, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from './host'

export default function Construction() {
const [isModalOpen4,setIsModalOpen4]=useState(false)
const [isModalOpen5,setIsModalOpen5]=useState(false)
const [isModalOpen11,setIsModalOpen11]=useState(false)
const [isModalOpen12,setIsModalOpen12]=useState(false)
const [isModalOpen13,setIsModalOpen13]=useState(false)
const [checkFile,setCheckFile]=useState()
const [selectId,setSelectId]=useState(0)
const [gl_desert,setgl_desert]=useState(0)
const [company,setCompany]=useState([])
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

    function onFile62(e){
      setCheckFile(e.target.checked)
         if(e.target.checked){
         document.querySelector("#image1").type="file"
         }else{
           document.querySelector("#image1").type="text"
         }
       }
  
    function onFile61(e){
    setCheckFile(e.target.checked)
       if(e.target.checked){
       document.querySelector("#image").type="file"
       }else{
         document.querySelector("#image").type="text"
       }
     }
function getgl_desert(params) {
  axios.get(`${url}/api/gl_desert`).then(res=>{
    setgl_desert(res.data)
  }) 
}
function creategl_desert() {
  var postdata=new FormData()
  postdata.append("latitude",document.querySelector("#latitude11").value)
  postdata.append("title",document.querySelector("#title11").value)
  postdata.append("longitude",document.querySelector("#longitude11").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image11").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image11").value)    
  }
  
  axios.post(`${url}/api/gl_desert`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen11(false)
  axios.get(`${url}/api/gl_desert`).then(res=>{
      setgl_desert(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen11(false)
  })
 
   }
function updategl_desert() {
    var postdata=new FormData()
    postdata.append("latitude",document.querySelector("#latitude13").value)
    postdata.append("title",document.querySelector("#title13").value)
    postdata.append("longitude",document.querySelector("#longitude13").value)
    if(checkFile){
    postdata.append("image",document.querySelector("#image13").files[0])   
    }else{
    postdata.append("image",document.querySelector("#image13").value)    
    }
    
    axios.put(`${url}/api/gl_desert/${selectId}`,postdata).then(res=>{
        message.success("create new data")
        setIsModalOpen13(false)
    axios.get(`${url}/api/gl_desert`).then(res=>{
        setgl_desert(res.data)
    })
    }).catch(err=>{
    message.error("not create")
    setIsModalOpen13(false)
    })
   
     }

function deletegl_desert() {
  axios.delete(`${url}/api/gl_desert/${selectId}`,).then(res=>{
    setIsModalOpen12(false)
    axios.get(`${url}/api/gl_desert`).then(res2=>{
      setgl_desert(res2.data)
    })
    message.success("delete gl_desert")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen12(false)
  })  
}

const gl_desertcolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
    render: (_,text) => <Image src={text.image} height={"40px"}/>,
  },{
  title: 'latitude',
  dataIndex: 'latitude',
  key: 'latitude',
},
{
  title: 'longitude',
  dataIndex: 'longitude',
  key: 'longitude',
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
    document.querySelector("#latitude13").value=record.latitude
    document.querySelector("#title13").value=record.title
    document.querySelector("#longitude13").value=record.longitude
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



useEffect(()=>{
axios.get(`${url}/api/company`).then(res=>{
  setCompany(res.data)
  getgl_desert()
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
   <div className="table-responsive">  <Table  columns={gl_desertcolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={gl_desert} /></div></div>
</div>




{/* gl_desert */}
<Modal title="Осторожность" visible={isModalOpen11} onOk={()=>creategl_desert()} onCancel={()=>setIsModalOpen11(false)}>
    <input id='latitude11' showCount maxLength={50} placeholder='latitude'  />
    <br />
    <br />
    <input id='title11' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <input id='longitude11' showCount maxLength={50} placeholder='longitude'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile11(e)}>file</Checkbox>
    <input type='text' id='image11' placeholder='image'  />
</Modal>
<Modal title="Осторожность" visible={isModalOpen12} onOk={()=>deletegl_desert()} onCancel={()=>setIsModalOpen12(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
 <Modal title="Осторожность" visible={isModalOpen13} onOk={()=>updategl_desert()} onCancel={()=>setIsModalOpen13(false)}>
 <input id='latitude13' showCount maxLength={50} placeholder='latitude'  />
    <br />
    <br />
    <input id='title13' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <input id='longitude13' showCount maxLength={50} placeholder='longitude'  />
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
