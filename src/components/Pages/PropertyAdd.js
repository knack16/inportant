import React from 'react'

const PropertyAdd = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <h1>Add Your Property</h1>
                    <div class="col-sm-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                            <textarea class="form-control" placeholder="Address" id="exampleFormControlTextarea1" rows="1"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Rent Required</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Rent Required"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Date Of Payment</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Date Of Payment"/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-outline-primary">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyAdd
