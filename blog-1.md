# The significance of union and intersection types in Typescript.
Union and Intersection makes TypeScript more flexible and safe by allowing multiple type acceptance or combine type.

Union Type(|):
It allows to choose one type or another type. It is useful when the type is not fixed and can be more than one type.

example code:

type ActiveStatus = 'online' | 'offline' ;
const checkStatus = (status: ActiveStatus)=>{
    if(status === 'online'){
        return 'online';
    }else{
        return 'offline'
    }
}



Intersection Type (&):

Intersection types combine two or more type in into one. 

example code:
type Person = {name: string};
type Employee = {employeeId : number};
type EmployeeProfile = Person & Employee;
const employee : EmployeeProfile = {name: 'sakib', employeeId: 4389};


