import React from 'react';

const MyOrder = (props) => {
    const { ContactNo, email, firstName, lastName, address, serviceNo, myDescription, area } = props.myOrder

    return (
        <div className="m-4">
            <div className="container">
                <div className=" card border border-1 border-success">
                    <div className="card-body">
                        <h3 className="text-success">Tour Place:{area}</h3>
                        <span>OrderNo: <span className="card-title text-center text-danger">ServiceNo:{serviceNo}</span></span>
                        <h4 className="card-title text-center text-success">Name:{firstName} {lastName}</h4>
                        <h5 className="card-title text-center text-warning">email:{email}</h5>
                        <h5> Contact No: <span className="card-title text-center text-info">{ContactNo}</span></h5>
                        <h5 className="card-title text-center text-danger">Adress: {address}</h5>
                        <h6>Comment:{myDescription}</h6>
                        <button className="m-2">Pending</button>
                        <button>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;