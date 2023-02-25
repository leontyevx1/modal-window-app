import React, {useState} from 'react';
import './index.scss';
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <Button setOpen={setOpen}/>
            <Modal open={open} setOpen={setOpen}>
                <h3>React - это...</h3>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
            </Modal>
        </div>
    );
}

export default App;
