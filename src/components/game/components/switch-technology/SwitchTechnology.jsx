import React, {useState} from 'react';

const SwitchTechnology = () => {

    const [state, setState] = useState({active: false});

    return (
        <div className='switch'>
            <button className={`switch-technology ${!state.active ? 'switch-active' : ''}`}
                    onClick={() => {
                        setState({active: !state})
                    }}>F
            </button>
            <button className={`switch-technology ${state.active ? 'switch-active' : ''}`}
                    onClick={() => {
                        setState({active: state})
                    }}>B
            </button>
        </div>
    )

};

export default SwitchTechnology;
