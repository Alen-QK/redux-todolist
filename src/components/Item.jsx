import React from "react";
import {Card, CardContent, Typography, Container, IconButton, Box} from "@mui/material";
import {Check, Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";

const Item = (props) => {
    let id = props.id;
    let title = props.title;
    let comped = props.comped;
    let dispatch = useDispatch();

    let checkStyle = comped ? {"textDecoration": "line-through"} : {"textDecoration": "none"};

    let checkClick = () => {
        const action = {
            type: 'CHANGE_COMPED',
            payload: id
        };

        dispatch(action);
    }

    let deleteClick = () => {
        const action = {
            type: 'DEL_ITEM',
            payload: id
        };

        dispatch(action);
    }

    return (
        <Box>
            <Container>
                <Card variant={'outlined'} style={{
                    marginTop: 35, background: 'lightgray'
                }}>
                    <CardContent>
                        <Typography variant={'h5'} component={'h2'} style={checkStyle}>
                            <IconButton onClick={checkClick}>
                                <Check style={{
                                    color: 'green'
                                }}/>
                            </IconButton>
                            {title}
                            <IconButton onClick={deleteClick} style={{
                                float: 'right'
                            }}>
                                <Delete style={{
                                    color: 'red'
                                }}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default Item