import React from 'react';
import spinner from '../../assets/img/spinner.svg';

const Preloader = () => {
    return (
        <div className='spinner'><img src={spinner} alt=""/></div>
    );
};

export default Preloader;