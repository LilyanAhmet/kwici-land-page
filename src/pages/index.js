import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
//import compnents
import Header from '../components/hoc/header'
import Promo from '../components/promo'
import Features from '../components/features'
export default function Home() {
  return(
    <div>
      <Header/>
      <Promo/>
      <Features/>
    </div>
  )

}
