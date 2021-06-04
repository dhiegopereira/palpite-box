import { fromBase64 } from './base64'

describe('Base64 to ascii conversion', () => {
    it('Converting', () => {
        const value = fromBase64('teste')
        expect(value).toBe('5k-')
    })
})
