import React, { useState } from 'react';

const UserForm = (props) => {
    const [personInfo, setPersonInfo] = useState ({ // save in an object
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handlePersonInfo = e => {
        setPersonInfo({...personInfo, [e.target.name] : e.target.value})
    }

    const createPersonInfo = e => {
        e.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit = {createPersonInfo}>
                <div>
                    {
                        personInfo.firstName.length < 2 && personInfo.firstName.length !==0
                        ? <p style={{"color":"red"}}>First Name must be at least 2 characters</p>
                        : null
                    }
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handlePersonInfo}></input>
                </div>
                <div>
                    {
                        personInfo.lastName.length < 2 && personInfo.lastName.length !==0
                        ? <p style={{"color":"red"}}>Last Name must be at least 2 characters</p>
                        : null
                    }
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handlePersonInfo}></input>
                </div>
                <div>
                    {
                        personInfo.email.length < 2 && personInfo.email.length !==0
                        ? <p style={{"color":"red"}}>Email must be at least 5 characters</p>
                        : null
                    }
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={handlePersonInfo}></input>
                </div>
                <div>
                    {
                        personInfo.password.length < 8 && personInfo.password.length !==0
                        ? <p style={{"color":"red"}}>Passwords must be at least 8 characters</p>
                        : null
                    }
                    {
                        personInfo.password !== personInfo.confirmPassword 
                        ? <p style={{"color":"red"}}>Passwords must match</p>
                        : null
                    }
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handlePersonInfo}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={handlePersonInfo}></input>
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {personInfo.firstName}</p>
                <p>Last Name: {personInfo.lastName}</p>
                <p>Email: {personInfo.email}</p>
                <p>Password: {personInfo.password}</p>
                <p>Confirm Password: {personInfo.confirmPassword}</p>
            </div>
        </div>
    )
}
export default UserForm
