class Person{
   constructor(name,Address,phone){
    this.name=name;
    this.Address=Address;
    this.phone=phone;
   }
   displayInfo(){
    console.log(`name: ${this.name}, Address: ${this.Address}, Phone: ${this.phone}`);
   }
}
class Student extends Person{
    constructor(name,Address,phone,id,dept,batch){
        super(name,Address,phone);
        this.id=id;
        this.dept=dept;
        this.batch=batch;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`Id: ${this.id}, Dept: ${this.dept}, Batch: ${this.batch}`);
    }
}

let Rajib= new Student("Rajib Dash","Sylhet","01823913194","221-115-075","CSE",56);
let Avronil= new Student("Avronil Dash","Sylhet","01791830152","221-115-080","CSE",56);
Rajib.displayInfo();
Avronil.displayInfo();
