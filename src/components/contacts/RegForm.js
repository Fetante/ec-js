import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'
import Button from "../shared/Button"

export const RegForm = () => {
    const [errorMessage, setErrorMessage] = useState('')

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required("Måste ange namn")
                .matches(/^[a-zA-Z\s]+$/, "Endast bokstäver och mellanslag är tillåtna."),
            email: Yup.string()
                .required("Måste ange epost-adress.")
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Ogiltig epost-adress."),
            message: Yup.string()
                .required("Du måste fylla i ett meddelande")
                .min(4, "Fyll i fler tecken.")
        }),

        onSubmit: async (values, {resetForm} ) => {

            if (form.isValid) {
                const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })

                switch (result.status) {
                    case 200:
                        resetForm()
                        alert('Ditt meddelande skickades framgångsrikt!')
                        console.log(result.status)
                        break;
                    case 409: 
                        setErrorMessage('En användare med samma epost finns redan')
                        console.log(result.status)
                        break;
                    default:
                        setErrorMessage("Något gick fel")
                        console.log(result.status)
                        break;
                }
            }
        }
    })

    console.log(form.values)

    return (
        <div className="container">
            <div className="form-contact">
                <form onSubmit={form.handleSubmit} noValidate>
                    <h2>Leave us a message for any information</h2>
                    <p className={`form-message ${form.errors.general && form.touched.general ? 'error' : ''}`}>{errorMessage}</p>
                    <div className="input-group">
                        <label className={form.errors.name && form.touched.name ? 'error' : ''}> {form.errors.name && form.touched.name ? form.errors.name : 'Namn'}</label>
                        <input type="text" placeholder="Namn" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>
                    <div className="input-group">
                        <label className={form.errors.email && form.touched.email ? 'error' : ''}>{form.errors.email && form.touched.email ? form.errors.email : 'Email'}</label>
                        <input type="email" placeholder="Email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>
                    <div className="input-group">
                        <label className={form.errors.message && form.touched.message ? 'error' : ''}>{form.errors.message && form.touched.message ? form.errors.message : 'Meddelande'}</label>
                        <textarea placeholder="Your message" name="message" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} />
                    </div>

                    <Button className="btn-yellow btn-theme" title="Send Message" type="submit" />

                   
                </form>
            </div>
        </div>
    )
}
