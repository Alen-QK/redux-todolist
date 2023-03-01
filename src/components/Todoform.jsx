import React, {useState} from "react";
import {FormControl, Container, TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";

const Todoform = () => {
    let [txt, setTxt] = useState('');
    let dispatch = useDispatch();
    let handleChange = (event) => {
        setTxt(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setTxt('');

        const action = {
            type: 'ADD_ITEM',
            payload: txt
        };

        dispatch(action);
    };

    return (
        <Container maxWidth={'sm'}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField label= {"Write a task to do"} required={true} onChange={handleChange} value={txt}/>
                    <Button variant={"contained"} color="primary" type={'submit'} style={{
                        marginTop: 10
                    }}>Submit</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default Todoform