class PayrollModel {
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}([ ][A-Za-z]{2,})?$');
        if (nameRegex.test(name))
            this._name = name;
        else {
            throw "Name is Incorrect";
        }
    }
    get profile() {
        return this._profile;
    }
    set profile(profile) {
        this._profile = profile;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate.toLocaleString(undefined, {
                timeZone: 'Asia/Kolkata'
            });
        else {
            throw "Invalid Start Date";
        }
    }
    get note() {
        return this._notes;
    }
    set note(note) {
        this._note = notes;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    toString() {
        return "Id = " + this._id + "\nName = " + this._name + "\nSalary = " + this._salary + "\nGender = " + this._gender + " \nStartdate = " + this._startDate + "\nDepartments = " + this._department + "\nProfile = " + this._profile + "\nNote = " + this._note;
    }
} 