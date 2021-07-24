import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext'
import {Link} from 'react-router-dom'

function Register(props) {

    const{ registerUser,userAuth,setError,clearError} = useContext(AuthContext)
     useEffect(()=>{
         if(userAuth){
             props.history.push('/')
         }
     },[userAuth,props.history])

    const [user ,setUser] = useState({name:'',email:'',phone:'',city:'',state:'',country:'',password:''})
    const {name,email,phone,city,state,country,password,password2} = user

    const handleChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
        clearError()
    }

    const submit = e =>{
        e.preventDefault()
        registerUser({name,email,password,phone,city,state,country})
           clearError()
    }
    return (
        <div>
            <>
            <div class="container">
                <div class="row" id="login-main-div">
                    <h1>SignUp</h1>
                    <div class="col-sm-6">
                        {/* <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Your Shop Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Shop Name"/>
                        </div> */}
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" name="name" value={name} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" name="email" value={email} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" name="phone" value={phone} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">City</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" name="city" value={city} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">State</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" name="state" value={state} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Country</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Country" name="country" value={country} onChange={handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Pass-Key" name="password" value={password} onChange={handleChange}/>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto row">
                            <button type="submit" class="btn btn-outline-primary" onSubmit={submit}>Register</button>
                            <p className="forgot-password text-center">
                                Already registered <Link to='/'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </div>
    )
}

export default Register
