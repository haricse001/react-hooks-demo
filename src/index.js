import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    const handleButtonClick = () => {
        alert(`Input value: ${inputRef.current.value}`);
    };

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Type something..." />
            <button onClick={handleButtonClick}>Show Value</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
