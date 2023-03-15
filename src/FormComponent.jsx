// import { useState, useEffect } from 'react';

const FormComponent = ( props ) => {
    const {name, setName, age, setAge, status, setStatus} = props;
    //onsubmit
        return (
            <div>
                {/* <div className="form-container"> */}
                <div className="form-container">
                    <label htmlFor="name">
                        Name:
                        <br />
                        <input type="text" id="name" required pattern="[A-Z a-z ]+" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor="age">
                        Age:
                        <br />
                        <input type="number" id="age" required value={age} onChange={(e) => setAge(e.target.value)} />
                    </label>
                    <label htmlFor="status">
                        Status:
                        <br />
                        <select id="status" required value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </label>
                    <br /><br />
                </div>
            </div>
        )
    }

    export default FormComponent