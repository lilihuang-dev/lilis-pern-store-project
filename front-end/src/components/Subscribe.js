import React from 'react';
import "./subscribe.css"

function Subscribe() {
  return (
    <div className='subscribe-section bg-with-black'>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <div className="subscribe-head">
                        <h2>Do you need more tips?</h2>
                        <p>Subcribe and get the latest tips.</p>
                        <form className='form-section'>
                            <input placeholder='Your Email...' name="email" type="email" handleSubscribeInput = ""/>
                            <input name="subscribe" type="submit" value="Yes, I want!" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe;