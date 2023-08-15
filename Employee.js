
let employees;
(async function(){
    const data = await fetch("data.json");
    const res = await data.json();
    console.log(res);

    employees= res;
    let selectedEmployee = res[0];
    let employeedata = document.getElementById("Employee-data");
    let employeedisplay = document.getElementById("Display-data");

    const renderEmployees = ()=>{
        employeedata.innerHTML="";
        employees.forEach((emp)=>{
            const employee = document.createElement('span');
            employee.classList.add("Employee-data-individual");

            employee.setAttribute("id", emp.id);
            employee.addEventListener("click", handleClick);
            employee.innerHTML = `${emp.firstName} ${emp.id}  <i class="deleteIcon">X</i>`;
            employeedata.append(employee);

        })

    }

    renderEmployees();

})();


//handle selection
const handleClick = (e)=>{
    const id = e.target.id;
    let selectedEmp = employees[0]
    employees.forEach((emp, index)=>{
        if(emp.id==id){
            selectedEmp = emp;
        }

    })


    let employeedisplay = document.getElementById("Display-data");
    let emp_ind = document.createElement("div");
    emp_ind.classList.add("Individual-Data")
    emp_ind.setAttribute("id",selectedEmp.address);
    emp_ind.innerHTML = `<img src="${selectedEmp.imageUrl}"/> 
    <span>${selectedEmp.id}</span> 
    <span>${selectedEmp.firstName}</span> 
    <span>${selectedEmp.dob}</span> 
    <span>${selectedEmp.email}</span`;
    //emp_ind.innerHTML += `${selectedEmp.id} ${selectedEmp.firstName} ${selectedEmp.dob} ${selectedEmp.email}`;
    console.log(emp_ind);
    employeedisplay.append(emp_ind);



    


}

 