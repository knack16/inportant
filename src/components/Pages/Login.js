import React ,{useState,useContext, useEffect}from 'react'
import AuthContext from '../../context/authContext/authContext'
import {Link} from 'react-router-dom'

const Login = (props) => {
    const { loginUser,userAuth,errors,clearError} = useContext(AuthContext)
    useEffect(()=>{
        if(userAuth){
            props.history.push('/')
        }
        
    },[userAuth,props.history])
    
    
    const [user ,setUser] = useState({email:'',password:''})
    const {email,password} = user

    const handleChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
        clearError()
    }
    
    const submit = e =>{
        e.preventDefault()
        loginUser({email,password})
        clearError()
    }
    return (
        <>
            <div class="container">
                <div class="row" id="login-main-div">
                    <h1>Login</h1>
                    <div class="col-sm-6">
                        {/* <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Your Shop Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Shop Name"/>
                        </div> */}
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">UserName</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="email" name="email" value={email} onChange={ handleChange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Pass-Key</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" name="password" value={password} onChange={handleChange}/>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button type="submit" class="btn btn-outline-primary" onSubmit={submit}>Next</button>
                        </div>
                        <div className="question">
                            { errors !== null && <button className="danger">
                                {errors.msg ? errors.msg:errors.error[0].msg}    
                                <span onClick={()=> clearError()}>X</span></button>}
                                <p> Don't  have an account?{""}<Link to='/register'> Sign Up </Link></p>
                            </div>
                        </div>

                    <div class="col-sm-6">
                        <div class="mb-3">
                            <p class="text-md-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Odio pellentesque diam volutpat commodo sed egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.
                            </p>
                        </div>

                        <p class="text-md-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Odio pellentesque diam volutpat commodo sed egestas. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
