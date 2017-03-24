class Person{
	constructor(name){
		this.name = name;
	}
	dept(){
		console.log(this.name+" is engineer")
	}
}
class Employee extends Person{
	dept(){
		console.log(this.name+" is a developer");

	}
}
var emp = new Person("aditya");
emp.dept(); 