import React from 'react';
import { Card, Col, Row } from 'antd';
import "./stylee.css";

const App: React.FC = () => (
  <Row gutter={18}>
    <Col span={6}>  
    <div className="imgNameFour">
      <Card  bordered={false} >
      <div className="tickCircle"></div>
      <center><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" className='imgProductFour'/>
      <h4>name</h4></center>
      </Card>
      </div>
    </Col>  
    <Col span={6}>  
    <div className="imgNameFour">
      <Card  bordered={false} >
      <div className="tickCircle"></div>
      <center><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" className='imgProductFour'/>
      <h4>name</h4></center>
      </Card>
      </div>
    </Col>   
    <Col span={6}>  
    <div className="imgNameFour">
      <Card  bordered={false} >
      <div className="tickCircle"></div>
      <center><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" className='imgProductFour'/>
      <h4>name</h4></center>
      </Card>
      </div>
    </Col>  
    <Col span={6}>  
    <div className="imgNameFour">
      <Card  bordered={false} >
      <div className="tickCircle"></div>
      <center><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg" alt="" className='imgProductFour'/>
      <h4>name</h4></center>
      </Card>
      </div>
    </Col>  
  </Row>
);

export default App;