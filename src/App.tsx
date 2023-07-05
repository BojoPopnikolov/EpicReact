import React, { useState } from 'react';
import { Logo } from './components/logo';
import './App.css';
import Dialog from './components/Dialog';
import LoginForm from './components/LoginForm';

export enum ModalTypes {
  None = 'none',
  Login = 'login',
  Register = 'register',
}

function App() {
  const [openModal, setOpenModal] = useState(ModalTypes.None)
  
  function handleSubmit(formData: any) {

    console.log(formData)
  }

  return (
    <div className="w-max mx-auto h-full my-auto">
      <div className="flex justify-center">
        <Logo width='80' height='80' />
      </div>
      <h1 className="text-4xl font-semibold text-center">Bookshelf</h1>
      <div className="text-md mt-2 space-x-[6%] font-semibold text-center">
        <div className="float-left w-[47%]">
          <button 
            onClick={() => setOpenModal(ModalTypes.Login)}
            className="bg-blue-700 text-white py-1 rounded-sm w-full"
            disabled={openModal !== ModalTypes.None}
          >
            Login
          </button>
        </div>
        <div className="float-right w-[47%]">
          <button
            onClick={() => setOpenModal(ModalTypes.Register)}
            className="bg-gray-200 text-black py-1 rounded-sm w-full"
            disabled={openModal !== ModalTypes.None}
          >
            Register
          </button>
        </div>
      </div>
      <Dialog isOpen={openModal === ModalTypes.Login}>
        <button onClick={() => setOpenModal(ModalTypes.None)} className="float-right">
          <span className="fixed text-xl rotate-45">+</span>
        </button>

        <h1 className="text-4xl font-semibold text-center mb-8">Login</h1>

        <LoginForm buttonText="Login" onSubmit={handleSubmit} />
      </Dialog>
      <Dialog isOpen={openModal === ModalTypes.Register}>
        <button onClick={() => setOpenModal(ModalTypes.None)} className="float-right">
          <span className="fixed text-xl rotate-45">+</span>
        </button>

        <h1 className="text-4xl font-semibold text-center">Register</h1>

        <LoginForm buttonText="Register" onSubmit={handleSubmit} />
      </Dialog>
    </div>
  )
}

export default App;
