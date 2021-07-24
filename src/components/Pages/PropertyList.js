import React from 'react'
import {Link} from 'react-router-dom'

const PropertyList = () => {
    return (
        <>
            <div class="container">
                <h1>Your Properties</h1>
                <div class="row row-cols-3" style={{margin:"auto"}}>
                    <div class="col card" style={{width: "18rem", margin:"10px 10px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Shop 1</h5>
                            <p class="card-text">Owner Name</p>
                            <small class="">Last By 4 Days</small>
                        </div>
                    </div>
                    <div class="col card" style={{width: "18rem", margin:"10px 10px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Shop 2</h5>
                            <p class="card-text">Owner Name</p>
                            <small class="">Last By 3 Days</small>
                        </div>
                    </div>
                    <div class="col card" style={{width: "18rem", margin:"10px 10px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Shop 3</h5>
                            <p class="card-text">Owner Name</p>
                            <small class="">Last By 2 Days</small>
                        </div>
                    </div>
                    <div class="col card" style={{width: "18rem", margin:"10px 10px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Shop 2</h5>
                            <p class="card-text">Owner Name</p>
                            <small class="">Last By 1 Day</small>
                        </div>
                    </div>
                    <div class="col card" style={{width: "18rem", margin:"10px 10px", textAlign:'center'}}>
                        <Link to="/propertyadd" class="fas fa-plus fa-2x"></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyList
