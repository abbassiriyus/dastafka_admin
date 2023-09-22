import axios from "axios";
import React, { useEffect, useState } from "react";
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
  Space,
} from "antd";
import url from "./host";

export default function Zakaz() {
  var [data, setData] = useState([]);
  var [zakaz, setZakaz] = useState([]);
  var [table, setInfo] = useState([]);
  var [information, setInformation] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // var [zakazId, setZakazId] = useState();
  var [Catgeory, setCatgeory] = useState([]);
  var [page, setPage] = useState(0);
  var [VoditelId, setVoditelId] = useState([]);
  var [Voditel,setVoditel]=useState([])
  var [mashina,setMashina]=useState([])
  var [Users,setUsers]=useState([])
  var [Zakaz_id,setZakaz_id]=useState([])

  function abbas(params) {
    setInformation(params);
    document.querySelector("#modalInformation").style = "display:flex";
  }

  function Page(item) {
    setVoditelId(item)
    axios.get(`${url}/api/voditel_zakaz`).then(res=>{
      const Filter=res.data.filter(item1=>item1.zakaz_id==item.id)
      setVoditel(Filter)
      // res.data.map(item1=>{

      // })
    })
    setPage(1);
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
      render: (_, item) => (
        <a href={item.document_mashina}>
          {" "}
          {item.document_mashina ? item.document_mashina : "document not"}{" "}
        </a>
      ),
      width: "2%",
    },
    // {
    //   title: "prava",
    //   key: "prava",
    //   dataIndex: "prava",
    //   width: "12%",
    // },
    // {
    //   title: "fomo",
    //   key: "fomo",
    //   dataIndex: "fomo",
    //   width: "12%",
    // },
    // {
    //   title: "login",
    //   key: "login",
    //   dataIndex: "login",
    //   width: "12%",
    // },
    // {
    //   title: "password",
    //   key: "password",
    //   dataIndex: "password",
    //   width: "12%",
    // },
    // {
    //   title: "delete",
    //   key: "delete",
    //   render: (_, item) => (
    //     <Radio.Button
    //       onClick={() => {
    //         DeleteData(item.id);
    //       }}
    //     >
    //       delete
    //     </Radio.Button>
    //   ),
    //   width: "12%",
    // },
    // {
    //   title: "edit",
    //   key: "edit",
    //   render: (_, item) => (
    //     <Radio.Button
    //       onClick={() => {
    //         alert(item.id);
    //       }}
    //     >
    //       edit
    //     </Radio.Button>
    //   ),
    //   width: "10%",
    // },
    {
      title: "information",
      key: "information",
      render: (_, item) => <Radio.Button>information</Radio.Button>,
      width: "10%",
    },
  ];
  const zakaz1 = [
    {
      title: "address",
      dataIndex: "address",
      key: "address",
      width: "12%",
    },
    {
      title: "day",
      dataIndex: "day",
      width: "12%",
    },
    {
      title: "time",
      key: "time",
      dataIndex: "time",
      width: "12%",
    },
    {
      title: "category",
      key: "category",
      dataIndex: "category",
      width: "12%",
    },
    {
      title: "positsiya",
      key: "positsiya",
      dataIndex: "positsiya",
      width: "12%",
    },
    {
      title: "m3",
      key: "m3",
      dataIndex: "m3",
      width: "12%",
    },
    {
      title: "payment",
      key: "payment",
      dataIndex: "payment",
      width: "12%",
    },
    {
      title: "tarif",
      key: "tarif",
      dataIndex: "tarif",
      width: "12%",
    },
    {
      title: "mashina",
      key: "mashina",
      dataIndex: "mashina",
      width: "12%",
    },
    {
      title: "work_time_shving",
      key: "work_time_shving",
      dataIndex: "work_time_shving",
      width: "12%",
    },
    {
      title: "price",
      key: "price",
      dataIndex: "price",
      width: "12%",
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      width: "12%",
    },
    {
      title: "shving",
      key: "shving",
      dataIndex: "shving",
      width: "12%",
    },
    {
      title: "marka",
      key: "marka",
      dataIndex: "marka",
      width: "12%",
    },
    {
      title: "bonus",
      key: "bonus",
      dataIndex: "bonus",
      width: "12%",
    },
    {
      title: "description",
      key: "description",
      // render: (_, item) => (
      //   <p style={{width:'100px',overflowX:'scroll'}}>{item.description}</p>
      // ),
      dataIndex: "description",
      width: "4%",
    },
    {
      title: "Edit",
      key: "Edit",
      render: (_, item) => (
        <Radio.Button onClick={() => Page(item)}>Voditel</Radio.Button>
      ),
      width: "10%",
    },
    {
      title: "Delete",
      key: "Delete",
      render: (_, item) => <Radio.Button>Delete</Radio.Button>,
      width: "10%",
    },
    {
      title: "information",
      key: "information",
      render: (_, item) => <Radio.Button>information</Radio.Button>,
      width: "10%",
    },
  ];

  function all1(id) {
    axios.get(`${url}/auth/users`).then((res) => {
      if (id == 0) {
        setData(res.data);
      } else {
        var a = res.data.filter((item) => item.position_id == id);
        setData(a);
      }
    });
  }

  useEffect(() => {
    axios.get(`${url}/auth/users`).then((res) => {
      setData(res.data);
    });
    axios.get(`${url}/api/zakaz`).then((res) => {
      setZakaz(res.data);
    });
    axios.get(`${url}/api/category`).then((res) => {
      setCatgeory(res.data);
    });
    axios.get(`${url}/api/mashina`).then((res) => {
      setMashina(res.data);
    });
    axios.get(`${url}/auth/users`).then((res) => {
      const Filter=res.data.filter(item=>item.position_id==2)
      setUsers(Filter);
    });
  }, []);

  function postZakaz() {
    var formdata = new FormData();
    formdata.append("status", document.querySelector("#statusZakaz").value);

    axios
      .put(`${url}/api/voditel_zakaz`, formdata)
      .then((res) => {
        alert("ishladi");
      })
      .catch((err) => {
        alert("Xato");
      });
  }
  const showModalClose = () => {
    setIsModalOpen(false);
  };
  const showModal = (item) => {
    setIsModalOpen(true);
  };

  return (
    <div>
      {page == 1 ? (
        <div>
          <Radio.Button
            onClick={() => {
              setPage(0);
            }}
            ghost
          >
            Exit
          </Radio.Button>
          {Voditel.length!==0?(""):(<Radio.Button onClick={()=>showModal()} ghost>Add</Radio.Button>)}

          <Row style={{marginTop:'10px'}} gutter={16}>
          {Voditel.map(item=>{
            return(
             <Col span={8}>
              <Card title="Доставка" bordered={false}>
                <p>{item.zakaz_id}</p>
                <p>{item.car_id}</p>
                <p>{item.operator_id}</p>
                <Radio.Button style={{marginTop:'10px'}}>Zakaz tugatish</Radio.Button>
                <Radio.Button style={{marginTop:'10px'}}>Edit</Radio.Button>
              </Card>
            </Col>  
            )
          })}
           
          </Row>
        </div>
      ) : (
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
                        <Radio.Button onClick={() => all1(0)} value="a1">
                          Все
                        </Radio.Button>
                        <Radio.Button onClick={() => all1(2)} value="a2">
                          Юридическое лицо
                        </Radio.Button>
                        <Radio.Button onClick={() => all1(1)} value="a3">
                          Физическое лицо
                        </Radio.Button>
                        <Radio.Button onClick={() => all1(3)} value="a4">
                          Менеджер
                        </Radio.Button>
                        <Radio.Button
                          onClick={() => {
                            document.querySelector("#modalMaybe").style =
                              "display:flex";
                          }}
                          value="b"
                        >
                          create
                        </Radio.Button>
                      </Radio.Group>
                    </div>
                  }
                >
                  <div className="table-responsive">
                    <Table
                      columns={columns}
                      dataSource={data}
                      pagination={{ pageSize: "7" }}
                      className="ant-border-space"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="tabled">
            <Row gutter={[24, 0]}>
              <Col xs="24" xl={24}>
                <Card
                  bordered={false}
                  className="criclebox tablespace mb-24"
                  title="All Zakaz"
                  // extra={
                  //   <div>
                  //     <Radio.Group onChange={onChange} defaultValue="a">
                  //       <Radio.Button onClick={() => all1(0)} value="a1">
                  //         Все
                  //       </Radio.Button>
                  //       <Radio.Button onClick={() => all1(2)} value="a2">
                  //         Юридическое лицо
                  //       </Radio.Button>
                  //       <Radio.Button onClick={() => all1(1)} value="a3">
                  //         Физическое лицо
                  //       </Radio.Button>
                  //       <Radio.Button onClick={() => all1(3)} value="a4">
                  //         Менеджер
                  //       </Radio.Button>
                  //       <Radio.Button
                  //         onClick={() => {
                  //           document.querySelector("#modalMaybe").style =
                  //             "display:flex";
                  //         }}
                  //         value="b"
                  //       >
                  //         create
                  //       </Radio.Button>
                  //     </Radio.Group>
                  //   </div>
                  // }
                >
                  <div className="table-responsive">
                    <Table
                      columns={zakaz1}
                      dataSource={zakaz}
                      pagination={{ pageSize: "7" }}
                      className="ant-border-space"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      )}

      <Modal
        title="Modal"
        visible={isModalOpen}
        onOk={() => postZakaz()}
        onCancel={() => showModalClose()}
      >
        <label>
          <p>Car</p>
          <select name="" id="CarVod" style={{width:"90%",height:'35px',border:'1px solid grey'}}>
          {mashina.map(item=>{
            return<option value={item.id}>{item.m3}</option>
          })}
          </select>
        </label>
        <label>
          <p>Operator</p>
          <select name="" style={{width:"90%",height:'35px',border:'1px solid grey'}} id="OperatorVod">
          {Users.map(item=>{
            return<option value={item.id}>{item.surname}</option>
          })}
          </select>
        </label>
      </Modal>
    </div>
  );
}
