const palindrome = require('./palindrome');

PalindromWords =["Racecar","Noon","Mom","Madam","Level","Kayak","Civic"]

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Racecar")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Madam")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Mom")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Civic")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Noon")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Level")).toBe(true)
})

test("Test Palendrom with Truth Value", ()=>{
    expect(palindrome("Kayak")).toBe(true)
})

test("Test Palendrom with Falsy Value", ()=>{
    expect(palindrome("Amele")).toBe(false)
})

test("Test Palendrom with Falsy Value", ()=>{
    expect(palindrome("ABcd")).toBe(false)
})
test("Test Palendrom with Falsy Value", ()=>{
    expect(palindrome("Infosys")).toBe(false)
})


