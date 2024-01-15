import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ModalWrapper from '../components/ModalWrapper'
import SignUpForm from '../components/forms/SignUpForm'
import SignInForm from '../components/forms/SignInForm'
const Layout = () => {

  const [modalVisible, setModalVisible] = useState(false);

  function toggleModalVisible(type){
    setModalVisible(type)
  }

  return (
    <div className='flex flex-col min-h-screen'>
        <Header toggleModalVisible={toggleModalVisible}/>
        <Hero />
        <Outlet />
        <Footer />
        <ModalWrapper modalVisible={modalVisible} toggleModalVisible={toggleModalVisible}>
          {
            modalVisible === 'signin' ? <SignInForm /> : <SignUpForm />
          }
        </ModalWrapper>
    </div>
  )
}

export default Layout