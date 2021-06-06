import { logger }  from './logger' 
export const fromBase64 = value => {
  const buff = Buffer.from(value, 'base64')
  logger('base64.js').info('Conversão realizada com sucesso')
  return buff.toString('ascii')  
}
