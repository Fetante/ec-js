import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/contacts/ContactUs'
import Showcase from '../components/contacts/Showcase'
import Map from '../components/contacts/Map'
import { RegistrationForm } from '../components/contacts/RegistrationForm'

const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>        
        <Showcase />
        <ContactUs />
        <RegistrationForm />
        <Map />
        
        
      </main>
      <Footer />
    </div>
  )
}

export default Contacts