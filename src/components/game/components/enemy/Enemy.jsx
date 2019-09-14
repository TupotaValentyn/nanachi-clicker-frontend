import React from 'react';

const Enemy = () => {

    const enemy = [];
    return (
        <div>
            {enemy.map((item, index) => {
                return (
                    <div key={index}>
                        {{item}}
                    </div>
                )
            })}
        </div>
    );
};

export default Enemy;
