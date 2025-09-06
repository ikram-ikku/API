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
        const empId = [ID]
        const [result] = await db.execute(query, empId)

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
    const query = `INSERT INTO employee (ID, Name, PhoneNO, Email, City, Department)
    VALUES (?, ?, ?, ?, ?, ?)`;

    const empdetails = [ID, Name, PhoneNO, Email, City, Department];
    const [result] = await db.execute(query, empdetails);
    return result;
    } catch (error) {
    console.log(error.message);
    throw error;
    }
    }

async function testUpdateEmpDetails(ID, Name, PhoneNO, Email, City, Department) {
    try {
        const query = `
            UPDATE employee 
            SET Name = ?, PhoneNO = ?, Email = ?, City = ?, Department = ?
            WHERE ID = ?
        `;

        const empdetails = [Name, PhoneNO, Email, City, Department, ID];

        const [result] = await db.execute(query, empdetails);
        return result;
    } catch (error) {
        console.log(error.message);
        throw error; 
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