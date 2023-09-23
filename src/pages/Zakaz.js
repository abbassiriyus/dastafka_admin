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
import { AiOutlineStar } from "react-icons/ai";

export default function Zakaz() {
  var [data, setData] = useState([]);
  var [zakaz, setZakaz] = useState([]);
  var [table, setInfo] = useState([]);
  var [information, setInformation] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  // var [zakazId, setZakazId] = useState();
  var [Catgeory, setCatgeory] = useState([]);
  var [page, setPage] = useState(0);
  var [VoditelId, setVoditelId] = useState([]);
  var [Voditel, setVoditel] = useState([]);
  var [mashina, setMashina] = useState([]);
  var [Users, setUsers] = useState([]);
  var [Users1, setUsers1] = useState([]);
  var [Zakaz_id, setZakaz_id] = useState([]);
  var [ZakazUser, setZakazUser] = useState([]);
  var [PositionU, setPositionU] = useState([]);

  function abbas(params) {
    setInformation(params);
    document.querySelector("#modalInformation").style = "display:flex";
  }

  function Page(item) {
    setVoditelId(item);
    axios.get(`${url}/api/voditel_zakaz`).then((res) => {
      const Filter = res.data.filter((item1) => item1.zakaz_id == item.id);
      setVoditel(Filter);
      // res.data.map(item1=>{

      // })
    });
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
      title: "information",
      key: "information",
      render: (_, item) => <Radio.Button onClick={()=>UserPage(item)}>information</Radio.Button>,
      width: "10%",
    },
  ];

  function UserPage(item){
    setPositionU(item)
  if(item.position_id==2){
    axios.get(`${url}/api/voditel_zakaz`).then((res) => {
      const Filter = res.data.filter((item1) => item1.operator_id == item.id);
      setVoditel(Filter);
    });
  }else{
    if (item.position_id==3) {
      axios.get(`${url}/api/voditel_zakaz`).then((res) => {
        const Filter = res.data.filter((item1) => item1.car_id == item.id);
        setVoditel(Filter);
      });
    }else{
      if (item.position_id==1) {
        axios.get(`${url}/api/zakaz`).then((res) => {
          const FIlter=res.data.filter(item1=>item1.user_id==item.id)
          setZakazUser(FIlter);
          alert("zor")
        });
      }
    }
  }
  setPage(2)
  }

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
  ];
  const zakazUser = [
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
    axios.get(`${url}/auth/users`).then((res) => {
      const Filter = res.data.filter((item) => item.position_id == 2);
      setUsers(Filter);
    });
    axios.get(`${url}/auth/users`).then((res) => {
      const Filter = res.data.filter((item) => item.position_id == 3);
      setMashina(Filter);
      setUsers1(res.data);
    });
  }, []);

  function postZakaz() {
    var formdata = new FormData();
    formdata.append("car_id", document.querySelector("#CarVod").value);
    formdata.append(
      "operator_id",
      document.querySelector("#OperatorVod").value
    );
    formdata.append("zakaz_id", VoditelId.id);

    axios
      .post(`${url}/api/voditel_zakaz`, formdata)
      .then((res) => {
        alert("Добавлен");
        setIsModalOpen(false)
        axios.get(`${url}/api/voditel_zakaz`).then((res) => {
          const Filter = res.data.filter(
            (item1) => item1.zakaz_id == VoditelId.id
          );
          setVoditel(Filter);
        });
      })
      .catch((err) => {
        alert("Не присоединился");
      });
  }
  function putZakaz() {
    var formdata = new FormData();
    formdata.append("car_id", document.querySelector("#CarVod1").value);
    formdata.append("finishing", document.querySelector("#OperatorFini").value);
    
    axios
      .put(`${url}/api/voditel_zakaz/${Zakaz_id}`, formdata)
      .then((res) => {
        alert("Измененный");
        setIsModalOpen1(false)
        axios.get(`${url}/api/voditel_zakaz`).then((res) => {
          const Filter = res.data.filter(
            (item1) => item1.zakaz_id == VoditelId.id
          );
          setVoditel(Filter);
        });
      })
      .catch((err) => {
        alert("Не изменилось");
      });
  }
  const showModalClose = () => {
    setIsModalOpen(false);
  };
  const showModal = (item) => {
    setIsModalOpen(true);
  };
  const showModalClose1 = () => {
    setIsModalOpen1(false);
  };
  const showModal1 = (item) => {
    setZakaz_id(item.id)
    setIsModalOpen1(true);
    setTimeout(() => {
      document.querySelector("#OperatorFini").value=item.finishing
      document.querySelector("#CarVod1").value=item.car_id
    }, 1000);
  };

  function ZakazTugadi() {
    axios.get(`${url}/voditel_zakaz/finishing`).then((res) => {});
  }

  return (
    <div>
      {page==2?(
        <div>
        <div>
        <Radio.Button
          onClick={() => {
            setPage(0);
          }}
          ghost
        >
          Exit
        </Radio.Button>

        <Row style={{ marginTop: "10px" }} gutter={16}>
          {Voditel.map((item) => {
            return (
              <Col span={8}>
                <Card title={item.finishing?"Заказ выполнен":"Доставка"} bordered={false}>
                  {item.mark == 4 ? (
                    <p>
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </p>
                  ) : item.mark == 5 ? (
                    <p>
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </p>
                  ) : (
                    ""
                  )}
                  <p style={{ display: "flex", gap: "0.5px" }}>
                    Driver:
                    {Users1.map((item1) => {
                      return (
                        <p>{item1.id == item.car_id ? item1.surname : ""}</p>
                      );
                    })}
                  </p>
                  <div style={{ display: "flex", gap: "1px" }}>
                    Operator:
                    {Users.map((item1) => {
                      return (
                        <p>
                          {item.operator_id == item1.id ? item1.surname : ""}
                        </p>
                      );
                    })}
                  </div>
                  {item.finishing ? (
                    <Radio.Button style={{ marginTop: "10px" }}>
                      Заказ выполнен
                    </Radio.Button>
                  ) : (
                    <Radio.Button
                      // onClick={() => ZakazTugadi(item)}
                      style={{ marginTop: "10px" }}
                    >
                      Завершение заказа
                    </Radio.Button>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
        </div>
        {PositionU.position_id==1?(
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
                  columns={zakazUser}
                  dataSource={ZakazUser}
                  pagination={{ pageSize: "7" }}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
        </div>):("")}
        
        </div>
      ):(
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
            {Voditel.length !== 0 ? (
              ""
            ) : (
              <Radio.Button onClick={() => showModal()} ghost>
                Add
              </Radio.Button>
            )}
  
            <Row style={{ marginTop: "10px" }} gutter={16}>
              {Voditel.map((item) => {
                return (
                  <Col span={8}>
                    <Card title={item.finishing?"Заказ выполнен":"Доставка"} bordered={false}>
                      {item.mark == 4 ? (
                        <p>
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </p>
                      ) : item.mark == 5 ? (
                        <p>
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </p>
                      ) : (
                        ""
                      )}
                      <p style={{ display: "flex", gap: "0.5px" }}>
                        Driver:
                        {Users1.map((item1) => {
                          return (
                            <p>{item1.id == item.car_id ? item1.surname : ""}</p>
                          );
                        })}
                      </p>
                      <div style={{ display: "flex", gap: "1px" }}>
                        Operator:
                        {Users.map((item1) => {
                          return (
                            <p>
                              {item.operator_id == item1.id ? item1.surname : ""}
                            </p>
                          );
                        })}
                      </div>
                      {item.finishing ? (
                        <Radio.Button style={{ marginTop: "10px" }}>
                          Заказ выполнен
                        </Radio.Button>
                      ) : (
                        <Radio.Button
                          onClick={() => ZakazTugadi(item)}
                          style={{ marginTop: "10px" }}
                        >
                          Завершение заказа
                        </Radio.Button>
                      )}
                      <Radio.Button onClick={()=>showModal1(item)} style={{ marginTop: "10px" }}>
                        Edit
                      </Radio.Button>
                    </Card>
                  </Col>
                );
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
                          <Radio.Button onClick={() => all1(1)} value="a2">
                            Пользователи
                          </Radio.Button>
                          <Radio.Button onClick={() => all1(3)} value="a3">
                            Водитель
                          </Radio.Button>
                          <Radio.Button onClick={() => all1(2)} value="a4">
                            Менеджер
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
          <select
            name=""
            id="CarVod"
            style={{ width: "90%", height: "35px", border: "1px solid grey" }}
          >
            {mashina.map((item) => {
              return <option value={item.id}>{item.surname}</option>;
            })}
          </select>
        </label>
        <label>
          <p>Operator</p>
          <select
            name=""
            style={{ width: "90%", height: "35px", border: "1px solid grey" }}
            id="OperatorVod"
          >
            {Users.map((item) => {
              return <option value={item.id}>{item.surname}</option>;
            })}
          </select>
        </label>
      </Modal>
      <Modal
      title="Modal"
      visible={isModalOpen1}
      onOk={() => putZakaz()}
      onCancel={() => showModalClose1()}
    >
      <label>
        <p>Car</p>
        <select
          name=""
          id="CarVod1"
          style={{ width: "90%", height: "35px", border: "1px solid grey" }}
        >
          {mashina.map((item) => {
            return <option value={item.id}>{item.surname}</option>;
          })}
        </select>
      </label>
      <label>
        <p>Finishing</p>
        <select
          name=""
          style={{ width: "90%", height: "35px", border: "1px solid grey" }}
          id="OperatorFini"
        >
          <option value={false}>Не доставлен</option>
          <option value={true}>Доставленный</option>
        </select>
      </label>
    </Modal>
    </div>
  );
}
