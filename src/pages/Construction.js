import { Button, Checkbox, Image, Input, Modal, Space, Table, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from './host'
const { TextArea } = Input;
export default function Construction() {
const [isModalOpen,setIsModalOpen]=useState(false)
const [isModalOpen2,setIsModalOpen2]=useState(false)
const [isModalOpen3,setIsModalOpen3]=useState(false)
const [isModalOpen4,setIsModalOpen4]=useState(false)
const [isModalOpen5,setIsModalOpen5]=useState(false)
const [isModalOpen11,setIsModalOpen11]=useState(false)
const [isModalOpen12,setIsModalOpen12]=useState(false)
const [isModalOpen13,setIsModalOpen13]=useState(false)
const [isModalOpen21,setIsModalOpen21]=useState(false)
const [isModalOpen22,setIsModalOpen22]=useState(false)
const [isModalOpen23,setIsModalOpen23]=useState(false)
const [isModalOpen31,setIsModalOpen31]=useState(false)
const [isModalOpen32,setIsModalOpen32]=useState(false)
const [isModalOpen33,setIsModalOpen33]=useState(false)
const [isModalOpen41,setIsModalOpen41]=useState(false)
const [isModalOpen42,setIsModalOpen42]=useState(false)
const [isModalOpen43,setIsModalOpen43]=useState(false)
const [checkFile,setCheckFile]=useState()
const [selectId,setSelectId]=useState(0)
const [position,setPosition]=useState([])
const [userCount,setUserCount]=useState(0)
const [filial,setFilial]=useState(0)
const [shving,setShving]=useState(0)
const [sena,setSena]=useState(0)
const [mashina,setMashina]=useState(0)
const [homiy,setHomiy]=useState(0)

const [manegerCount,setManegerCount]=useState(0)
const [company,setCompany]=useState([])
function updateCompany() {
  var postdata=new FormData()
  postdata.append("email",document.querySelector("#email1").value)
  postdata.append("whatsapp",document.querySelector("#whatsapp1").value)
  postdata.append("phone",document.querySelector("#phone1").value)
  postdata.append("telegram",document.querySelector("#telegram1").value)
  if(checkFile){
  postdata.append("logo",document.querySelector("#logo1").files[0])   
  }else{
  postdata.append("logo",document.querySelector("#logo1").value)    
  }
  axios.put(`${url}/api/compony/${company[0].id}`,postdata).then(res=>{
      message.success("create new sponsor")
      setIsModalOpen5(false)
  axios.get(`${url}/api/compony`).then(res=>{
      setCompany(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen5(false)
  })
}

function createCompany (){
  var postdata=new FormData()
  postdata.append("email",document.querySelector("#email").value)
  postdata.append("whatsapp",document.querySelector("#whatsapp").value)
  postdata.append("phone",document.querySelector("#phone").value)
  postdata.append("telegram",document.querySelector("#telegram").value)

  if(checkFile){
  postdata.append("logo",document.querySelector("#logo").files[0])   
  }else{
  postdata.append("logo",document.querySelector("#logo").value)    
  }
  
  axios.post(`${url}/api/compony`,postdata).then(res=>{
      message.success("create new sponsor")
      setIsModalOpen4(false)
  axios.get(`${url}/api/compony`).then(res=>{
      setCompany(res.data)

  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen4(false)
  })

}
function onFile61(e){
setCheckFile(e.target.checked)
   if(e.target.checked){
   document.querySelector("#logo").type="file"
   }else{
     document.querySelector("#logo").type="text"
   }
 }
function onFile11(e){
  setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#image11").type="file"
     }else{
       document.querySelector("#image11").type="text"
     }
   }
   function onFile21(e){
    setCheckFile(e.target.checked)
       if(e.target.checked){
       document.querySelector("#image21").type="file"
       }else{
         document.querySelector("#image21").type="text"
       }
     }
function onFile23(e){
      setCheckFile(e.target.checked)
         if(e.target.checked){
         document.querySelector("#image23").type="file"
         }else{
           document.querySelector("#image23").type="text"
         }
       }
function onFile31(e){
        setCheckFile(e.target.checked)
           if(e.target.checked){
           document.querySelector("#image31").type="file"
           }else{
             document.querySelector("#image31").type="text"
           }
    }
function onFile33(e){
          setCheckFile(e.target.checked)
             if(e.target.checked){
             document.querySelector("#image33").type="file"
             }else{
               document.querySelector("#image33").type="text"
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
function createFilial() {
  var postdata=new FormData()
  postdata.append("latitude",document.querySelector("#latitude11").value)
  postdata.append("title",document.querySelector("#title11").value)
  postdata.append("longitude",document.querySelector("#longitude11").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image11").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image11").value)    
  }
  
  axios.post(`${url}/api/filial`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen11(false)
  axios.get(`${url}/api/filial`).then(res=>{
      setFilial(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen11(false)
  })
 
   }
function updateFilial() {
    var postdata=new FormData()
    postdata.append("latitude",document.querySelector("#latitude13").value)
    postdata.append("title",document.querySelector("#title13").value)
    postdata.append("longitude",document.querySelector("#longitude13").value)
    if(checkFile){
    postdata.append("image",document.querySelector("#image13").files[0])   
    }else{
    postdata.append("image",document.querySelector("#image13").value)    
    }
    
    axios.put(`${url}/api/filial/${selectId}`,postdata).then(res=>{
        message.success("create new data")
        setIsModalOpen13(false)
    axios.get(`${url}/api/filial`).then(res=>{
        setFilial(res.data)
    })
    }).catch(err=>{
    message.error("not create")
    setIsModalOpen13(false)
    })
   
     }
 function onFile62(e){
  setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#logo1").type="file"
     }else{
       document.querySelector("#logo1").type="text"
     }
   }
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
function deleteFilial() {
  axios.delete(`${url}/api/filial/${selectId}`,).then(res=>{
    setIsModalOpen12(false)
    axios.get(`${url}/api/filial`).then(res2=>{
      setFilial(res2.data)
    })
    message.success("delete filial")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen12(false)
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
function PutPosition() {
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
function createShving() {
  var postdata=new FormData()
  postdata.append("m",document.querySelector("#m21").value)
  postdata.append("sena",document.querySelector("#sena21").value)
  postdata.append("description",document.querySelector("#description21").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image21").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image21").value)    
  }

  axios.post(`${url}/api/shving`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen21(false)
  axios.get(`${url}/api/shving`).then(res=>{
      setShving(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen21(false)
  })
 
}
function deleteShving() {
  axios.delete(`${url}/api/shving/${selectId}`,).then(res=>{
    setIsModalOpen22(false)
    axios.get(`${url}/api/shving`).then(res2=>{
      setShving(res2.data)
    })
    message.success("delete shving")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen22(false)
  })  
}
function putShving() {
  var postdata=new FormData()
  postdata.append("m",document.querySelector("#m23").value)
  postdata.append("sena",document.querySelector("#sena23").value)
  postdata.append("description",document.querySelector("#description23").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image23").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image23").value)    
  }

  axios.put(`${url}/api/shving/${selectId}`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen23(false)
  axios.get(`${url}/api/shving`).then(res=>{
      setShving(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen23(false)
  })
 
}
function createMashina() {
  var postdata=new FormData()
  postdata.append("m3",document.querySelector("#m31").value)
  postdata.append("sena",document.querySelector("#sena31").value)
  postdata.append("description",document.querySelector("#description31").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image31").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image31").value)    
  }

  axios.post(`${url}/api/mashina`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen31(false)
  axios.get(`${url}/api/mashina`).then(res=>{
      setMashina(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen31(false)
  })
 
}
function createSena() {
  var postdata=new FormData()
  postdata.append("usluga",document.querySelector("#usluga").value)
  postdata.append("suv_bilan",document.querySelector("#suv_bilan").value)
  postdata.append("pustoy_smena",document.querySelector("#pustoy_smena").value)


  axios.post(`${url}/api/sena`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen41(false)
  axios.get(`${url}/api/sena`).then(res=>{
      setSena(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen41(false)
  })
 
}
function deleteMashina() {
  axios.delete(`${url}/api/mashina/${selectId}`,).then(res=>{
    setIsModalOpen32(false)
    axios.get(`${url}/api/mashina`).then(res2=>{
      setMashina(res2.data)
    })
    message.success("delete mashina")
  }).catch(err=>{
    message.error("NOT delete")
    setIsModalOpen32(false)
  })  
}
function putMashina() {
  var postdata=new FormData()
  postdata.append("m3",document.querySelector("#m33").value)
  postdata.append("sena",document.querySelector("#sena33").value)
  postdata.append("description",document.querySelector("#description33").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#image33").files[0])   
  }else{
  postdata.append("image",document.querySelector("#image33").value)    
  }

  axios.put(`${url}/api/mashina/${selectId}`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen33(false)
  axios.get(`${url}/api/mashina`).then(res=>{
      setMashina(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen33(false)
  })
 
}

function putSena() {
   var postdata=new FormData()
  postdata.append("usluga",document.querySelector("#usluga1").value)
  postdata.append("suv_bilan",document.querySelector("#suv_bilan1").value)
  postdata.append("pustoy_smena",document.querySelector("#pustoy_smena1").value)
  axios.put(`${url}/api/sena/${selectId}`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen43(false)
  axios.get(`${url}/api/sena`).then(res=>{
      setSena(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen43(false)
  })
  
}
const senacolumn = [
{
  title: 'usluga',
  dataIndex: 'usluga',
  key: 'usluga',
},
{
  title: 'suv_bilan',
  dataIndex: 'suv_bilan',
  key: 'suv_bilan',
},
{
  title: 'pustoy_smena',
  dataIndex: 'pustoy_smena',
  key: 'pustoy_smena',
},

{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
      <Button  type="dashed"
     onClick={()=>{
      setSelectId(record.id)
      setIsModalOpen43(true)
   setTimeout(() => {
    document.querySelector("#usluga1").value=record.usluga
    document.querySelector("#suv_bilan1").value=record.suv_bilan
    document.querySelector("#pustoy_smena1").value=record.pustoy_smena
   }, 100);
     }}
     >Edit</Button>
    </Space>
  ),
},
];
const mashinacolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
    render: (_,text) => <Image src={text.image} height={"40px"}/>,
  },{
  title: 'm3',
  dataIndex: 'm3',
  key: 'm3',
},
{
  title: 'sena',
  dataIndex: 'sena',
  key: 'sena',
},
{
  title: 'description',
  dataIndex: 'description',
  key: 'description',
},

{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
        <Button  type="dashed"
     onClick={()=>{
      setSelectId(record.id)
      setIsModalOpen33(true)
   setTimeout(() => {
    document.querySelector("#m33").value=record.m3
    document.querySelector("#sena33").value=record.sena
    document.querySelector("#description33").value=record.description
    document.querySelector("#image33").value=record.image
   }, 100);
     }}
     >Edit</Button>
    <Button danger onClick={()=>{
      setIsModalOpen32(true)
      setSelectId(record.id)
    }} >Delete</Button>
    </Space>
  ),
},
];

const shvingcolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
    render: (_,text) => <Image src={text.image} height={"40px"}/>,
  },{
  title: 'm',
  dataIndex: 'm',
  key: 'm',
},
{
  title: 'sena',
  dataIndex: 'sena',
  key: 'sena',
},
{
  title: 'description',
  dataIndex: 'description',
  key: 'description',
},

{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    <Space size="middle">
        <Button  type="dashed"
     onClick={()=>{
      setSelectId(record.id)
      setIsModalOpen23(true)
   setTimeout(() => {
    document.querySelector("#m23").value=record.m
    document.querySelector("#sena23").value=record.sena
    document.querySelector("#description23").value=record.description
    document.querySelector("#image23").value=record.image
   }, 100);
     }}
     >Edit</Button>
    <Button danger onClick={()=>{
      setIsModalOpen22(true)
      setSelectId(record.id)
    }} >Delete</Button>
    </Space>
  ),
},
];


const filialcolumn = [
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
   }, 100);
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
axios.get(`${url}/api/compony`).then(res4=>{
setCompany(res4.data)
axios.get(`${url}/api/filial`).then(res5=>{
setFilial(res5.data)
axios.get(`${url}/api/shving`).then(res6=>{
    setShving(res6.data)
axios.get(`${url}/api/sena`).then(res7=>{
      setSena([res7.data[0]])
axios.get(`${url}/api/mashina`).then(res8=>{
        setMashina(res8.data)
      })})})})})})})})
},[])

  return (
    <div>

{company.length>0?(<div className="dd" style={{minWidth:'300px',width:'80%',margin:'auto',maxWidth:'500px',marginBottom:'30px'}}>
<input style={{marginTop:'40px'}} id="slider" class="customSlider" type="checkbox"/>
  <label for="slider"></label>

<div class="wrapper">
	<div class="top-icons">
		<i onClick={()=>{
      setIsModalOpen5(true)
      setTimeout(() => {
        document.querySelector("#whatsapp1").value=company[0].whatsapp
        document.querySelector("#email1").value=company[0].email
        document.querySelector("#phone1").value=company[0].phone
        document.querySelector("#telegram1").value=company[0].telegram
        document.querySelector("#logo1").value=company[0].logo
      }, 100);
    }} class="fa fa-pencil"></i>
	</div>
	
	<div class="profile" style={{textAlign:'center'}}>
		<Image height={'120px'}  src={company[0].logo.includes("http")?company[0].logo:`${url}/${company[0].logo}`} class="thumbnail" />
<p class="title">telegram:{company[0].telegram}</p>
<p class="title">email:{company[0].email}</p>
<p class="title">whatsapp:{company[0].whatsapp}</p>
<p class="title">phone:{company[0].phone}</p>

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

</div>):(<Button onClick={()=>{setIsModalOpen4(true)
}} type="primary">Create company</Button>)}


<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
<div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Ветвь</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen11(true)
   }
   } >create</Button>  </div>
  <Table  columns={filialcolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={filial} /></div>
<div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Швинг</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen21(true)
   }
   } >create</Button>  </div>
  <Table  columns={shvingcolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={shving} /></div>
<div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Машина</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen31(true)
   }
   } >create</Button>  </div>
  <Table  columns={mashinacolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={mashina} /></div>  

<div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Sena</h2> 
  {sena.length<1?(<Button type='primary'  onClick={()=>{
    setIsModalOpen41(true)
   }
   } >create</Button> ):(<></>)}
    </div>
  <Table  columns={senacolumn} pagination={false} style={{width:'100%'}} dataSource={[sena[0]]} /></div>
    <div style={{width:'100%',maxWidth:'700px',marginTop:'40px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Позиция</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen(true)
   }
   } >create</Button>  </div>
    <Table  columns={positoincolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={position} /></div>


</div>



{/* Position */}
<Modal title="Position Создавать" visible={isModalOpen} onOk={()=>CreatePosition()} onCancel={()=>setIsModalOpen(false)}>
      <Input id='title' showCount maxLength={50} placeholder='title'  />
    </Modal>
 <Modal title="Осторожность" visible={isModalOpen2} onOk={()=>handleOk2()} onCancel={()=>setIsModalOpen2(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
  <Modal title="Position изменять" visible={isModalOpen3} onOk={()=>PutPosition()} onCancel={()=>setIsModalOpen3(false)}>
      <Input id='title3' showCount maxLength={50} placeholder='position Name'  />
    </Modal>


    {/* Company */}
<Modal title="Осторожность" visible={isModalOpen4} onOk={()=>createCompany()} onCancel={()=>setIsModalOpen4(false)}>
   <Input id='email' showCount maxLength={50} placeholder='email'  />
    <br />
    <br />
    <Input id='whatsapp' showCount maxLength={50} placeholder='whatsapp'  />
    <br />
    <br />
    <Input id='phone' showCount maxLength={50} placeholder='phone'  />
    <br />
    <br />
    <Input id='telegram' showCount maxLength={50} placeholder='telegram'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile61(e)}>file</Checkbox>
    <Input type='text' id='logo' placeholder='logo'  />
</Modal>
 <Modal title="Осторожность" visible={isModalOpen5} onOk={()=>updateCompany()} onCancel={()=>setIsModalOpen5(false)}>
   <Input id='email1' showCount maxLength={50} placeholder='email'  />
    <br />
    <br />
    <Input id='whatsapp1' showCount maxLength={50} placeholder='whatsapp'  />
    <br />
    <br />
    <Input id='phone1'  showCount maxLength={50} placeholder='phone'  />
    <br />
    <br />
    <Input id='telegram1' showCount maxLength={50} placeholder='telegram'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile62(e)}>file</Checkbox>
    <Input type='text' id='logo1' placeholder='logo'  />
</Modal>


{/* Filial */}
<Modal title="Осторожность" visible={isModalOpen11} onOk={()=>createFilial()} onCancel={()=>setIsModalOpen11(false)}>
    <Input id='latitude11' showCount maxLength={50} placeholder='latitude'  />
    <br />
    <br />
    <Input id='title11' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='longitude11' showCount maxLength={50} placeholder='longitude'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile11(e)}>file</Checkbox>
    <Input type='text' id='image11' placeholder='image'  />
</Modal>
<Modal title="Осторожность" visible={isModalOpen12} onOk={()=>deleteFilial()} onCancel={()=>setIsModalOpen12(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
 <Modal title="Осторожность" visible={isModalOpen13} onOk={()=>updateFilial()} onCancel={()=>setIsModalOpen13(false)}>
 <Input id='latitude13' showCount maxLength={50} placeholder='latitude'  />
    <br />
    <br />
    <Input id='title13' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='longitude13' showCount maxLength={50} placeholder='longitude'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile13(e)}>file</Checkbox>
    <Input type='text' id='image13' placeholder='image'  />
</Modal>

{/* Shving */}
<Modal title="Осторожность" visible={isModalOpen21} onOk={()=>createShving()} onCancel={()=>setIsModalOpen21(false)}>
    <Input id='m21' showCount maxLength={50} placeholder='m'  />
    <br />
    <br />
    <Input id='sena21' showCount maxLength={50} placeholder='sena'  />
    <br />
    <br />
    <TextArea id='description21' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile21(e)}>file</Checkbox>
    <Input type='text' id='image21' placeholder='image'  />
</Modal>
<Modal title="Осторожность" visible={isModalOpen22} onOk={()=>deleteShving()} onCancel={()=>setIsModalOpen22(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
 <Modal title="Осторожность" visible={isModalOpen23} onOk={()=>putShving()} onCancel={()=>setIsModalOpen23(false)}>
 <Input id='m23' showCount maxLength={50} placeholder='m'  />
    <br />
    <br />
    <Input id='sena23' showCount maxLength={50} placeholder='sena'  />
    <br />
    <br />
    <TextArea id='description23' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile23(e)}>file</Checkbox>
    <Input type='text' id='image23' placeholder='image'  />
</Modal>


{/* Машина */}
<Modal title="Осторожность" visible={isModalOpen31} onOk={()=>createMashina()} onCancel={()=>setIsModalOpen31(false)}>
    <Input id='m31' showCount maxLength={50} placeholder='m3'  />
    <br />
    <br />
    <Input id='sena31' showCount maxLength={50} placeholder='sena'  />
    <br />
    <br />
    <TextArea id='description31' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile31(e)}>file</Checkbox>
    <Input type='text' id='image31' placeholder='image'  />
</Modal>
<Modal title="Осторожность" visible={isModalOpen32} onOk={()=>deleteMashina()} onCancel={()=>setIsModalOpen32(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>
 <Modal title="Осторожность" visible={isModalOpen33} onOk={()=>putMashina()} onCancel={()=>setIsModalOpen33(false)}>
 <Input id='m33' showCount maxLength={50} placeholder='m3'  />
    <br />
    <br />
    <Input id='sena33' showCount maxLength={50} placeholder='sena'  />
    <br />
    <br />
    <TextArea id='description33' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile33(e)}>file</Checkbox>
    <Input type='text' id='image33' placeholder='image'  />
</Modal>

 {/* Sena */}
<Modal title="Осторожность" visible={isModalOpen41} onOk={()=>createSena()} onCancel={()=>setIsModalOpen41(false)}>
    <Input id='usluga' showCount maxLength={50} placeholder='usluga'  />
    <br />
    <br />
    <Input id='suv_bilan' showCount maxLength={50} placeholder='suv_bilan'  />
    <br />
    <br />
    <Input id='pustoy_smena' showCount maxLength={50} placeholder='pustoy_smena'  />
    <br />
    <br />
</Modal>
 <Modal title="Осторожность" visible={isModalOpen43} onOk={()=>putSena()} onCancel={()=>setIsModalOpen43(false)}>
 <Input id='usluga1' showCount maxLength={50} placeholder='usluga'  />
    <br />
    <br />
    <Input id='suv_bilan1' showCount maxLength={50} placeholder='suv_bilan'  />
    <br />
    <br />
    <Input id='pustoy_smena1' showCount maxLength={50} placeholder='pustoy_smena'  />
    <br />
    <br />
</Modal>



    </div>
  )
}
