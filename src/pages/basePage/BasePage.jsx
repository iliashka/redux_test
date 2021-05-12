import React from 'react';
import {useSelector} from "react-redux";

function BasePage() {
    const persons = useSelector(state => state.namesReducer.persons)
    console.log(persons)

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {persons && persons.map((elem, index) => {
                    return <tr>
                        <td>{index+1}</td>
                        <td>{elem.firstName}</td>
                        <td>{elem.lastName}</td>
                        <td>{elem.age}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default BasePage;