import React, { useEffect, useState } from 'react'
  import { Button, Checkbox, Image, Input, Modal, Select, Space, Table, message } from 'antd';
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
  const [aksiya,setAksiya]=useState([])
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  // const [isModalOpen3, setIsModalOpen3] = useState(false);

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen11, setIsModalOpen11] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen12, setIsModalOpen12] = useState(false);
  const [isModalOpen13, setIsModalOpen13] = useState(false);
  const [isModalOpen21, setIsModalOpen21] = useState(false);
  const [isModalOpen22, setIsModalOpen22] = useState(false);
  const [isModalOpen23, setIsModalOpen23] = useState(false);
  const [isModalOpen31, setIsModalOpen31] = useState(false);
  const [isModalOpen32, setIsModalOpen32] = useState(false);
  const [isModalOpen33, setIsModalOpen33] = useState(false);
  const [isModalOpen41, setIsModalOpen41] = useState(false);
  const [isModalOpen42, setIsModalOpen42] = useState(false);
  const [isModalOpen43, setIsModalOpen43] = useState(false);
  const [isModalOpen51, setIsModalOpen51] = useState(false);
  const [isModalOpen52, setIsModalOpen52] = useState(false);
  const [isModalOpen53, setIsModalOpen53] = useState(false);
  const [isModalOpen61, setIsModalOpen61] = useState(false);
  const [isModalOpen62, setIsModalOpen62] = useState(false);
  const [isModalOpen63, setIsModalOpen63] = useState(false);
  const [SelectPreferences, SetSelectPreferences] = useState("");

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
   function onFile21(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file21").type="file"
     }else{
       document.querySelector("#file21").type="text"
     }
   }
   function onFile23(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file23").type="file"
     }else{
       document.querySelector("#file23").type="text"
     }
   }

   function onFile31(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file31").type="file"
     }else{
       document.querySelector("#file31").type="text"
     }
   }
   function onFile61(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file61").type="file"
     }else{
       document.querySelector("#file61").type="text"
     }
   }
   function onFile33(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file33").type="file"
     }else{
       document.querySelector("#file33").type="text"
     }
   }
   function onFile63(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file63").type="file"
     }else{
       document.querySelector("#file63").type="text"
     }
   }
   function onFile53(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file53").type="file"
     }else{
       document.querySelector("#file53").type="text"
     }
   }


   function onFile51(e){
    setCheckFile(e.target.checked)
     if(e.target.checked){
     document.querySelector("#file51").type="file"
     }else{
       document.querySelector("#file51").type="text"
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
    setSelectId(key.id) 
    setIsModalOpen3(true);
   setTimeout(() => {
    document.querySelector('#title3').value=key.title
    document.querySelector('#link3').value=key.link
    console.log(key);
    document.querySelector('#file3').value=key.image
   }, 100);
   
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
    setCheckFile(false)
    document.querySelector("#file3").type="text"
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
function handleOk22(){
    axios.delete(`${url}/api/skachat_pridlachenu/${selectid}`).then(res=>{
        message.success("delete data")
        setIsModalOpen22(false)
        axios.get(`${url}/api/skachat_pridlachenu`).then(res=>{
            setSkachat_pridlachenu(res.data)
        })
    }).catch(err=>{
        message.error("not delete")
        setIsModalOpen22(false)
        })  
}
function handleOk32(){
  axios.delete(`${url}/api/preferences/${selectid}`).then(res=>{
      message.success("delete data")
      setIsModalOpen32(false)
      axios.get(`${url}/api/preferences`).then(res=>{
          setPreferences(res.data)
      })
  }).catch(err=>{
      message.error("not delete")
      setIsModalOpen32(false)
      })  
}
function handleOk62(){
  axios.delete(`${url}/api/news/${selectid}`).then(res=>{
      message.success("delete data")
      setIsModalOpen62(false)
      axios.get(`${url}/api/news`).then(res=>{
          setNews(res.data)
      })
  }).catch(err=>{
      message.error("not delete")
      setIsModalOpen62(false)
      })  
}
function handleOk42(){
  axios.delete(`${url}/api/sovuqlik/${selectid}`).then(res=>{
      message.success("delete data")
      setIsModalOpen42(false)
      axios.get(`${url}/api/sovuqlik`).then(res=>{
          setSovuqlik(res.data)
      })
  }).catch(err=>{
      message.error("not delete")
      setIsModalOpen42(false)
      })  
}
function handleOk52(){
  axios.delete(`${url}/api/aksiya/${selectid}`).then(res=>{
      message.success("delete data")
      setIsModalOpen52(false)
      axios.get(`${url}/api/aksiya`).then(res=>{
          setAksiya(res.data)
      })
  }).catch(err=>{
      message.error("not delete")
      setIsModalOpen52(false)
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
function craeteAksiya() {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title51").value)
  postdata.append("start_day",document.querySelector("#start_day51").value)
  postdata.append("end_day",document.querySelector("#end_day51").value)
  postdata.append("description",document.querySelector("#link51").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file51").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file51").value)    
  }
  axios.post(`${url}/api/aksiya`,postdata).then(res=>{
      message.success("create new sponsor")
      setIsModalOpen51(false)
  axios.get(`${url}/api/aksiya`).then(res=>{
      setAksiya(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen51(false)
  }) 
}
function putAksiya() {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title53").value)
  postdata.append("start_day",document.querySelector("#start_day53").value)
  postdata.append("end_day",document.querySelector("#end_day53").value)
  postdata.append("description",document.querySelector("#link53").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file53").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file53").value)    
  }
  axios.put(`${url}/api/aksiya/${selectid}`,postdata).then(res=>{
      message.success("create new data")
        setIsModalOpen53(false)
  axios.get(`${url}/api/aksiya`).then(res=>{
      setAksiya(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen53(false)
  }) 
}
function createPreferences() {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title31").value)
  postdata.append("description",document.querySelector("#link31").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file31").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file31").value)    
  }
  postdata.append("liso",SelectPreferences)
  
  axios.post(`${url}/api/preferences`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen31(false)
  axios.get(`${url}/api/preferences`).then(res=>{
      setPreferences(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen31(false)
  })
}
function createNews() {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title61").value)
  postdata.append("description",document.querySelector("#link61").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file61").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file61").value)    
  }
  postdata.append("min_description",document.querySelector("#deck61").value)
  
  axios.post(`${url}/api/news`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen61(false)
  axios.get(`${url}/api/news`).then(res=>{
      setNews(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen61(false)
  })
}
function PutNews() {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title63").value)
  postdata.append("description",document.querySelector("#link63").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file63").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file63").value)    
  }
  postdata.append("min_description",document.querySelector("#deck63").value)
  
  axios.put(`${url}/api/news/${selectid}`,postdata).then(res=>{
      message.success("create new data")
      setIsModalOpen63(false)
  axios.get(`${url}/api/news`).then(res=>{
      setNews(res.data)
  })
  }).catch(err=>{
  message.error("not create")
  setIsModalOpen63(false)
  })
}

function postPred(){
    var postdata=new FormData()
    postdata.append("title",document.querySelector("#title21").value)
    postdata.append("link",document.querySelector("#link21").value)
    if(checkFile){
    postdata.append("image",document.querySelector("#file21").files[0])   
    }else{
    postdata.append("image",document.querySelector("#file21").value)    
    }
    
    axios.post(`${url}/api/skachat_pridlachenu`,postdata).then(res=>{
        message.success("create new data")
        setIsModalOpen21(false)
    axios.get(`${url}/api/skachat_pridlachenu`).then(res=>{
        setSkachat_pridlachenu(res.data)
    })
    }).catch(err=>{
    message.error("not create")
    setIsModalOpen21(false)
    })   
}
function PutPred() {
    var postdata=new FormData()
    postdata.append("title",document.querySelector("#title23").value)
    postdata.append("link",document.querySelector("#link23").value)
    if(checkFile){
    postdata.append("image",document.querySelector("#file23").files[0])   
    }else{
    postdata.append("image",document.querySelector("#file23").value)    
    }
  axios.put(`${url}/api/skachat_pridlachenu/${selectid}`,postdata).then(res=>{
    message.success("update data")
    setIsModalOpen23(false)
    axios.get(`${url}/api/skachat_pridlachenu`).then(res=>{
        setSkachat_pridlachenu(res.data)
    })
  }).catch(err=>{
    message.error("don't operation")
    setIsModalOpen23(false)
  }) 
}
function PutPreferences(params) {
  var postdata=new FormData()
  postdata.append("title",document.querySelector("#title33").value)
  postdata.append("description",document.querySelector("#link33").value)
  if(checkFile){
  postdata.append("image",document.querySelector("#file33").files[0])   
  }else{
  postdata.append("image",document.querySelector("#file33").value)    
  }
  postdata.append("liso",SelectPreferences)

axios.put(`${url}/api/preferences/${selectid}`,postdata).then(res=>{
  message.success("update data")
  setIsModalOpen33(false)
  axios.get(`${url}/api/preferences`).then(res=>{
      setPreferences(res.data)
  })
}).catch(err=>{
  message.error("don't operation")
  setIsModalOpen33(false)
}) 
}
function PutHomeiy() {
    var postdata=new FormData()
    postdata.append("title",document.querySelector("#title3").value)
    postdata.append("link",document.querySelector("#link3").value)
    if(checkFile){
    postdata.append("image",document.querySelector("#file3").files[0])   
    }else{
    postdata.append("image",document.querySelector("#file3").value)    
    }
  axios.put(`${url}/api/homeiy/${selectid}`,postdata).then(res=>{
    message.success("update data")
    handleCancel3()
    axios.get(`${url}/api/homeiy`).then(res=>{
        setHomiy(res.data)
    })
  }).catch(err=>{
    message.error("don't operation")
    handleCancel3()
  })

}
function CreateMarka() {
   var postdata=new FormData()
   postdata.append("title",document.querySelector("#title11").value) 
   axios.post(`${url}/api/marka`,postdata).then(res=>{
    message.success("create data")
    setIsModalOpen11(false)
    axios.get(`${url}/api/marka`).then(res1=>[
     setMarka(res1.data)     
    ])
   }).catch(err=>{
    message.error("don't create")
   })
}

function putHarorat() {
  var postdata=new FormData()
  postdata.append("gradus",document.querySelector("#gradus43").value) 
  postdata.append("sena",document.querySelector("#sena43").value) 

  axios.put(`${url}/api/sovuqlik/${selectid}`,postdata).then(res=>{
   message.success("create data")
   setIsModalOpen43(false)
   axios.get(`${url}/api/sovuqlik`).then(res1=>[
    setSovuqlik(res1.data)     
   ])
  }).catch(err=>{
    setIsModalOpen43(false)
   message.error("don't create")
  })
}
function craeteHarorat() {
  var postdata=new FormData()
  postdata.append("gradus",document.querySelector("#gradus41").value) 
  postdata.append("sena",document.querySelector("#sena41").value) 

  axios.post(`${url}/api/sovuqlik`,postdata).then(res=>{
   message.success("create data")
   setIsModalOpen41(false)
   axios.get(`${url}/api/sovuqlik`).then(res1=>[
    setSovuqlik(res1.data)     
   ])
  }).catch(err=>{
    setIsModalOpen41(false)
   message.error("don't create")
  })
}

function handleOk12() {
    axios.delete(`${url}/api/marka/${selectid}`).then(res=>{
    message.success("delete data")
    setIsModalOpen12(false)
        axios.get(`${url}/api/marka`).then(res1=>[
            setMarka(res1.data)     
           ])
    }).catch(err=>{
   message.error("don't deleted")
    })
}
function PutMarka() {
    var putdata=new FormData()
    putdata.append("title",document.querySelector('#title13').value)
    axios.put(`${url}/api/marka/${selectid}`,putdata).then(res=>{
message.success("update data")
setIsModalOpen13(false)
axios.get(`${url}/api/marka`).then(res1=>[
    setMarka(res1.data)     
   ])
    }).catch(err=>{
        message.error('not update')
    })
}
const homiycolumn = [
  {
    title: 'Image',
    dataIndex: 'name',
  
    render: (_,text) =><Image src={text.image} height={"40px"}/>,
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
        <Button  type="dashed" onClick={()=>{showModal3(record)}}>Edit</Button>
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
          <Button  type="dashed" onClick={()=>{setIsModalOpen23(true);setSelectId(record.id);
       setTimeout(() => {
        document.querySelector("#title23").value=record.title;
        document.querySelector("#link23").value=record.deskription;
        document.querySelector("#file23").value=record.image;
       }, 100);
        }}>Edit</Button>
        <Button danger onClick={()=>{setIsModalOpen22(true);setSelectId(record.id)}} >Delete</Button>
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
         <Button  type="dashed" onClick={()=>{setSelectId(record.id);setIsModalOpen13(true);setTimeout(() => {
            document.querySelector("#title13").value=record.title
         }, 100);}}>Edit</Button>
        <Button danger onClick={()=>{setSelectId(record.id);setIsModalOpen12(true)}} >Delete</Button>
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
      render: (_,item)=> <div>{item.liso==="f"?("физических лиц"):("юридических лиц")}</div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button  type="dashed" onClick={()=>{setIsModalOpen33(true);setSelectId(record.id);
       setTimeout(() => {
        document.querySelector("#title33").value=record.title;
        document.querySelector("#link33").value=record.description;
        document.querySelector("#liso33").value=record.liso;
        document.querySelector("#file33").value=record.image;
       }, 100);
        }}>Edit</Button>
        <Button danger onClick={()=>{setIsModalOpen32(true);setSelectId(record.id)}} >Delete</Button>
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
          <Button  type="dashed" onClick={()=>{setIsModalOpen43(true);setSelectId(record.id);
       setTimeout(() => {
        document.querySelector("#sena43").value=record.sena;
        document.querySelector("#gradus43").value=record.gradus;
       }, 100);
        }}>Edit</Button>
        <Button danger onClick={()=>{setIsModalOpen42(true);setSelectId(record.id)}} >Delete</Button>
        </Space>
      ),
    },
  ];
  const newscolumn = [
    {
      title: 'Image',
      dataIndex: 'name',
      width:'10%',
      render: (_,text) =>  <Image src={text.image} height={"40px"}/>,
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
        <Button  type="dashed" onClick={()=>{setIsModalOpen63(true);setSelectId(record.id);
       setTimeout(() => {
        document.querySelector("#title63").value=record.title;
        document.querySelector("#link63").value=record.description;
        document.querySelector("#file63").value=record.image;
        document.querySelector("#deck63").value=record.min_description;
       }, 100);
        }}>Edit</Button>
        <Button danger onClick={()=>{setIsModalOpen62(true);setSelectId(record.id)}} >Delete</Button>
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
          <Button  type="dashed" onClick={()=>{setIsModalOpen53(true);setSelectId(record.id);
       setTimeout(() => {
        document.querySelector("#title53").value=record.title;
        document.querySelector("#start_day53").value=record.start_day;
        document.querySelector("#end_day53").value=record.end_day;
        document.querySelector("#link53").value=record.description;
        document.querySelector("#file53").value=record.image;

       }, 100);
        }}>Edit</Button>
        <Button danger onClick={()=>{setIsModalOpen52(true);setSelectId(record.id)}} >Delete</Button>
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
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Марка</h2> <Button type='primary'  onClick={()=>{
    setIsModalOpen11(true)
   }
   } >create</Button>  </div>
    <Table  columns={markcolumn} pagination={{pageSize:'4'}} style={{width:'100%'}} dataSource={marka} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Скачать приложение</h2> <Button type='primary' onClick={()=>{setIsModalOpen21(true)}} >create</Button>  </div>
    <Table pagination={{pageSize:'4'}} columns={skachat_pridlachenucolumn} style={{width:'100%'}} dataSource={skachat_pridlachenu} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Наши приемущества</h2> <Button  onClick={()=>{
    setIsModalOpen31(true)
   }} type='primary'>create</Button>  </div>
    <Table pagination={{pageSize:'4'}} columns={preferencescolumn} style={{width:'100%'}} dataSource={preferences} /></div>

    <div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Противоморозная 
добавка</h2> <Button onClick={()=>setIsModalOpen41(true)} type='primary'>create</Button></div>
    <Table pagination={{pageSize:'4'}} columns={sovuqlikcolumn} style={{width:'100%'}} dataSource={sovuqlik} /></div>

<div style={{width:'100%',maxWidth:'700px'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Наши акции</h2> <Button onClick={()=>{setIsModalOpen51(true)}} type='primary'>create</Button>  </div>
    <Table pagination={{pageSize:'4'}} columns={aksiyacolumn} style={{width:'100%'}} dataSource={aksiya} /></div>

    <div style={{width:'100%'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <h2 >Новости</h2> <Button onClick={()=>{setIsModalOpen61(true)}} type='primary'>create</Button>  </div>
    <Table pagination={{pageSize:'4'}} columns={newscolumn} style={{width:'100%'}} dataSource={news} /></div>

    

 </div>)}
 {/* Производитель */}
 <Modal title="Производитель Создавать" visible={isModalOpen2} onOk={()=>createHomiy()} onCancel={()=>handleCancel2()}>
      <Input id='title' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='link' showCount maxLength={50} placeholder='link'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile1(e)}>file</Checkbox>
    <Input type='text' id='file' placeholder='image'  />

 </Modal>
 <Modal title="Осторожность" visible={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
      </Modal>
<Modal title="Производитель изменять" visible={isModalOpen3} onOk={()=>PutHomeiy()} onCancel={()=>handleCancel3()}>
      <Input id='title3' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <Input id='link3' showCount maxLength={50} placeholder='link'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile3(e)}>file</Checkbox>
    <Input type='text' id='file3' placeholder='image'  />
  
    </Modal>

{/* Марка */}
    <Modal title="Марка Создавать" visible={isModalOpen11} onOk={()=>CreateMarka()} onCancel={()=>setIsModalOpen11(false)}>
      <Input id='title11' showCount maxLength={50} placeholder='title'  />
    </Modal>
 <Modal title="Осторожность" visible={isModalOpen12} onOk={()=>handleOk12()} onCancel={()=>setIsModalOpen12(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>

      <Modal title="Марка изменять" visible={isModalOpen13} onOk={()=>PutMarka()} onCancel={()=>setIsModalOpen13(false)}>
      <Input id='title13' showCount maxLength={50} placeholder='title'  />
    </Modal>

{/* Скачать приложение */}
    <Modal title="Скачать приложение Создавать" visible={isModalOpen21} onOk={()=>postPred()} onCancel={()=>setIsModalOpen21(false)}>
      <Input id='title21' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link21' showCount maxLength={50} placeholder='deskription'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile21(e)}>file</Checkbox>
    <Input type='text' id='file21' placeholder='image'  />

 </Modal>
 <Modal title="Осторожность" visible={isModalOpen22} onOk={()=>handleOk22()} onCancel={()=>setIsModalOpen22(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
      </Modal>

      <Modal title="Скачать приложение изменять" visible={isModalOpen23} onOk={()=>PutPred()} onCancel={()=>setIsModalOpen23(false)}>
      <Input id='title23' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link23' showCount maxLength={50} placeholder='deskription'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile23(e)}>file</Checkbox>
    <Input type='text' id='file23' placeholder='image'  />
  
    </Modal>

    {/* Наши приемущества */}
 <Modal title="Наши приемущества Создавать" visible={isModalOpen31} onOk={()=>createPreferences()} onCancel={()=>setIsModalOpen31(false)}>
      <Input id='title31' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link31' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <label htmlFor="">Для лиц</label>
    <Select id="liso31" onChange={(value) => {
            SetSelectPreferences(value)
          }} style={{ width: '100%' }}>
              <Select.Option value="f">Для физических лиц</Select.Option>
              <Select.Option value="y">Для юридических лиц</Select.Option>
          </Select>
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile31(e)}>file</Checkbox>
    <Input type='text' id='file31' placeholder='image'  />

 </Modal>
 <Modal title="Осторожность" visible={isModalOpen32} onOk={()=>handleOk32()} onCancel={()=>setIsModalOpen32(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
    </Modal>
<Modal title="Наши приемущества изменять" visible={isModalOpen33} onOk={()=>PutPreferences()} onCancel={()=>setIsModalOpen33(false)}>
      <Input id='title33' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link33' showCount maxLength={400} placeholder='description'  />
    <br />
    <br />
    <label htmlFor="">Для лиц</label>
    <Select id="liso33" onChange={(value) => {
            SetSelectPreferences(value)
          }} style={{ width: '100%' }}>
              <Select.Option value="f">Для физических лиц</Select.Option>
              <Select.Option value="y">Для юридических лиц</Select.Option>
          </Select>
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile33(e)}>file</Checkbox>
    <Input type='text' id='file33' placeholder='image'  />

    </Modal>
{/* Противоморозная добавка */}
<Modal title="Противоморозная добавка Создавать" visible={isModalOpen41} onOk={()=>craeteHarorat()} onCancel={()=>setIsModalOpen41(false)}>
      <Input id='sena41' type='number' showCount maxLength={50} placeholder='gradus'  />
      <br />
      <br />
      <Input id='gradus41' type='number' showCount maxLength={50} placeholder='sena'  />
    
    </Modal>
 <Modal title="Осторожность" visible={isModalOpen42} onOk={()=>handleOk42()} onCancel={()=>setIsModalOpen42(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>

      <Modal title="Противоморозная добавка изменять" visible={isModalOpen43} onOk={()=>putHarorat()} onCancel={()=>setIsModalOpen43(false)}>
      <Input id='sena43' type='number' showCount maxLength={50} placeholder='Sena'  />
      <br />
      <br />
      <Input id='gradus43' type='number' showCount maxLength={50} placeholder='Gradus'  />

    </Modal>


{/* Наши акции */}
<Modal title="Наши акции Создавать" visible={isModalOpen51} onOk={()=>craeteAksiya()} onCancel={()=>setIsModalOpen51(false)}>
<Input id='title51' showCount maxLength={50}  placeholder='title'  />
    <br />
    <br />
    <label htmlFor="">Дата начала</label>
    <Input id='start_day51' type="date"  placeholder='title'  />
    <br />
    <br />
    <label htmlFor="">Дата окончания</label>
    <Input id='end_day51' type="date" placeholder='start day' />
    <br />
    <br />

    <TextArea id='link51'  showCount maxLength={400} placeholder='deskription'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile51(e)}>file</Checkbox>
    <Input type='text' id='file51' placeholder='image'  />
    </Modal>
 <Modal title="Осторожность" visible={isModalOpen52} onOk={()=>handleOk52()} onCancel={()=>setIsModalOpen52(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
</Modal>

      <Modal title="Наши акции изменять" visible={isModalOpen53} onOk={()=>putAksiya()} onCancel={()=>setIsModalOpen53(false)}>
      <Input id='title53' showCount maxLength={50}  placeholder='title'  />
    <br />
    <br />
    <label htmlFor="">Дата начала</label>
    <Input id='start_day53' type="date"  placeholder='title'  />
    <br />
    <br />
    <label htmlFor="">Дата окончания</label>
    <Input id='end_day53' type="date" placeholder='start day' />
    <br />
    <br />

    <TextArea id='link53'  showCount maxLength={400} placeholder='deskription'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile53(e)}>file</Checkbox>
    <Input type='text' id='file53' placeholder='image'  />
    </Modal>



{/* Новости */}
    <Modal title="Новости Создавать" visible={isModalOpen61} onOk={()=>createNews()} onCancel={()=>setIsModalOpen61(false)}>
      <Input id='title61' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link61' 
    
    placeholder='description'  />
    <br />
    <br />
    <TextArea id='deck61' showCount maxLength={400} placeholder='min_description'  />
    <br />
    <br />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile61(e)}>file</Checkbox>
    <Input type='text' id='file61' placeholder='image'  />
 </Modal>
 <Modal title="Осторожность" visible={isModalOpen62} onOk={()=>handleOk62()} onCancel={()=>setIsModalOpen62(false)}>
    <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
    </Modal>
<Modal title="Новости изменять" visible={isModalOpen63} onOk={()=>PutNews()} onCancel={()=>setIsModalOpen63(false)}>
<Input id='title63' showCount maxLength={50} placeholder='title'  />
    <br />
    <br />
    <TextArea id='link63' placeholder='description'  />
    <br />
    <br />
    <TextArea id='deck63' showCount maxLength={400} placeholder='min_description'  />
    <br />
    <br />
    <Checkbox onChange={(e)=>onFile63(e)}>file</Checkbox>
    <Input type='text' id='file63' placeholder='image'  />
    
    
    </Modal>




    </div>
  )
}
