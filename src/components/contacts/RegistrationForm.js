import React, { useState } from 'react'

export const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const handleSubmit =  async (e) => {
        e.preventDefault()
        setFormMessage('')
        

        const user = { name, email, message }
        const json = JSON.stringify(user)

        // Skicka datan till apiet
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch(result.status) {
            case 201:                
                setFormMessage('Ditt meddelande har framgångsrikt skickats!')
                clearForm()
                break
            case 400:                
                setFormMessage('Fel! Kontrollera inputen!')
                
                break;
            default:
                setFormMessage('Error! Ditt meddelande har inte skickats iväg!')
        }        
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')            
    }


  return (
    <div className="container">
        <div className="form-contact">
            
            <form onSubmit={ handleSubmit }noValidate>                
                <h2>Leave us a message for any information</h2>
                <p className="form-message">{formMessage}</p>
                <div className="input-group">                
                    <input type="text" placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">               
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">                
                    <textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div> 
                <button className="btn-yellow btn-theme" type='submit'>
                Send Message<i className="fa-regular fa-arrow-up-right"></i>
                </button>
            </form>
        </div>  
    </div>  
  )
}
