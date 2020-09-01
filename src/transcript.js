
const code = {

    // duży alfabet
    'Α': 'A',
    'Β': 'B',
    'Γ': 'G',
    'Δ': 'D',
    'Ε': 'E',
    'Ζ': 'Dz',
    'Η': 'E',
    'Θ': 'Th',
    'Ι': 'I',
    'Κ': 'K',
    'Λ': 'L',
    'Μ': 'M',
    'Ν': 'N',
    'Ξ': 'Ks',
    'Ο': 'O',
    'Π': 'P',
    'Ρ': 'R',
    // luka
    'Σ': 'S',
    'Τ': 'T',
    'Υ': 'Y',
    'Φ': 'F',
    'Χ': 'Ch',
    'Ψ': 'Ps',
    'Ω': 'O',

    // mały alfabet
    'α': 'a',
    'β': 'b',
    'γ': 'g',
    'δ': 'd',
    'ε': 'e',
    'ζ': 'dz',
    'η': 'e',
    'θ': 'th',
    'ι': 'i',
    'κ': 'k',
    'λ': 'l',
    'μ': 'm',
    'ν': 'n',
    'ξ': 'ks',
    'ο': 'o',
    'π': 'p',
    'ρ': 'r',
    'ς': 's',
    'σ': 's',
    'τ': 't',
    'υ': 'y',
    'φ': 'f',
    'χ': 'ch',
    'ψ': 'ps',
    'ω': 'o'
}

const re = new RegExp(Object.keys(code).join("|"),"gi");

function transcript(str) {
    return str.replace(re, (i, index) => {
        // console.log(i)
        return code[i] || i
    })
}
module.exports = transcript