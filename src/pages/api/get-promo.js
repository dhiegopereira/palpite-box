import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) => {
  try {  
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:C3')
    
    const showCoupon = sheet.getCell(2, 0)
    const messageOnline = sheet.getCell(2, 1)
    const messageOffline = sheet.getCell(2, 2)

    res.end(JSON.stringify({
      showCoupon: showCoupon.value === 'VERDADEIRO',
      messageOnline: messageOnline.value,
      messageOffline: messageOffline.value
    }))

  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      messageOnline: '',
      messageOffline: ''
    }))
  }
}