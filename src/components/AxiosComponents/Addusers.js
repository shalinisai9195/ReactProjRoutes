import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup';
import axios from "axios";

function Addusers() {

    // let params = useParams() // general declaration
    let { id } = useParams() //obj destructer direct use
    // console.log(id)

    let [initialvalchg, setInitialval] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        DOB: ""

    })

    let [isValid, setIsnewvalid] = useState(false)




    useEffect(() => {

        if (id) {
            axios.get(`https://63947dba4df9248eada3b8c9.mockapi.io/users/${id}`)
                .then((res) => {
                    setInitialval(res?.data)
                    setIsnewvalid(true)
                })
                .catch((err) => { console.log(err) })

        }
        else {
            setIsnewvalid(true)
        }

    }, [id])

    let navigate = useNavigate()

    let UserSchema = yup.object().shape({
        FirstName: yup.string().min(2, "TooShhot!").max(15, "Too Long!").required("required"),
        LastName: yup.string().min(2, "TooShhot!").max(15, "Too Long!").required("required"),
        Email: yup.string().email("Invalid email").required("required"),
        Mobile: yup.string().matches(/^\d{10}$/, "Invalid mobile number").required("required"),
        DOB: yup.string()
    })
    // while click onsubmit the Else part fuctionality has been executed - to add new recordes/values into API 
    let saveData = async (value) => {
        try {
            let res = await axios.post('https://63947dba4df9248eada3b8c9.mockapi.io/users', value)
            console.log(res)
            if (res.status === 201) {
                navigate('/alluser')
            }

        } catch (error) {
            console.log(error)
        }

    }
    // while we click submit the Edited value has been save in the selected ID.
    let UpdateData = async (value) => {
        try {
            let res = await axios.put(`https://63947dba4df9248eada3b8c9.mockapi.io/users/${id}`, value)
            console.log(res)
            if (res.status === 200) {
                navigate('/alluser')
            }

        } catch (error) {
            console.log(error)
        }

    }

    return < div className="container-fluid">
        <h1>Addusers</h1>
        {isValid ? <Formik
            initialValues={initialvalchg}

            validationSchema={UserSchema}

            onSubmit={value => {
                if (id) {
                    UpdateData(value)
                } else {
                    saveData(value)
                    //console.log(value) //value return object - value is the default attribute of onsumit
                }
            }}>
            {({ errors, touched }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="FirstName">First Name</label>
                        <Field name="FirstName" className="form-control" type="text" placeholder="First Name" />
                        {errors.FirstName && touched.FirstName ? (
                            <div style={{ color: "red" }}>{errors.FirstName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="LastName">LastName</label>
                        <Field name="LastName" className="form-control" type="text" placeholder="LastName" />
                        {errors.LastName && touched.LastName ? (
                            <div style={{ color: "red" }}>{errors.LastName}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <Field name="Email" className="form-control" type="Email" placeholder="Email" />
                        {errors.Email && touched.Email ? (
                            <div style={{ color: "red" }}>{errors.Email}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Mobile">Mobile</label>
                        <Field name="Mobile" className="form-control" type="text" placeholder="Mobile" />
                        {errors.Mobile && touched.Mobile ? (
                            <div style={{ color: "red" }}>{errors.Mobile}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="DOB">DOB</label>
                        <Field name="DOB" className="form-control" type="date" placeholder="DOB" />
                        {errors.DOB && touched.DOB ? (
                            <div style={{ color: "red" }}>{errors.DOB}</div>
                        ) : null}
                    </div>

                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
            )}

        </Formik> : <div style={{ "textAlign": "center" }}>Loading..</div>}
    </div>
}
export default Addusers;