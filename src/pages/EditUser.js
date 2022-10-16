import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import{ useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector  } from 'react-redux';
import { UpdateUser, getSingleUsers } from '../redux/actions';

const EditUser = () => {
    let {id} = useParams();
    const {user} = useSelector((state) => state.data)
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

   useEffect(() => {
    dispatch(getSingleUsers(id))
   },[])

   useEffect(() =>{
    if(user) {
        setState({...user})
    }
   }, [user])

    const handleInputChange = (e) => {
         let{name, value} = e.target;
        setState({...state, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !phone){
            setError("please input all input Field")
        }else{
            dispatch(UpdateUser(state, id));
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
            <h2>World Famous is here to Edit  user</h2>
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
                    value={email || ""}
                    type='email'
                    onChange={handleInputChange} />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Contact"
                    name='phone'
                    value={phone || ""}
                    type='number'
                    onChange={handleInputChange} 
                    />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Address"
                    name='address'
                    value={address || ""}
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
                    Update
                </Button>
            </Box>
        </div>
    )
}

export default EditUser