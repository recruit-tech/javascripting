const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
incorrect zipcode 123-4567-890
incorrect zipcode 123-4567890
`

const results = zipcodes.match(/[^\d-]\d{7}[^\d-]|[^\d-]\d{3}-\d{4}[^\d-]/g).map(zipcode => zipcode.trim())
console.log(results)
