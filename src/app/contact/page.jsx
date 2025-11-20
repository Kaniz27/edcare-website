import React from 'react';
import ContactHero from './maincontact/ContactHero'
import ContactDetails from './maincontact/ContactDetails';

const page = () => {
    return (
        <div>
           <ContactHero></ContactHero>
           <ContactDetails></ContactDetails>
        </div>
    );
};

export default page;