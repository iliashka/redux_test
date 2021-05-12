import React from 'react';
import {useDispatch} from "react-redux";
import {CREATE_PERSON} from "../../redux/constants";

function CreatePage() {

    const [person, setPerson] = React.useState({
        firstName: '',
        lastName: '',
        age: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson(person => ({...person, [name]: value}))
    }


    const dispatch = useDispatch()

    const createUserHandler = () => {
        dispatch({type: CREATE_PERSON, payload: person})
    }

    return (
        <div className="row ">
            <div style={{margin: 'auto'}} className="col s12 m4 center-align">
                <div className="card blue lighten-2 center">
                    <div className="card-content white-text">
                        <span className="card-title">Create person</span>
                        <input onChange={handleChange} name={'firstName'} type='text' placeholder={'First Name'}/>
                        <input onChange={handleChange} name={'lastName'} type='text' placeholder={'Last Name'}/>
                        <input onChange={handleChange} name={'age'} type='number' placeholder={'Age'}/>
                    </div>
                    <div className="card-action">
                        <button type={'button'} onClick={createUserHandler} className={'btn yellow darken-3'}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage;