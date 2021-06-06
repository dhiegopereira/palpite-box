import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'
import { logger }  from '../../utils/logger' 

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCoupon = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {
    try {
      
      await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL,
        private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
      })
      await doc.loadInfo()    
      const sheet = doc.sheetsByIndex[1]   
      const sheetConfig = doc.sheetsByIndex[2]
      await sheetConfig.loadCells('A3:B3')

      const showCoupon = sheetConfig.getCell(2, 0)
      const messageOnline = sheetConfig.getCell(2, 1)

      let Cupom = ''
      let Promo = ''
      if (showCoupon.value === 'VERDADEIRO') {
        Cupom = genCoupon()
        Promo = messageOnline.value
      }

      const data = {
        Nome: req.body.Nome,
        Email: req.body.Email,
        Whatsapp: req.body.Whatsapp,
        Nota: parseInt(req.body.Nota),
        Palpite: req.body.Palpite,
        Cupom,
        Promo,
        'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss')
      }
      logger('post-save.js').info(`Inseridno dados: ${JSON.stringify(data)}`)
      await sheet.addRow(data)

      const send = {
        showCoupon: Cupom !== '',
        Coupon: Cupom, 
        Promotion: Promo
      }
      logger('post-save.js').info(`Send: ${JSON.stringify(send)}`)
      res.end(JSON.stringify(send))
      
    } catch (error) {
      logger('post-save.js').error(error)
      res.end(error)
    }
  }