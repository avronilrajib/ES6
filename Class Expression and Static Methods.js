let Person= class{
    constructor(name,add,phone){
        this.name=name;
        this.add=add;
        this.phone=phone;
    }
    static Say(){
        console.log(`Hello User! How Are You`);
    }
    displayInfo(){
        console.log(`Name: ${this.name}, Address: ${this.add}, Phone: ${this.phone}`);
    }
}
Person.Say();
