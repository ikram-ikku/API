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
testRoute.get('/getemp/:userid', getEmpDetails)
testRoute.delete('/deleteemp/:userid', deleteEmpDetails)
testRoute.post('/addemp/:ID', postEmpDetails)
testRoute.put('/updateuser/:userid', updateEmpDetails)

module.exports = testRoute
