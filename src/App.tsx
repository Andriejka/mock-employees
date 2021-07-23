import React, { useEffect, useState, useCallback } from 'react';
import { getEmployees, updateEmployeeStatus, createEmployee } from './api/api'
import { EmployeeItem } from './types'
import { EmployeeStatus } from './components/EmployeeStatus'
import { EmployeesListStyled, CreateEmployeeStyled } from './AppStyled'

const App = () => {
  const [employees, setEmployees] = useState<EmployeeItem[]>([])
  const [employeeName, setEmployeeName] = useState<string>('')

  const handleGetEmployees = useCallback(async () => {
    try {
      const response: EmployeeItem[] = await getEmployees();
      setEmployees(response);
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleChangeEmployeeStatus = async (id: string, status: string) => {
    try {
      await updateEmployeeStatus(id, status);
      await handleGetEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmployeeCreation = async () => {
    try {
      if (employeeName.length > 0) {
        await createEmployee(employeeName);
        handleGetEmployees();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetEmployees();
  }, [handleGetEmployees])

  return (
    <div className="App">
      <CreateEmployeeStyled>
        <div>
          Add user
        </div>
        <input onChange={(e) => setEmployeeName(e.target.value)}/>
        <button onClick={() => handleEmployeeCreation()}>
          Create
        </button>
      </CreateEmployeeStyled>
      <EmployeesListStyled>
        {employees && employees.map((employee: EmployeeItem) => (
        <li key={employee.id}>
          <EmployeeStatus employee={employee} handleChangeEmployeeStatus={handleChangeEmployeeStatus}/>
        </li>
        ))}
      </EmployeesListStyled>
    </div>
  );
}

export default App;
