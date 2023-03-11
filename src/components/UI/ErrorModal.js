import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'
import React from "react";
import ReactDOM from 'react-dom';

const Backdrop = props => {
    <div className={styles.backdrop} onClick={props.onClear}></div>
}

const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onClear}>Close</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClear} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClear={props.onClear} />, document.getElementById('overlay-root'))}
    </React.Fragment>
}

export default ErrorModal;