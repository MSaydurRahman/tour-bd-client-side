import React from 'react';
import "./Savingtrip.css"
const Savingtrip = () => {
    return (
        <div className="container">
            <div>
                <div className=" saving-trip">
                    <div><i className="fa fa-gift gift"></i></div>
                    <div>
                        <h2>Members are Saving with Trip Coins!</h2>
                        <p>Join us and start earning Trip Coins now You can use trip Coins to pay for bookings in full</p>
                    </div>
                </div>
                <div className="percentage">
                    <div>
                        <i className="fa fa-file-text"></i>
                    </div>
                    <div>
                        <h2> Want to save up to 50% when you travel</h2>
                        <p>Yes, i'd like to save up to 50% on travel! Please send me exclusive deals and  updates</p>
                        <div>
                            <input type="text" placeholder="Email...." />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Savingtrip;