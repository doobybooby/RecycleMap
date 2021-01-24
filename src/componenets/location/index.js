import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1611493751342!5m2!1sen!2sus" 
                

                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="myframe"
            ></iframe>
            

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
