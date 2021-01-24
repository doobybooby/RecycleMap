import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.923378135969!2d-73.92836318373725!3d40.82964663834496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f42c5ae76971%3A0x4940c3d9559a1e08!2sYankee%20Stadium!5e0!3m2!1sen!2sus!4v1610917541803!5m2!1sen!2sus"
                

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
