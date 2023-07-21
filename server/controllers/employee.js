const getAllEmployees = async (req, res) => {
    res.send("Get all employees")
}

const getEmployee = async (req, res) => {
    res.send("Get Employee")
}

const createEmployee = async (req, res) => {
    res.json(req.employee)
}

const updateEmployee = async (req, res) => {
    res.send("Update Employee")
}

const deleteEmployee = async (req, res) => {
    res.send("Delete Employee")
}

export { getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee }