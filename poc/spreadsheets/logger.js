const log4js = require("log4js")

const logger = fileName => {    
    log4js.configure({
        appenders: { spreadsheets: { type: "file", filename: 'spreadsheets.log' } },
        categories: { default: { appenders: ['spreadsheets'], level: 'trace' } }
    })
    return log4js.getLogger(`[${fileName.slice(fileName.length + 1)}]`)
}

module.exports = {
    logger
}
