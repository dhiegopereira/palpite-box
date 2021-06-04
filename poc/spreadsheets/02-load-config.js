const { GoogleSpreadsheet } = require('google-spreadsheet')
const { fromBase64 } = require('./base64')
require("dotenv").config()

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const run = async() => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)
        
        const ativarDesativarPromocaoCell = sheet.getCell(2, 0)
        console.log(ativarDesativarPromocaoCell.value)

        const textPromocaoCell = sheet.getCell(2, 1)
        console.log(textPromocaoCell.value)
    } catch(error){
        console.log(error)
    }  
}
run()