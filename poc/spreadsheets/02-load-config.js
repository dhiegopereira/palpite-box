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

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
        logger.info(`Title: ${sheet.title}`)
        
        const ativarDesativar = sheet.getCell(2, 0)
        logger.info(`Ativar/desativar promoção: ${ativarDesativar.value}`)

        const textPromocao = sheet.getCell(2, 1)
        logger.info(`Texto da promoção: ${textPromocao.value}`)
    } catch(error){
        logger.error(error)
    }  
}
run()