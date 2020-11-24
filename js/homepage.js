window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollList)
    {
        innerHtml =`${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profile}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>`;
    document.querySelector('#display').innerHTML = innerHtml;
    }
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _id: new Date().getTime(),
            _name: "Jyoti Ranjan Mishra",
            _salary: "₹ 450000", 
            _gender: "Male",
            _department: ["Engineer","Finance"],
            _notes: "Jyoti Ranjan loves coffee",
            _profile: "../assets/profile-images/Ellipse -8.png",
            _startDate: "18/09/2018, 12:00:00 AM"
        },
        {
            _id: new Date().getTime() + 1,
            _name: "Supratim Dey", 
            _salary: "₹ 430000",
            _gender: "Male",
            _department: ["Engineer", "Sales"],
            _notes: "It's pleasure to work with Mr. Dey",
            _profile: "../assets/profile-images/Ellipse -2.png",
            _startDate: "15/08/2019, 12:00:00 AM"
        }
    ];
    return employeePayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}