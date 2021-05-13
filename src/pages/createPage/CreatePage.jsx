import React from 'react';
import {useDispatch} from "react-redux";
import {CREATE_PERSON, REGISTER_REQUEST} from "../../redux/constants";

function CreatePage() {

    const [person, setPerson] = React.useState({
        firstName: '',
        email: '',
        password: '',
        role: 'user'
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson(person => ({...person, [name]: value}))
    }


    const dispatch = useDispatch()
    function registerActionCreator () {
       return {type: REGISTER_REQUEST, payload: person}
    }

    const createUserHandler = () => {
        dispatch(registerActionCreator())
    }

    return (
        <div className="row ">
            <div style={{margin: 'auto'}} className="col s12 m4 center-align">
                <div className="card blue lighten-2 center">
                    <div className="card-content white-text">
                        <span className="card-title">Create person</span>
                        <input onChange={handleChange} name={'firstName'} type='text' placeholder={'First Name'}/>
                        <input onChange={handleChange} name={'email'} type='email' placeholder={'email'}/>
                        <input onChange={handleChange} name={'password'} type='password' placeholder={'password'}/>
                    </div>
                    <div className="card-action">
                        <button type={'button'} onClick={createUserHandler} className={'btn yellow darken-3'}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;