import React, { memo } from 'react';
import HandelTitle from '../../Sheard/HandelTitle';

const News = memo(() => {
   
    return (
        <div className='text-white'>
          <HandelTitle handelTitle={'News'}></HandelTitle>
        </div>
    );
});

export default News;