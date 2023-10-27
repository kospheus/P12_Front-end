import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './list.css';

function List() {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('employeeList');
        const employeeData = storedData ? JSON.parse(storedData) : [];
        setEmployee(employeeData);
    }, []);

    return (
        <section className='list-container'>
            <div className="card">
                <DataTable value={employee} paginator stripedRows rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="firstName" header="First Name" sortable style={{ width: '15%' }}></Column>
                    <Column field="lastName" header="Name" sortable style={{ width: '15%' }}></Column>
                    <Column field="startDate" header="Start Datey" sortable style={{ width: '10%' }}></Column>
                    <Column field="department" header="Department" sortable style={{ width: '10%' }}></Column>
                    <Column field="dateOfBirth" header="Date of Birth" sortable style={{ width: '10%' }}></Column>
                    <Column field="street" header="Street" sortable style={{ width: '15%' }}></Column>
                    <Column field="city" header="City" sortable style={{ width: '10%' }}></Column>
                    <Column field="state" header="State" sortable style={{ width: '10%' }}></Column>
                    <Column field="zipCode" header="Zip Code" sortable style={{ width: '5%' }}></Column>
                </DataTable>
            </div>
        </section>
    )
};

export default List;