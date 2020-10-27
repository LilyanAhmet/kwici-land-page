import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
//import compnents
import Header from '../components/hoc/header'
import Promo from '../components/promo'
import Features from '../components/features'
import Workflow from '../components/workflow'
import How from '../components/how-it-works'
import Newsletter from '../components/newsletter'
import Contact from '../components/contactus'
import Footer from '../components/hoc/footer'
export default function Home() {
  return(
    <div>
      <Header/>
      <Promo/>
      <Features/>
      <Workflow/>
      <How/>
      <Newsletter/>
      <Contact />
      <Footer/>
    </div>
  )

}
