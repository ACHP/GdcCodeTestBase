const format = require('./index')

it('should work', ()=>{
  return expect(format('hello')).toBe('hello')
})
