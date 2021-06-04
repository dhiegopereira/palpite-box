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
        const sheet = doc.sheetsByIndex[1]
        //Nome	Email	Whatsapp	Cumpo	Promo
        await sheet.addRow({
            Nome: 'Diego Pereira',
            Email: 'dhiego_ti@hotmail.com',
            Whatsapp: '88996781666',
            Cumpo: '000111',
            Promo: 'asdqwe123'
        })
    } catch(error){
        console.log(error)
    } 
}
run()