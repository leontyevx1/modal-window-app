import React from 'react';
import '../index.scss'

const Button = ({setOpen}) => {
    return (
        <div>
            <button onClick={() => {
                setOpen(true)
            }} className="open-modal-btn">✨ Открыть окно
            </button>
        </div>
    );
};

export default Button;