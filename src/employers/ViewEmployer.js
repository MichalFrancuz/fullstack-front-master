import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

export default function ViewEmployer() {
    const [employer, setEmployer] = useState({
        profession: '',
        name: '',
        surname: '',
        grossSalary: '',
        dateOfStartContract: ''
    });

    const { id } = useParams();  // Extract employer ID from the URL

    // Load employer details when the component is mounted
    useEffect(() => {
        loadEmployer();
    }, []);

    const loadEmployer = async () => {
        try {
            // Make an API call to fetch employer details by ID
            const result = await axios.get(`http://localhost:8005/employers/${id}`);
            setEmployer(result.data);  // Update the state with fetched data
        } catch (error) {
            console.error("There was an error fetching the employer data!", error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Employer Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of employer id: {id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Profession:</b> {employer.profession}
                                </li>
                                <li className='list-group-item'>
                                    <b>Name:</b> {employer.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Surname:</b> {employer.surname}
                                </li>
                                <li className='list-group-item'>
                                    <b>Gross Salary:</b> {employer.grossSalary}
                                </li>
                                <li className='list-group-item'>
                                    <b>Date of Start Contract:</b> {employer.dateOfStartContract}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

