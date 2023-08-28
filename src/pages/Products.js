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
  var [category, setCategory] = useState(props.category)
  var [data, setData] = useState([])
  const [mark, SetMark] = useState([])
  const [homiy, SetHomiy] = useState([])
  const [selectMarka, SetSelectMarka] = useState(null)
  const [selectcategory, SetSelectCategory] = useState(null)

  const [selecthomiy, SetSelectHomiy] = useState(null)
  const [deleteid, setDeleteId] = useState()
  const [isModalOpen12, setIsModalOpen12] = useState(false)
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  function deteteData(params) {
    setDeleteId(params)
    showModal1()
  }
  const handleOk1 = () => {
    setIsModalOpen1(false);
    axios.delete(`${url}/api/product/${deleteid}`).then(res => {
      message.success('deleted');
      axios.get(`${url}/api/marka`).then(res => {
        SetMark(res.data)
        axios.get(`${url}/api/homeiy`).then(res1 => {
          SetHomiy(res1.data)
          axios.get(`${url}/api/product`).then(res2 => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < res.data.length; j++) {
                if (res.data[j].id === res2.data[i].marka) {
                  res2.data[i].marka_name = res.data[j].title
                }
                for (let j = 0; j < res1.data.length; j++) {
                  if (res1.data[j].id === res2.data[i].homiy_id) {
                    res2.data[i].homiy = res1.data[j].title
                    res2.data[i].image = res1.data[j].image
                  }
                }
                for (let j = 0; j < category.length; j++) {
                  if (category[j].id == res2.data[i].category) {
                    res2.data[i].category = category[j].title
                  }
                }



              }
            }
            console.log(res2.data, "sdsd");
            setData(res2.data)
          })


        })
      })
    }).catch(err => {
      message.error("don't delete")
    })
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel12 = () => {
    setIsModalOpen12(false);
  };

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
    var data = new FormData()
    data.append("description", document.querySelector("#description").value)
    data.append("s3_sena", document.querySelector("#s3_sena").value)
    data.append("s4_sena", document.querySelector("#s4_sena").value)
    data.append("marka", selectMarka)
    data.append("category", selectcategory)
    data.append("hydrophobic_additive_sena", document.querySelector("#hydrophobic_additive_sena").value)
    data.append("fiber_fiber", document.querySelector("#Fiber_fiber").value)
    data.append("homiy_id", selecthomiy)
    axios.post(`${url}/api/product`, data).then(res => {
      message.success("Create new Product")
      setIsModalOpen(false)
      axios.get(`${url}/api/marka`).then(res => {
        SetMark(res.data)
        axios.get(`${url}/api/homeiy`).then(res1 => {
          SetHomiy(res1.data)
          axios.get(`${url}/api/product`).then(res2 => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < res.data.length; j++) {
                if (res.data[j].id === res2.data[i].marka) {
                  res2.data[i].marka_name = res.data[j].title
                }
                for (let j = 0; j < res1.data.length; j++) {
                  if (res1.data[j].id === res2.data[i].homiy_id) {
                    res2.data[i].homiy = res1.data[j].title
                    res2.data[i].image = res1.data[j].image
                  }
                }
                for (let j = 0; j < category.length; j++) {
                  if (category[j].id == res2.data[i].category) {
                    res2.data[i].category = category[j].title
                  }
                }



              }
            }
            console.log(res2.data, "sdsd");
            setData(res2.data)
          })


        })
      })
    }).catch(err => {
      message.error("don't create")
      setIsModalOpen(false)
    })
  }
  function PutProduct() {
    var data = new FormData()
    data.append("description", document.querySelector("#description12").value)
    data.append("s3_sena", document.querySelector("#s3_sena12").value)
    data.append("s4_sena", document.querySelector("#s4_sena12").value)
    data.append("marka", selectMarka)
    data.append("category", selectcategory)
    data.append("hydrophobic_additive_sena", document.querySelector("#hydrophobic_additive_sena12").value)
    data.append("fiber_fiber", document.querySelector("#Fiber_fiber12").value)
    data.append("homiy_id", selecthomiy)
    axios.put(`${url}/api/product/${deleteid}`, data).then(res => {
      message.success("update")
      axios.get(`${url}/api/marka`).then(res => {
        SetMark(res.data)
        axios.get(`${url}/api/homeiy`).then(res1 => {
          SetHomiy(res1.data)
          axios.get(`${url}/api/product`).then(res2 => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < res.data.length; j++) {
                if (res.data[j].id === res2.data[i].marka) {
                  res2.data[i].marka_name = res.data[j].title
                }
                for (let j = 0; j < res1.data.length; j++) {
                  if (res1.data[j].id === res2.data[i].homiy_id) {
                    res2.data[i].homiy = res1.data[j].title
                    res2.data[i].image = res1.data[j].image
                  }
                }
                for (let j = 0; j < category.length; j++) {
                  if (category[j].id == res2.data[i].category) {
                    res2.data[i].category = category[j].title
                  }
                }



              }
            }
            console.log(res2.data, "sdsd");
            setData(res2.data)
          })


        })
      })
      setIsModalOpen12(false)
    }).catch(err => {
      message.error("Error don't update")
      setIsModalOpen12(false)
    })
  }
  function openPutData(putdata) {
    setIsModalOpen12(true)
    setTimeout(() => {
      document.querySelector("#description12").value = putdata.description
      document.querySelector("#s3_sena12").value = putdata.s3_sena
      document.querySelector("#s4_sena12").value = putdata.s4_sena
      document.querySelector("#marka12").value = putdata.marka
      document.querySelector("#category12").value = putdata.category_name
      document.querySelector("#hydrophobic_additive_sena12").value = putdata.hydrophobic_additive_sena
      document.querySelector("#Fiber_fiber12").value = putdata.fiber_fiber
      document.querySelector("#homiy_id12").value = putdata.homiy_id
    }, 100);
    setDeleteId(putdata.id)
  }
  useEffect(() => {
    setCategory(props.category)
  })
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  useEffect(() => {
    axios.get(`${url}/api/marka`).then(res => {
      SetMark(res.data)
      axios.get(`${url}/api/homeiy`).then(res1 => {
        SetHomiy(res1.data)
        axios.get(`${url}/api/product`).then(res2 => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (res.data[j].id === res2.data[i].marka) {
                res2.data[i].marka_name = res.data[j].title
              }
              for (let j = 0; j < res1.data.length; j++) {
                if (res1.data[j].id === res2.data[i].homiy_id) {
                  res2.data[i].homiy = res1.data[j].title
                  res2.data[i].image = res1.data[j].image
                }
              }
              for (let j = 0; j < category.length; j++) {
                if (category[j].id == res2.data[i].category) {
                  res2.data[i].category = category[j].title
                }
              }



            }
          }
          console.log(res2.data, "sdsd");
          setData(res2.data)
        })


      })
    })
  }, [])
  function filterData1() {
    axios.get(`${url}/api/marka`).then(res => {
      SetMark(res.data)
      axios.get(`${url}/api/homeiy`).then(res1 => {
        SetHomiy(res1.data)
        axios.get(`${url}/api/product`).then(res2 => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (res.data[j].id === res2.data[i].marka) {
                res2.data[i].marka_name = res.data[j].title
              }
              for (let j = 0; j < res1.data.length; j++) {
                if (res1.data[j].id === res2.data[i].homiy_id) {
                  res2.data[i].homiy = res1.data[j].title
                  res2.data[i].image = res1.data[j].image
                }
              }
              for (let j = 0; j < category.length; j++) {
                if (category[j].id == res2.data[i].category) {
                  res2.data[i].category_name = category[j].title
                }
              }



            }
          }
          console.log(res2.data, "sdsd");
          setData(res2.data)
        })


      })
    })
  }
  const filterData = (id) => {
    axios.get(`${url}/api/marka`).then(res => {
      SetMark(res.data)
      axios.get(`${url}/api/homeiy`).then(res1 => {
        SetHomiy(res1.data)
        axios.get(`${url}/api/product`).then(res2 => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (res.data[j].id === res2.data[i].marka) {
                res2.data[i].marka_name = res.data[j].title
              }
              for (let j = 0; j < res1.data.length; j++) {
                if (res1.data[j].id === res2.data[i].homiy_id) {
                  res2.data[i].homiy = res1.data[j].title
                  res2.data[i].image = res1.data[j].image
                }
              }
              for (let j = 0; j < category.length; j++) {
                if (category[j].id == res2.data[i].category) {
                  res2.data[i].category_name = category[j].title
                }
              }
            }
          }
          var a = res2.data.filter(item => item.category === id)
          setData(a)
        })
      })
    })
  }

  function handleSearch(params) {
    axios.get(`${url}/api/marka`).then(res => {
      SetMark(res.data)
      axios.get(`${url}/api/homeiy`).then(res1 => {
        SetHomiy(res1.data)
        axios.get(`${url}/api/product`).then(res2 => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < res.data.length; j++) {
              if (res.data[j].id === res2.data[i].marka) {
                res2.data[i].marka_name = res.data[j].title
              }
              for (let j = 0; j < res1.data.length; j++) {
                if (res1.data[j].id === res2.data[i].homiy_id) {
                  res2.data[i].homiy = res1.data[j].title
                  res2.data[i].image = res1.data[j].image
                }
              }
              for (let j = 0; j < category.length; j++) {
                if (category[j].id == res2.data[i].category) {
                  res2.data[i].category_name = category[j].title
                }
              }
            }
          }
          var a = res2.data.filter(item => (item.category_name.includes(params) || item.description.includes(params) || item.marka_name.includes(params)))
          setData(a)
        })
      })
    })
  }


  const columns = [
    {
      title: "Производитель",
      dataIndex: "image",
      render: (_, item) => <Image style={{ height: "30px" }} alt="no image" src={item.image} />,
      width: "5%",
    },
    {
      title: "Марка",
      dataIndex: "marka_name",
      key: "marka_name",
    },
    {
      title: "Category",
      dataIndex: "category_name",
      key: "category_name",
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
      render: (_, item) => <Button onClick={() => { deteteData(item.id) }} danger>Delete</Button>,
    },
    {
      title: "Edit",
      render: (_, item) => <Button onClick={() => { openPutData(item) }} type="dashed">Edit</Button>,
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
                <div style={{ paddingBottom: '10px', paddingTop: '10px' }}>

                  <Radio.Group onChange={() => onChange} defaultValue="a">
                    <Radio.Button onClick={() => filterData1()} value="ss">All</Radio.Button>
                    {category.map(item => {
                      return <Radio.Button onClick={() => filterData(item.id)} value={item.id}>{item.title}</Radio.Button>
                    })}
                    <Button style={{ marginLeft: '20px' }} onClick={showModal} type="primary" >Create Product
                    </Button>
                  </Radio.Group>
                  <Input onKeyUp={(e) => { handleSearch(e.target.value) }} style={{ marginBottom: '10px', marginTop: '10px' }} type="text" />
                </div>
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
        <Modal title="Create Product" open={isModalOpen} onOk={() => PostProduct()} onCancel={handleCancel}>
          <Input placeholder="цена ц3" id="s3_sena" type="number" showCount maxLength={30} onChange={onChange} />
          <br />
          <br />
          <Input placeholder="цена ц4" id="s4_sena" type="number" showCount maxLength={30} onChange={onChange} />
          <br />
          <br />
          <TextArea placeholder="description" id="description" onChange={onChange} />
          <br />
          <br />
          <label htmlFor="">Marka</label>
          <Select id="marka" onChange={(value) => {
            SetSelectMarka(value)
          }} style={{ width: '100%' }}>
            {mark.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
          <br />
          <br />
          <label htmlFor="">Category</label>
          <Select id="category" onChange={(value) => {
            SetSelectCategory(value)
          }} style={{ width: '100%' }}>
            {category.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
          <br />
          <br />
          <Input id="hydrophobic_additive_sena" placeholder="Гидрофобная добавка цена" type="number" showCount maxLength={30} allowClear onChange={onChange} />
          <br />
          <br />
          <Input placeholder="Фиброволокно цена" id="Fiber_fiber" type="number" showCount maxLength={30} onChange={onChange} />
          <br />
          <br />


          <label htmlFor="">Homiy</label>
          <Select onChange={(value) => {
            SetSelectHomiy(value)
          }} id="homiy_id" style={{ width: '100%' }}>
            {homiy.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
        </Modal>
        <Modal title="Осторожность" visible={isModalOpen1} onOk={() => handleOk1} onCancel={handleCancel1}>
          <p>Вы уверены, что хотите удалить эту информацию? Это может привести к плохим последствиям.</p>
        </Modal>
        <Modal title="Create Product" open={isModalOpen12} onOk={() => PutProduct()} onCancel={handleCancel12}>
          <Input placeholder="цена ц3" id="s3_sena12" type="number" showCount maxLength={30} />
          <br />
          <br />
          <Input placeholder="цена ц4" id="s4_sena12" type="number" showCount maxLength={30} />
          <br />
          <br />
          <TextArea placeholder="description" id="description12" />
          <br />
          <br />
          <label htmlFor="">Marka</label>
          <Select id="marka12" onChange={(value) => {
            SetSelectMarka(value)
          }} style={{ width: '100%' }}>
            {mark.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
          <br />
          <br />
          <label htmlFor="">Category</label>
          <Select id="category12" onChange={(value) => {
            SetSelectCategory(value)
          }} style={{ width: '100%' }}>
            {category.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
          <br />
          <br />
          <Input id="hydrophobic_additive_sena12" placeholder="Гидрофобная добавка цена" type="number" showCount maxLength={30} />
          <br />
          <br />
          <Input placeholder="Фиброволокно цена" id="Fiber_fiber12" type="number" showCount maxLength={30} />
          <br />
          <br />


          <label htmlFor="">Homiy</label>
          <Select onChange={(value) => {
            SetSelectHomiy(value)
          }} id="homiy_id12" style={{ width: '100%' }}>
            {homiy.map(item => {
              return <Select.Option value={item.id}>{item.title}</Select.Option>
            })}
          </Select>
        </Modal>

      </div>
    </>
  );
}

export default Tables;
