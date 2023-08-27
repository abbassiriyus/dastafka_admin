import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  message,
  Typography,
  Button,
  Modal,
  Input,
  Select,
  Image,
} from "antd";

import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "./host";
import TextArea from "antd/es/input/TextArea";
const { Title } = Typography;



function Tables(props) {
var [category,setCategory]=useState(props.category)
var [data, setData]=useState([])
const [mark, SetMark]=useState([])
const [homiy, SetHomiy]=useState([])
const [selectMarka, SetSelectMarka]=useState(null)
const [selecthomiy, SetSelectHomiy]=useState(null)



const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);


function PostProduct(params) {
  var data=new FormData()
  data.append("description",document.querySelector("#description").value)
  data.append("s3_sena",document.querySelector("#s3_sena").value)
  data.append("s4_sena",document.querySelector("#s4_sena").value)
  data.append("marka",selectMarka)
  data.append("hydrophobic_additive_sena",document.querySelector("#hydrophobic_additive_sena").value)
  data.append("fiber_fiber",document.querySelector("#Fiber_fiber").value)
  data.append("homiy_id",selecthomiy)
axios.post(`${url}/api/product`,data).then(res=>{
  message.success("Create new Product")
  setIsModalOpen(false)
  axios.get(`${url}/api/marka`).then(res=>{
    SetMark(res.data)
    axios.get(`${url}/api/homeiy`).then(res1=>{
      SetHomiy(res1.data)
  axios.get(`${url}/api/product`).then(res2=>{
  for (let i = 0; i < res2.data.length; i++) {
  for (let j = 0; j < res.data.length; j++) {
  if(res.data[j].id===res2.data[i].marka){
  res2.data[i].marka_name=res.data[j].title
  }
  for (let j = 0; j < res1.data.length; j++) {
  if(res1.data[j].id===res2.data[i].homiy_id){
  res2.data[i].homiy=res1.data[j].title
  res2.data[i].image=res1.data[j].image
  }}
  
  }}
  console.log(res2.data,"sdsd");
    setData(res2.data)
  })
  
  
    })
  })
}).catch(err=>{
message.error("don't create")
setIsModalOpen(false)
})
}
useEffect(()=>{
  setCategory(props.category)
})
useEffect(()=>{
axios.get(`${url}/api/marka`).then(res=>{
  SetMark(res.data)
  axios.get(`${url}/api/homeiy`).then(res1=>{
    SetHomiy(res1.data)
axios.get(`${url}/api/product`).then(res2=>{
for (let i = 0; i < res2.data.length; i++) {
for (let j = 0; j < res.data.length; j++) {
if(res.data[j].id===res2.data[i].marka){
res2.data[i].marka_name=res.data[j].title
}
for (let j = 0; j < res1.data.length; j++) {
if(res1.data[j].id===res2.data[i].homiy_id){
res2.data[i].homiy=res1.data[j].title
res2.data[i].image=res1.data[j].image
}}

}}
console.log(res2.data,"sdsd");
  setData(res2.data)
})


  })
})
},[])


const columns = [
  {
    title: "Производитель",
    dataIndex: "image",
    render: (_,item)=><Image style={{height:"30px"}} alt="no image" src={item.image} /> ,
    width: "5%",
  },
  {
    title: "Марка",
    dataIndex: "marka_name",
    key: "marka_name",
  },

  {
    title: "Опции",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "Цена Ц3",
    key: "s3_sena",
    dataIndex: "s3_sena",
  },
  {
    title: "Цена Ц4",
    key: "s4_sena",
    dataIndex: "s4_sena",
  },
  {
    title: "Гидрофобная добавка",
    key: "hydrophobic_additive_sena",
    dataIndex: "hydrophobic_additive_sena",
  },
  {
    title: "Фиброволокно",
    key: "fiber_fiber",
    dataIndex: "fiber_fiber",
  },
  {
    title: "Delete",
    render:()=><Button danger>Delete</Button>,
  },
  {
    title: "Edit",
    render:()=><Button type="dashed">Edit</Button>,
  },
];


  return (
    <>
      <div className="tabled">
    
      
        <br />  
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Product table"
              extra={
                <> 
                  <Radio.Group onChange={()=>onChange} defaultValue="a">
                 {category.map(item=>{
                  return <Radio.Button value={item.id}>{item.title}</Radio.Button>
                 })}   
                  <Button style={{marginLeft:'20px'}} onClick={showModal} type="primary" >Create Product
      </Button>
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
        <Modal title="Create Product" open={isModalOpen} onOk={()=>PostProduct()} onCancel={handleCancel}>
        <Input placeholder="цена ц3" id="s3_sena" type="number"  showCount maxLength={30}  onChange={onChange} />
    <br />
    <br />
    <Input placeholder="цена ц4" id="s4_sena" type="number" showCount maxLength={30}   onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="description" id="description"  onChange={onChange} />
  <br />
  <br />
  <label htmlFor="">Marka</label>
  <Select id="marka"  onChange={(value) => {
      SetSelectMarka(value)
    }} style={{width:'100%'}}>
    {mark.map(item=>{
      return <Select.Option value={item.id}>{item.title}</Select.Option>
    })}
        </Select>
        <br />
    <br />
        <Input  id="hydrophobic_additive_sena"  placeholder="Гидрофобная добавка цена" type="number" showCount maxLength={30}  allowClear onChange={onChange} />
        <br />
    <br />
    <Input placeholder="Фиброволокно цена"  id="Fiber_fiber" type="number" showCount maxLength={30}  onChange={onChange} />
    <br />
    <br />


 <label htmlFor="">Homiy</label>
      <Select  onChange={(value) => {
     SetSelectHomiy(value)
    }} id="homiy_id" style={{width:'100%'}}>
    {homiy.map(item=>{
      return <Select.Option value={item.id}>{item.title}</Select.Option>
    })}
        </Select>
      </Modal>

      </div>
    </>
  );
}

export default Tables;
