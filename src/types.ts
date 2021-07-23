export interface Employee {
    [key: string]: EmployeeItem
}

export interface EmployeeItem {
        id: string;
        name: string;
        status: string;
}

export interface EmployeeStatusProps {
    employee: EmployeeItem;
    handleChangeEmployeeStatus: (id: string, status: string) => void;
}