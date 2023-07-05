import React, { useState } from 'react';
import { Logo } from './components/logo';
import './App.css';
import Dialog from './components/Dialog';

function App() {
  const [showModal, setShowModal] = useState(false)

  const open = () => setShowModal(true)
  const close = () => setShowModal(false)

  return (
    <div className="absolute z-0 mx-auto w-fit top-[50%]">
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={open}>Login</button>
      <button onClick={close}>Register</button>
      <Dialog isOpen={showModal}>
        <label>Name</label>
        <input type='text' />
        <label>Password</label>
        <input type="password" />

        <button onClick={close}>
          <span>x</span>
        </button>
      </Dialog>
    </div>
  )
}

export default App;
