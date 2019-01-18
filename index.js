const fs = require('fs')

// the download link is https://www.angio.net/pi/digits/pi1000000.txt
const pi = fs.readFileSync('pi-1000000.txt', { encoding: 'utf8' })

console.log(`## Position des nombres entiers dans PI\n`)

console.log(`Nombre | Position |`)
console.log(`--- | ---`)

// recherche de nombres entiers
for (let i = 0; i < 10000; i++) {
    let search = `${i}`
    let position = pi.indexOf(search)
    console.log(`${search} | ${position}`)
}

console.log(`## Recherche de texte dans PI\n`)

let mots = ['alessio', 'arnaud', 'uma']
for (let mot of mots) {
    console.log(`\n### Recherche du texte ${mot}\n`)
    let search = ''
    let firstCharCode = 'a'.charCodeAt(0)
    for (let lettre in mot) {
        let encodedChar = mot.charCodeAt(lettre) - firstCharCode
        console.log(`- ${mot.charAt(lettre)} encoded as ${encodedChar}`)
        search += encodedChar
    }
    console.log(`\nstring ${search} is at position ${pi.indexOf(search)}\n`)
}