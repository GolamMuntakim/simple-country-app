import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            contact us
        </div>
    );
};

export default Contact;