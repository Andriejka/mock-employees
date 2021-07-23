import styled from 'styled-components'

export const EmployeeStatusStyled = styled.div`
    display: flex;
    text-transform: capitalize;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.8rem;
    flex-wrap: wrap;
    border: lightgray 1px solid;
    padding-right: 45px;
    .status-item {
        width: 100px;
        height: 60px;
        position: relative;
        background-color: white;
        margin-right: 30px;
        p {
            text-align: center;
            margin: 1.3rem;
        }
    }
    .active {
        background-color: #0056d9;
        color: white;
    }
    .active:before {
        content: "";
        position: absolute;
        right: -30px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 30px solid #0056d9;
        border-top: 30px solid transparent;
        border-bottom: 30px solid transparent;
    }
`

export const EmployeesListStyled = styled.div`
    list-style: none;
    li {
        display: flex;
        flex-wrap: wrap;
        .employee-name {
            flex-basis: 100%;
        }
        > div {
            margin: 25px 25px 0;
            cursor: pointer;
        }
    }
`

export const CreateEmployeeStyled = styled.div`
    margin: 25px 25px 0;
    input { 
        margin: 10px 10px 0 0;
    }
`