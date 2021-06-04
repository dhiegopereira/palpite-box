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
        console.log(doc)
    } catch(error){
        console.log(error)
    }    
}
run()