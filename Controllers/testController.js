const db = require('../Config/db'); 

const  { testGetAllEmps,
  testGetEmpDetails,
  testDeleteEmpDetails,
  testPostEmpDetails,
  testUpdateEmpDetails,} = require('../Models/testModel')

async function getAllEmps(req, res) {
    try {
        const response = await testGetAllEmps()

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully...!",
            data: response
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error...!",
            error: error.message
        })
    }
}

async function getEmpDetails(req, res) {
    const { userid } = req.params;
    try {
        const response = await testGetEmpDetails(userid);

        res.status(200).json({
            success: true,
            message: "User fetched successfully...!",
            data: response
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error...!",
            error: error.message
        });
    }
}

async function postEmpDetails(req, res) {
    const { ID } = req.params;
    const { Name, PhoneNO, Email, City, Department } = req.body;
    try {
        await testPostEmpDetails(ID,Name, PhoneNO, Email, City, Department);

        res.status(200).json({
            success: true,
            message: "User created successfully...!",
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Internal post server error...!",
            error: error.message
        });
    }
}

async function updateEmpDetails(req, res) {
    const data = req.body
    const id = req.params
    try {
        await testUpdateEmpDetails(data, id)

        res.status(200).json({
            success: true,
            message: "User updated successfully...!"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error...!",
            error: error.message
        })
    }
}

async function deleteEmpDetails(req, res) {
    const data = req.params
    try {
        await testDeleteEmpDetails(data)

        res.status(200).json({
            success: true,
            message: "User deleted successfully...!"
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: "Internal server error...!",
            error: error.message
        })
    }
}


module.exports = {
  getAllEmps,
  getEmpDetails,
  deleteEmpDetails,
  postEmpDetails,
  updateEmpDetails,
};