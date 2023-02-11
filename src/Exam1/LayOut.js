import React from 'react'
import { Layout, Space } from 'antd'
import Login from './Login';
import './LayOut.scss';
import { useState, useEffect } from 'react';

const { Header, Footer, Sider, Content } = Layout

const Exam = () => {
  const [{width}, setWidth] = useState({width:window.innerWidth});
  useEffect(()=>{
    window.onresize = () => {
      setWidth({width: window.innerWidth})
    }
  },[])
  return (
    <div>
      <Layout>
       
        <Sider>
          <img width={width/3} height={window.innerHeight} src={require('./hd.png')}/>
        </Sider>
      
        <Layout>
          <Content className='content'>
            <Login/>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Exam
