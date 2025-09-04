const db = require('../Config/db.js'); 

 async function testGetAllEmps() {
    try {
        const query = `SELECT * FROM  employee`

        const [result] = await db.execute(query)

        return result
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

async function testGetEmpDetails(ID) {
    
    try {
        const query = `SELECT * FROM employee WHERE ID = ?`
        const userId = [ID]
        const [result] = await db.execute(query, userId)

        return result

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

async function testPostEmpDetails(ID, Name, PhoneNO, Email, City, Department) {

    try {
        const query = `INSERT INTO  employee (ID, Name, PhoneNO, Email, City, Department) VALUES(?,?,?,?,?,?)`
        const createEmpDetails = [ID ?? null, Name ?? null, PhoneNO ?? null, Email ?? null, City ?? null, Department ?? null]
        const [result] = await db.execute(query, createEmpDetails)

        return result 

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


async function testUpdateEmpDetails(data, id) {
    const userUpdateDetails = [data.username, data.email]
    const userId = [id.userid]
    try {
        const query = `UPDATE USERDETAILS SET USERNAME = ?, EMAIL = ? WHERE USERID = ${userId}` 
        
        const [result] = await db.execute(query, userUpdateDetails)

        return result

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

async function testDeleteEmpDetails(data) {
    const userId = [data.userid]
    try {
        const query = `DELETE FROM USERDETAILS WHERE USERID = ${userId}`

        const result = await db.execute(query)

        return result
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}
 

module.exports = {
  testGetAllEmps,
  testGetEmpDetails,
  testDeleteEmpDetails,
  testPostEmpDetails,
  testUpdateEmpDetails,
};