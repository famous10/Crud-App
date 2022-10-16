import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{ useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/actions';

const AddUser = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate('/');
      };
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
   const [ error, setError ] = useState("")

    const { name, email, phone, address } = state;

    const handleInputChange = (e) => {
        let{name, value} = e.target;
        setState({...state, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !phone){
            setError("please input all input Field")
        }else{
            dispatch(addUsers(state));
            navigate('/');
            setError("");
        }
    }

    return (
        <div>
            <Button
                styles={{ width: '100px', marginTop:"20px" }}
                variant="contained"
                size="medium"
                color="secondary"
                onClick={handleClick}
                >
                Go Back
            </Button>
            <h2>World Famous is here to add user</h2>
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            <Box
                style={{ marginTop: '100px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch', },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="outlined-basic"
                    label="Name"
                    name='name'
                    value={name}
                    type='text'
                    onChange={handleInputChange}  />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    name='email'
                    value={email}
                    type='email'
                    onChange={handleInputChange} />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Contact"
                    name='phone'
                    value={phone}
                    type='number'
                    onChange={handleInputChange} 
                    />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Address"
                    name='address'
                    value={address}
                    type='text' 
                    onChange={handleInputChange} 
                    />
                <br />
                <Button
                    styles={{ width: '100px' }}
                    variant="contained"
                    size="medium"
                    color="primary"
                    type="submit">
                    submit
                </Button>
            </Box>
        </div>
    )
}

export default AddUser