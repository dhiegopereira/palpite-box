import log4js from 'log4js'

export const logger = (value) => {
    log4js.configure({
        appenders: { palpiteBox: { type: "file", filename: 'palpiteBox.log' } },
        categories: { default: { appenders: ['palpiteBox'], level: 'trace' } }
    })
    return log4js.getLogger(`[${value}]`)
 }
