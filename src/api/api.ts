import { EMPLOYEE_STATUSES } from "../constants";
import { v4 as uuidv4 } from 'uuid';
import { EmployeeItem } from "../types";

const requestOptions = {
  headers: { 'Content-Type': 'application/json' },
};

export const getEmployees = async (): Promise<EmployeeItem[]> => {
  const result = await fetch(
    "http://localhost:3004/employees", 
    {
      ...requestOptions, 
      method: 'GET'
    }
  )
  const employees = await result.json()
  return employees
}

export const updateEmployeeStatus = async (id: string, status: string): Promise<EmployeeItem[]> => {
  const result = await fetch(
    `http://localhost:3004/employees/${id}`, 
    {
      ...requestOptions,
      method: 'PATCH',
      body: JSON.stringify({status: status})
    }
  )
  const employees = await result.json()
  return employees}

export const createEmployee = async (name: string): Promise<EmployeeItem[]> => {
  const result = await fetch(
    "http://localhost:3004/employees", 
    {
      ...requestOptions,
      method: 'POST',
      body: JSON.stringify(
        {
          name: name,
          status: EMPLOYEE_STATUSES.ADDED,
          id: uuidv4(),
        }
      )
    }
  )
  const employees = await result.json()
  return employees}

