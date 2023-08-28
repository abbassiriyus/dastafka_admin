import React, { useEffect, useState } from 'react'
  import { Button, Checkbox, Image, Input, Modal, Space, Table, message } from 'antd';
import axios from 'axios';
import url from './host';
const { TextArea } = Input;
export default function MarkaAndSponsor() {
  const [marka,setMarka]=useState([])
  const [homiy,setHomiy]=useState([])
  const [skachat_pridlachenu,setSkachat_pridlachenu]=useState([])
  const [preferences,setPreferences]=useState([])
  const [sovuqlik,setSovuqlik]=useState([])
  const [news,setNews]=useState([])
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [aksiya,setAksiya]=useState([])
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  var [checkFile, setCheckFile] = useState(false)
  var [selectid,setSelectId]=useState(0)
const [loading,setLoading]=useState(false)
function onFile1(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file").type="file"
     }else{
       document.querySelector("#file").type="text"
     }
   }
   function onFile3(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file3").type="file"
     }else{
       document.querySelector("#file3").type="text"
     }
   }
const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  const showModal3 = (key) => {
    setSelectId(key)
    setIsModalOpen2(true);

  };

  const handleCancel3 = () => {
    setIsModalOpen2(false);
  };
  const showModal1 = (id) => {
    setIsModalOpen1(true);
    setSelectId(id)
  };
function handleOk1() {
    axios.delete(`${url}/api/homeiy/${selectid}`).then(res=>{
        message.success("delete data")
        handleCancel1()
        axios.get(`${url}/api/homeiy`).then(res=>{
            setHomiy(res.data)
        })
    })
}
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  
function createHomiy(){
var postdata=new FormData()
postdata.append("title",document.querySelector("#title").value)
postdata.append("link",document.querySelector("#link").value)
if(checkFile){
postdata.append("image",document.querySelector("#file").files[0])   
}else{
postdata.append("image",document.querySelector("#file").value)    
}
postdata.append("deck",document.querySelector("#deck1").value)
axios.post(`${url}/api/homeiy`,postdata).then(res=>{
    message.success("create new sponsor")
    setIsModalOpen2(false)
axios.get(`${url}/api/homeiy`).then(res=>{
    setHomiy(res.data)
})
}).catch(err=>{
message.error("not create")
setIsModalOpen2(false)
})
}
function PutHomeiy() {
    
}

const homiycolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
  
    render: (_,text) => <Image src={text.image} height={"40px"}/>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'web-sayt',
    dataIndex: 'link',
    key: 'link',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button  type="dashed" onClick={()=>{showModal3(record.id)}}>Edit</Button>
        <Button danger onClick={()=>showModal1(record.id)} >Delete</Button>
      </Space>
    ),
  },
];
const skachat_pridlachenucolumn = [
    {
      title: 'Image',
      dataIndex: 'name',
    
      render: (_,text) => <Image src={text.image} height={"40px"}/>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Опции',
      dataIndex: 'deskription',
      key: 'deskription',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
const markcolumn = [{
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
const preferencescolumn = [
    {
      title: 'Image',
      dataIndex: 'name',
    
      render: (_,text) => <Image src={text.image} height={"40px"}/>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
        title: 'Опции',
        dataIndex: 'description',
        key: 'description',
      },
    {
      title: 'Для лиц',
      dataIndex: 'liso',
      key: 'liso',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const sovuqlikcolumn = [
    {
      title: 'Цена',
      dataIndex: 'sena',
      key: 'sena',
    },
    {
        title: '°C',
        dataIndex: 'gradus',
        key: 'gradus',
      },
 
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const newscolumn = [
    {
      title: 'Image',
      dataIndex: 'name',
      width:'10%',
      render: (_,text) => <Image src={text.image} height={"40px"}/>,
    },
    {
      title: 'Title',
      render:(_,item)=><p style={{textWrap: "wrap"}}>{item.title}</p>,
      key: 'title',
      width:'10%',
    },
    {
        title: 'description',
        render:(_,item)=><p style={{textWrap: "wrap"}}>{item.description}</p>,
        key: 'min_description',
        width:'40%',
      },
    {
      title: 'min_description',
      render:(_,item)=><p style={{textWrap: "wrap"}}>{item.min_description}</p>,
      key: 'min_description',
      width:'20%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const aksiyacolumn = [
    {
      title: 'Image',
      dataIndex: 'name',
    
      render: (_,text) => <Image src={text.image} height={"40px"}/>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'start_day',
        render:(_,item)=><p style={{textWrap: "wrap"}}>{item.start_day.slice(0,10)}</p>,
        key: 'start_day',
      },
      {
        title: 'end_day',
        render:(_,item)=><p style={{textWrap: "wrap"}}>{item.end_day.slice(0,10)}</p>,
        key: 'end_day',
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
useEffect(()=>{
axios.get(`${url}/api/marka`).then(res=>{
setMarka(res.data)
axios.get(`${url}/api/homeiy`).then(res1=>{
    setHomiy(res1.data)
    console.log(res1.data,"homeiy");
axios.get(`${url}/api/skachat_pridlachenu`).then(res2=>{
    setSkachat_pridlachenu(res2.data)
axios.get(`${url}/api/preferences`).then(res3=>{
    setPreferences(res3.data)
axios.get(`${url}/api/sovuqlik`).then(res4=>{
setSovuqlik(res4.data)
axios.get(`${url}/api/news`).then(res5=>{
    console.log(res.data,"ikki");
    setNews(res5.data)
    axios.get(`${url}/api/aksiya`).then(res6=>{
        console.log(res.data,"bir");
        setAksiya(res6.data)
        setLoading(false)
})})})})})})
})
},[

])
  return (
    <div>
{loading?(<div style={{width:'100%',height:"100vh",display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',top:'0px',left:'0px'}}>
<div class="pl">
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__text">Loading…</div>
</div></div>
):(<div style={{display:'flex',flexWrap:'wrap',alignItems:'stretch',justifyContent:'space-between'}}>
 <div style={{width:'100%',maxWidth:'700px'}}>
 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Производитель</h2> <Button onClick={()=>{showModal2()}} type='primary'>create</Button>  </div>
    <Table columns={homiycolumn} style={{width:'100%'}} dataSource={homiy} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Марка</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={markcolumn} style={{width:'100%'}} dataSource={marka} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Скачать приложение</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={skachat_pridlachenucolumn} style={{width:'100%'}} dataSource={skachat_pridlachenu} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Наши приемущества</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={preferencescolumn} style={{width:'100%'}} dataSource={preferences} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Противоморозная 
добавка</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={sovuqlikcolumn} style={{width:'100%'}} dataSource={sovuqlik} /></div>

<div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Наши акции</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={aksiyacolumn} style={{width:'100%'}} dataSource={aksiya} /></div>

    <div style={{width:'100%'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Новости</h2> <Button type='primary'>create</Button>  </div>
    <Table columns={newscolumn} style={{width:'100%'}} dataSource={news} /></div>

    

 </div>)}

 <Modal title="Basic Modal" visible={isModalOpen2} onOk={()=>createHomiy()} onCancel={()=>handleCancel2()}>
      <Input id='title' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='link' showCount maxLength={50} placeholder='link'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile1(e)}>file</Checkbox>
    <Input type='text' id='file' placeholder='image'  />
    <br />
    <br />
    <TextArea showCount id='deck' maxLength={400}  placeholder='deckription' />
 </Modal>
 <Modal title="Осторожность" visible={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
      </Modal>

      <Modal title="Basic Modal" visible={isModalOpen2} onOk={()=>PutHomeiy()} onCancel={()=>handleCancel3()}>
      <Input id='title3' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='link3' showCount maxLength={50} placeholder='link'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile3(e)}>file</Checkbox>
    <Input type='text3' id='file' placeholder='image'  />
    <br />
    <br />
    <TextArea showCount id='deck3' maxLength={400}  placeholder='deckription' />
 </Modal>

    
    </div>
  )
}
