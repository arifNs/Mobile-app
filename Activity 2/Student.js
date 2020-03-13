class Students{
    constructor(name, matricNo, major) {
    this.name = name;
    this.matricNo = matricNo;
    this.major = major;
    }

    
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    

    get MatricNo() {
        return this.matricNo;
    }
    set MatricNo(matricNo) {
        this.matricNo = matricNo;
    }

    get Major() {
        return this.major;
    }
    set Major(major) {
        this.major = major;
    }

    display = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Matric No. : ${this.matricNo}`);
        console.log(`Majoring : ${this.major}`);
        process.exit()
        
        //will print 'undefined' unless include process.exit()
        //process.exit() can be used either here or on the import file (main.js)
    }
}

module.exports = {Students};

