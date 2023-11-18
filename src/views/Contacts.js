import React from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import ContactUs from '../components/contacts/ContactUs'
import Showcase from '../components/contacts/Showcase'
import Map from '../components/contacts/Map'
import { RegForm } from '../components/contacts/RegForm'
// import { RegistrationForm } from '../components/contacts/RegistrationForm'

const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>        
        <Showcase />
        <ContactUs />
        {/* <RegistrationForm /> */}
        <RegForm />
        <Map />
        
        
      </main>
      <Footer />
    </div>
  )
}

export default Contacts