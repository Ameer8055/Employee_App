const express = require('express');
const router = express.Router();


let employees = [
    {id:1,
     Name:"Ameer Shah",
     Designation:"Developer",
     Location: "Kollam",
     Salary : 50000
    },
    {id:2,
     Name:"Kiran",
     Designation:"Developer",
     Location: "Kollam",
     Salary : 51000
    },
    { id:3,
     Name :"Amal",
      Designation :"Developer",
     Location: "Kollam",
      Salary : 52000
     }
];



router.get('/add',(req,res)=>{
    res.render('AddEmployess');
})

router.get('/', (req, res) => {
    res.render('employees', { employees });
});



router.get('/update/:id',(req,res)=>
{
    const employeeId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === employeeId);
    res.render('editEmployee',{employee});
})

router.post('/edit/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    const { Name, Designation, Location, Salary } = req.body;
    const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    
    if (employeeIndex !== -1) {
        employees[employeeIndex] = { id: employeeId, Name, Designation, Location, Salary };
    }
    
    res.redirect('/employees');
});




router.post('/add', (req, res) => {
    const newEmployee = {
        id: employees.length + 1,
        Name: req.body.name,
        Designation: req.body.Designation,
        Location : req.body.Location,
        Salary : req.body.Salary
    };
    employees.push(newEmployee);
    res.redirect('/employees');
});

router.delete('/:id', (req, res) => {
    
    const employeeId = parseInt(req.params.id) ;
    console.log('Received DELETE request for ID:', employeeId); // Debugging line

    const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
    console.log('Employee Index:', employeeIndex); // Debugging line

    if (employeeIndex !== -1) {
        employees.splice(employeeIndex, 1);
        res.redirect('/employees');
    } else {
        res.status(404).send('Employee not found');
    }
});












module.exports =router;