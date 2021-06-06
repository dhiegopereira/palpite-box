const { GoogleSpreadsheet } = require('google-spreadsheet')
const { fromBase64 } = require('./base64')
const logger  = require('./logger').logger(__filename)
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
        //logger.info('Add row: ' JSON.parse())
        const result = await sheet.addRow({
            Nome: 'Diego Pereira',
            Email: 'dhiego_ti@hotmail.com',
            Whatsapp: '88996781666',
            Nota: 5,
            Palpite: 'Perfeito',
            Cupom: '000111',
            Promo: 'asdqwe123',
            "Data Preenchimento": '01/01/1999',
            "Data de consumo": '01/01/1999'
        })
        logger.info(`Adicionando valores: ${JSON.stringify(result._rawData)}`)
    } catch(error){
        console.log(error)
    } 
}
run()