import * as types from "./actionType";
import axios from "axios";


const getUsersCharity = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const UserDeleted = () => ({
    type: types.DELETE_USERS
})


 
const UserAdded = () => ({
    type: types.ADD_USERS
})   

const UserUpdated = () => ({
    type: types.UPDATE_USERS
})
 
const getUser = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload: user, 
})  


export const loadUsers = () => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((res) => {
            console.log("res", res);
            dispatch(getUsersCharity(res.data));
        })
        .catch((error) => console.log(error));
    }
};

export const deleteUsers = (id) => {
    return function (dispatch) {
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res) => {
            console.log("res", res);
            dispatch(UserDeleted());
           dispatch(loadUsers())  
        })
        .catch((error) => console.log(error));
    }
}

export const addUsers = (user) => {
    return function (dispatch) {
        axios
        .post(`${process.env.REACT_APP_API}`, user)
        .then((res) => {
            console.log("res", res);
            dispatch(UserAdded ());
           dispatch(loadUsers())  
        })
        .catch((error) => console.log(error));
    }
}



export const getSingleUsers = (id) => {
    return function (dispatch) {
        axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((res) => {
            console.log("res", res);
            dispatch(getUser(res.data));
        //    dispatch(loadUsers())  
        })
        .catch((error) => console.log(error));
    }
}

export const UpdateUser = (user,id) => {
    return function (dispatch) {
        axios
        .put(`${process.env.REACT_APP_API}/${id}`, user)
        .then((res) => {
            console.log("res", res);
            dispatch(UserUpdated(res.data));
        //    dispatch(loadUsers())  
        })
        .catch((error) => console.log(error));
    }
}