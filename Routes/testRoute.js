const express = require('express')
const testRoute = express.Router()
const {
  getAllEmps,
  getEmpDetails,
  deleteEmpDetails,
  postEmpDetails,
  updateEmpDetails
} = require('../Controllers/testController')

testRoute.get('/getallemp', getAllEmps)
testRoute.get('/getemp/:ID', getEmpDetails)
testRoute.post('/addemp/:ID', postEmpDetails)
testRoute.put('/updateemp/:ID', updateEmpDetails)
testRoute.delete('/deleteemp/:ID', deleteEmpDetails)



module.exports = testRoute
