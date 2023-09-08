//JavaScript Objects
//By using Literal
Employee={
    Name:"divya",
    Age:29,
    Salary:900000000000
}
console.log(Employee.Age);

//By using new keyword
var Employee=new Object();
Employee.vehicle="Rolls Royce";
Employee.bankBalance="1000000000";
console.log(`vehicle Name : ${Employee.vehicle} , Bank Balance : ${Employee.bankBalance}`);

//By Using Constructor
function employee(Name,age,Salary){
    this.Name=Name;
    this.age=age;
    this.Salary=Salary;
}
employee1=new employee("agathiya",23,"900000");
console.log(employee1);
employee2=new employee("Nithya",24,890000);
console.log(employee2);
