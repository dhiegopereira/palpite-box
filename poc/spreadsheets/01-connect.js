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
        logger.info(`spreadsheetId: ${doc.spreadsheetId}`)
        logger.info(`title: ${doc._rawProperties.title}`)
        logger.info(`email: ${doc.jwtClient.email}`)
    } catch(error){
        logger.error(error)
    }    
}
run()