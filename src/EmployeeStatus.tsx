import { EmployeeStatusProps } from './types'
import { EmployeeStatusStyled } from './AppStyled'
import { EMPLOYEE_STATUSES } from './constants'

export const EmployeeStatus = ({employee, handleChangeEmployeeStatus}: EmployeeStatusProps) => {
    const statusesArray = Object.values(EMPLOYEE_STATUSES)
    return (
        <>
            <div className="employee-name">{employee.name}</div>
            <EmployeeStatusStyled>
                {statusesArray.map((status: string) => 
                <div 
                    key={status}
                    onClick={() => handleChangeEmployeeStatus(employee.id, status)} 
                    className={`${status === employee.status ? 'status-item active' : 'status-item'}`}
                >
                    <p>
                        {status}
                    </p>
                </div>)}
            </EmployeeStatusStyled>
        </>
    )
}
