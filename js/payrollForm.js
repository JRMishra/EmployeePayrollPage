let isUpdate = false;
let employeePayrollObj = {};

const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');    

window.addEventListener('DOMContentLoaded',(event) => {
    checkForUpdate();
});

output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });

const name = document.querySelector('#name');
const nameError = document.querySelector('#name-error');
name.addEventListener('input', function () {
if(name.value.length == 0)
{
    nameError.textContent = "";
    return;
}
try{
    (new PayrollModel()).name = name.value;
    nameError.textContent = "";
}
catch(e){
    nameError.textContent = e
}
});


function save(){
    try{    
        let employeepayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeepayrollData);
    }
    catch(e)
    {
        alert(e);
        return;
    }
}
let empPayroll = [];
function createEmployeePayroll()
{
    let employeepayrollData = new PayrollModel();
    let empPayroll = localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
    employeepayrollData.id = empPayroll.length;
    employeepayrollData.name = getInputValueById('#name');
    employeepayrollData.profile = getSelectedValues('[name = profile]').pop();
    employeepayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeepayrollData.department = getSelectedValues('[name=department]');
    employeepayrollData.salary = getInputValueById('#salary');
    //employeepayrollData.note = getInputValueById('notes').value;
    let date = getInputValueById('#year') + "-"+ getInputValueById('#month') + "/" + getInputValueById('#day');
    employeepayrollData.startDate = new Date(date);
    empPayroll.push(employeepayrollData)
    alert("Your entry is successfully done");
    alert(empPayroll);
    return employeepayrollData;
}

function createAndUpdateStorage(employeepayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined)
        employeePayrollList.push(employeepayrollData);
    else
        employeePayrollList = [employeepayrollData];
    
    alert("Added Object to the local Storage" + employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

function getSelectedValues(attribute)
{
    let allItems = document.querySelectorAll(attribute);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked)
        selItems.push(item.value);
    });
    return selItems;
}
function getInputValueById(id){
    let value = document.querySelector(id).value;
    return value;
}
function getElementValueById(id){
    let value = document.getElementById(id).value
    return value;
} 

function resetForm()
{
    document.querySelector("#name").value = "";
    unsetSelectedValues("[name=profile]");
    unsetSelectedValues("[name=gender]");
    unsetSelectedValues("[name=department]");
    document.querySelector(".salary-output").textContent=400000;
    setSelectedIndex('#day', 0);
    setSelectedIndex('#month', 0);
    setSelectedIndex('#year', 0);
    document.querySelector("#notes").value= "";
    document.querySelector(".date-error").textContent = "";
}

function unsetSelectedValues(propertyValue)
{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked = false;
    });
}

function setForm(employeePayrollObj)
{
    setValue('#name', employeePayrollObj._name);
    setSelectedValues('[name=profile]', employeePayrollObj._profile);
    setSelectedValues('[name=gender]', employeePayrollObj._gender);
    setCheckBox('[name=department]', employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    setTextValue('.salary-output', employeePayrollObj._salary);
    setValue('#notes', employeePayrollObj._notes);
    let date = stringifyDate(employeePayrollObj._startDate).split("/");
    setValue('#day', date[0])
    setValue('#month', date[1])
    setValue('#year', date[2].split(",")[0]);
}
function setSelectedValues(propertyValue, value)
{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        }
        else if (item.value == value)
            item.checked = true;
    });
}
function setCheckBox(property, values)
{
    let items = document.querySelectorAll(property);
    items.forEach(item => {
        if (values.includes(item.value)) {
            item.checked = true;
        }
    });
}

function setSelectedIndex(id, index)
{
    const element = document.querySelector(id);
    element.selectedIndex = index;
}
function setTextValue(id, value)
{
    const element = document.querySelector(id);
    element.textContent = value;
}

function setValue(id, value)
{
    const element = document.querySelector(id);
    element.value = value;
}

function checkForUpdate()
{
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
    if (!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    
    setForm(employeePayrollObj);
}