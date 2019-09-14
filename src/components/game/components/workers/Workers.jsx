import React from 'react';

const Workers = () => {
    const workers = ['in', 'in', 'in', 'in', 'in', 'in', 'in', 'in', 'in', 'in'];

    return (
        <div className='workers'>
            {
                workers.map((item, index) => (
                    <div key={index} className='worker'>
                        {item}
                    </div>
                ))
            }
        </div>
    )
};


export default Workers;
