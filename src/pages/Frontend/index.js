import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from "../../component/Header/Header"
import Home from "./Home/Home"

export default function index() {
  return (
    <>
<Header/>
<main>
    <Routes>
      <Route index element={<Home/>} />
    </Routes>
</main>
    </>
  )
}
