import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddNewUser.module.css'

const AddNewUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorTitle, setErrorTitle] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const addNewUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorTitle('Invalid input!');
            setErrorMessage('Please complete at least one input!');
            return;
        }

        if (+enteredAge < 1) {
            setErrorTitle('Invalid input!');
            setErrorMessage('Invalid age entered!');
            return;
        }
        props.addNewUser({ name: enteredUsername, age: enteredAge, id: Math.random() })
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const clearError = () => {
        setErrorTitle('');
        setErrorMessage('');
    }

    return (
        <Wrapper>
            {errorTitle.length > 0 && <ErrorModal title={errorTitle} message={errorMessage } onClear={clearError}/>}
            <Card className={styles.input}>
                <form onSubmit={addNewUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} ref={ageInputRef}></input>
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddNewUser;