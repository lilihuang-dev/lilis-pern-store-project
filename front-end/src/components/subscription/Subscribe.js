import React from 'react';
import "./subscribe.css";
import Swal from 'sweetalert2';

function Subscribe() {

 const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Added to Subscribe List!',
        text: 'Subscribe successfully.',
        icon: 'success',
        timer: 2000,
        confirmButtonText: 'Cool'
      })
 }

  return (
    <div className='subscribe-section bg-with-black'>
        <div className='subscribe-container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className="subscribe-head">
                        <h2>Do you need more tips?</h2>
                        <p>Subscribe and get the latest tips.</p>
                        <form className='form-section'>
                            <input placeholder='Your Email...' name="email" type="email" />
                            <input name="subscribe" type="submit" value="Yes, I want!" onClick={handleSubmit}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;