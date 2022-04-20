import React from 'react';
import { Helmet } from 'react-helmet-async';

const HandelTitle = ({ handelTitle }) => {
    return (
        <div>
            <Helmet>
                <title>Travel guru -{handelTitle}</title>
            </Helmet>
        </div>
    );
};

export default HandelTitle;