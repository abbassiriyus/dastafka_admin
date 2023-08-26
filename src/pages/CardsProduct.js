import React, { useEffect, useState } from 'react'
import { message, Button, Card, Checkbox, Col, Input, Modal, Row, Image } from 'antd';
import "./stylee.css";
import url from './host.js';
import axios from 'axios';
const { TextArea } = Input;
export default function CardsProduct() {
  var [category, setCategory] = useState([])
  var [checkFile, setCheckFile] = useState(false)


  var [data, setdata] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
const [deleteid,setDeleteId]=useState(-1)
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false); 
    axios.delete(`${url}/api/category/${deleteid}`).then(res=>{
    message.success('deleted');
    axios.get(`${url}/api/category`).then(res => {
      var a = res.data
      for (let i = 0; i < a.length; i++) {
        if (i == 0) {
          a[i].check = true
        } else {
          a[i].check = false
        }
      }
      setCategory(res.data)
    })
  }).catch(err=>{
    message.error("don't delete")
  })
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    
  };
  
function setCheck(key) {
for (let i = 0; i < category.length; i++) {
 if (key==i) {
 document.querySelectorAll('.tickCircle')[key].innerHTML=`<i class='bx bx-check'></i>` 
 document.querySelectorAll('.ant-card-body')[key].style=`border:2px solid orange;border-radius:10px` 
 }else{
  document.querySelectorAll('.tickCircle')[i].innerHTML=`<div></div>` 
  document.querySelectorAll('.ant-card-body')[i].style=`border: none` 
}}}
function postData(){
  var data=new FormData()
  data.append("title",document.querySelector("#title").value)
  if(checkFile){
  data.append("image",document.querySelector("#file").files[0])
  }else{
  data.append("image",document.querySelector("#file").value)
  }
  data.append("description",document.querySelector("#deck").value)
axios.post(`${url}/api/category`,data).then(res=>{
  message.success(" Created ")
  axios.get(`${url}/api/category`).then(res => {
    var a = res.data
    for (let i = 0; i < a.length; i++) {
      if (i == 0) {
        a[i].check = true
      } else {
        a[i].check = false
      }

    }
    setCategory(res.data)

  })
  setIsModalOpen(false);
}).catch(err=>{
 message.error("don't create")
  setIsModalOpen(false);
})
}
function onFile(e){
 setCheckFile(e.target.checked)
  if(e.target.checked){
  document.querySelector("#file").type="file"
  }else{
    document.querySelector("#file").type="text"
  }
}
function deteteData(params) {
setDeleteId(params)
showModal1()
}
  useEffect(() => {
    axios.get(`${url}/api/category`).then(res => {
      var a = res.data
      for (let i = 0; i < a.length; i++) {
        if (i == 0) {
          a[i].check = true
        } else {
          a[i].check = false
        }

      }
      setCategory(res.data)

    })
  }, [])

  return (
    <div>
     
     <Button type="primary" onClick={()=>showModal()}>
       Create Category
      </Button>
      <Modal title="Basic Modal" visible={isModalOpen} onOk={()=>postData()} onCancel={()=>handleCancel()}>
      <Input id='title' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile(e)}>file</Checkbox>
    <Input type='text' id='file' placeholder='image'  />
    <br />
    <br />
    <TextArea showCount id='deck' maxLength={400}  placeholder='deckription' />
      </Modal>

      {category.length === 0 ? (<div>no category beton</div>) : (<Row gutter={18}>{category.map((item, key) => {
        return <Col onClick={() => { setCheck(key) }} span={4}>
          <div className="imgNameFour">
            <Card bordered={false} >
              
              <div className="tickCircle">{item.check?(<i class='bx bx-check'></i>):(<div></div>)}</div>
              <center><Image width={'90%'} src={item.image.includes("http") ? item.image : `${url}/${item.image}`} alt="no image" className='imgProductFour' />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="icons"  style={{fontSize:'23px',display:'flex',justifyContent:'space-around'}}><i class='bx bxs-trash' style={{cursor:'pointer'}} onClick={()=>{deteteData(item.id)}} ></i><i class='bx bx-edit' ></i></div>
                </center>
            </Card>
          </div>
        </Col>
      })} </Row>)}


      <Modal title="Осторожность" visible={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
      </Modal>
      
    </div>
  )
}









