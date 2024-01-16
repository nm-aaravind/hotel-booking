import React, { useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ModalWrapper from '../components/ModalWrapper'
import SignUpForm from '../components/forms/SignUpForm'
import SignInForm from '../components/forms/SignInForm'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer hideProgressBar={true} draggable autoClose={4000}  transition={Flip} toastStyle={{ fontFamily: 'Raleway', fontSize:'1.4rem'}}/>
    </div>
  )
}

export default Layout