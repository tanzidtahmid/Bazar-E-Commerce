import React from 'react';

const RecipientInfoson = ({ recipientInfoson }) => {
    const handleDone = () =>{
        
    }
    console.log(recipientInfoson)
    return (
        <div className='shadow rounded py-4'>
            <div className='d-flex justify-content-around'>
                <h5>Coustmer Name: {recipientInfoson.recipientName}</h5>
                <select class="form-select px-4 py-2" name='quantity' aria-label="Default select example" >

                    <option>{recipientInfoson.status}</option>
                    <option value="onGoing">On Going</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className='d-flex justify-content-around pt-4'>
                <h6>Phone No: {recipientInfoson.phoneNo}</h6>
                <h6>Address: {recipientInfoson.address}</h6>
                {/* <h6>Area: {recipientInfoson.area}</h6> */}
            </div>
            <div className='d-flex justify-content-around pt-4'>
                <h6>Division: {recipientInfoson.division}</h6>
                <h6>City: {recipientInfoson.city}</h6>
                <h6>Area: {recipientInfoson.area}</h6>
            </div>
            <div className='d-flex justify-content-end pt-4 pr-5'>
                <button className="btn btn-primary" onClick={()=>handleDone()}>Done</button>
            </div>
        </div>
    );
};

export default RecipientInfoson;