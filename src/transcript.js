// help: https://en.wikipedia.org/wiki/Greek_diacritics
// https://en.wikipedia.org/wiki/Latin_script_in_Unicode

const code = {

    // [1] spółgłoska gamma (czytane jako n przed γ, κ, ξ, χ)
    'γγ': 'ng',
    'γκ': 'nk',
    'γξ': 'nks',
    'γχ': 'nch',

    // [2] dyftongi (dwugłoski)
    'αι': 'aj',
    'ει': 'ej',
    'οι': 'oj',
    'υι': 'yj',
    'αυ': 'ał',

    'ευ': 'eł',
    'oυ': 'oł',
    'ηυ': 'ēł',
    'ωυ': 'oł', // TODO - do sprawdzenia

    'Αι': 'Ał', // TODO - do sprawdzenia

    /* UNICODE Greek and Coptic 0370-03ff */

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

    // 'Ϊ': 'I',
    // 'Ϋ': 'Y',

    // acutus
    'ά': 'a',
    'έ': 'e',
    'ή': 'ē',
    'ί': 'i',
    'ό': 'o',
    'ύ': 'y',
    'ώ': 'ō',

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
    'ω': 'o',

    /* UNICODE Greek Extended 1f00-1fff */

    // spiritus lenis
    'ἀ': 'a',
    'ἐ': 'e',
    'ἠ': 'h',
    'ἰ': 'i',
    'ὀ': 'o',
    'ὐ': 'y',
    'ὠ': 'o',

    'ῤ': 'r',

    // spiritus asper (dodajemy literę h)
    'ἁ': 'ha',
    'ἑ': 'he',
    'ἡ': 'hh',
    'ἱ': 'hi',
    'ὁ': 'ho',
    'ὑ': 'hy',
    'ὡ': 'ho',

    'ῥ': 'hr',

    // spiritus lenis + gravis
    'ἂ': 'a',
    'ἒ': 'e',
    'ἢ': 'h',
    'ἲ': 'i',
    'ὂ': 'o',
    'ὒ': 'y',
    'ὢ': 'o',

    // spiritus asper + gravis (dodajemy literę h)
    'ἃ': 'ha',
    'ἓ': 'he',
    'ἣ': 'hh',
    'ἳ': 'hi',
    'ὃ': 'ho',
    'ὓ': 'hy',
    'ὣ': 'ho',

    // spiritus lenis + acutus
    'ἄ': 'a',
    'ἔ': 'e',
    'ἤ': 'h',
    'ἴ': 'i',
    'ὄ': 'o',
    'ὔ': 'y',
    'ὤ': 'o',

    // spiritus asper + acutus (dodajemy literę h)
    'ἅ': 'ha',
    'ἕ': 'he',
    'ἥ': 'hh',
    'ἵ': 'hi',
    'ὅ': 'ho',
    'ὕ': 'hy',
    'ὥ': 'ho',

    // spiritus lenis + circumflexus
    'ἆ': 'a',
    // luka
    'ἦ': 'e',
    'ἶ': 'i',
    // luka
    'ὖ': 'y',
    'ὦ': 'o',

    // spiritus asper + circumflexus
    'ἇ': 'a',
    'ἧ': 'e',
    'ἷ': 'i',
    'ὗ': 'y',
    'ὧ': 'o',

    // ------------------------------------------

    // gravis
    'ὰ': 'a',
    'ὲ': 'e',
    'ὴ': 'e',
    'ὶ': 'i',
    'ὸ': 'o',
    'ὺ': 'y',
    'ὼ': 'o',

    // acutus
    'ά': 'a',
    'έ': 'e',
    'ή': 'ē',
    'ί': 'i',
    'ό': 'o',
    'ύ': 'y',
    'ώ': 'ō',

    // ------------------------------------------
    // spiritus lenis + iota subscriptum
    'ᾀ': 'a',
    'ᾐ': 'e',
    'ᾠ': 'o',

    // spiritus asper + iota subscriptum
    'ᾁ': 'a',
    'ᾑ': 'e',
    'ᾡ': 'o',

    // spiritus lenis + gravis + iota subscriptum
    'ᾂ': 'a',
    'ᾒ': 'e',
    'ᾢ': 'o',

    // spiritus asper + gravis + iota subscriptum
    'ᾃ': 'a',
    'ᾓ': 'e',
    'ᾣ': 'o',

    // spiritus lenis + acutus + iota subscriptum
    'ᾄ': 'a',
    'ᾔ': 'e',
    'ᾤ': 'o',

    // spiritus asper + acutus + iota subscriptum
    'ᾅ': 'a',
    'ᾕ': 'e',
    'ᾥ': 'o',

    // spiritus lenis + circumflexus + iota subscriptum
    'ᾆ': 'a',
    'ᾖ': 'e',
    'ᾦ': 'o',

    // spiritus asper + circumflexus + iota subscriptum
    'ᾇ': 'a',
    'ᾗ': 'e',
    'ᾧ': 'o',

    // gravis + iota subscriptum
    'ᾲ': 'a',
    'ῂ': 'e',
    'ῲ': 'o',

    // iota subscriptum
    'ᾳ': 'a',
    'ῃ': 'e',
    'ῳ': 'o',

    // acutus + iota subscriptum
    'ᾴ': 'a',
    'ῄ': 'e',
    'ῴ': 'o',

    // circumflexus
    'ᾶ': 'a',
    'ῆ': 'e',
    'ῖ': 'i',
    'ῦ': 'y',
    'ῶ': 'o',

    // circumflexus + iota subscriptum
    'ᾷ': 'a',
    'ῇ': 'e',
    'ῷ': 'o',

    // diereza
    'ῒ': 'i',
    'ΐ': 'i',
    'ῗ': 'i',
    'ῢ': 'y',
    'ΰ': 'y',
    'ῧ': 'y',

    // ------------------------------------------
    /* duże litery */

    // spiritus lenis
    '\u1f08': 'A',
    '\u1f18': 'E',
    '\u1f28': 'H',
    '\u1f38': 'I',
    '\u1f48': 'O',
    // luka
    '\u1f68': 'O',

    // spiritus asper (dodajemy literę h)
    '\u1f09': 'Ha',
    '\u1f19': 'He',
    '\u1f29': 'Hh',
    '\u1f39': 'Hi',
    '\u1f49': 'Ho',
    '\u1f59': 'Hy',
    '\u1f69': 'Ho',

    // spiritus lenis + gravis
    '\u1f0a': 'A',
    '\u1f1a': 'E',
    '\u1f2a': 'H',
    '\u1f3a': 'I',
    '\u1f4a': 'O',
    // luka
    '\u1f6a': 'O',

    // spiritus asper + gravis (dodajemy literę h)
    '\u1f0b': 'Ha',
    '\u1f1b': 'He',
    '\u1f2b': 'Hh',
    '\u1f3b': 'Hi',
    '\u1f4b': 'Ho',
    '\u1f5b': 'Hy',
    '\u1f6b': 'Ho',

    // spiritus lenis + acutus
    '\u1f0c': 'A',
    '\u1f1c': 'E',
    '\u1f2c': 'H',
    '\u1f3c': 'I',
    '\u1f4c': 'O',
    // luka
    '\u1f6c': 'O',

    // spiritus asper + acutus (dodajemy literę h)
    '\u1f0d': 'Ha',
    '\u1f1d': 'He',
    '\u1f2d': 'Hh',
    '\u1f3d': 'Hi',
    '\u1f4d': 'Ho',
    '\u1f5d': 'Hy',
    '\u1f6d': 'Ho',

    // spiritus lenis + circumflexus
    '\u1f0e': 'A',
    // luka
    '\u1f2e': 'H',
    '\u1f3e': 'I',
    // luka
    // luka
    '\u1f6e': 'O',

    // spiritus asper + circumflexus (dodajemy literę h)
    '\u1f0f': 'Ha',
    // luka
    '\u1f2f': 'Hh',
    '\u1f3f': 'Hi',
    // luka
    '\u1f5f': 'Hy',
    '\u1f6f': 'Ho',

    // ---------------------------------------

    // znaki interpunkcujne
    ';': '?',
    '·': ':'
}

/*
for (const str in code) {
    var arr=[];
    for(var i=0; i<str.length; i++) {
        arr.push(str.charCodeAt(i))
    }
    console.log(str, arr)
}
*/

export function transcript(str) {
    const re = new RegExp(Object.keys(code).join("|"),"gi");

    return str.replace(re, (i, index) => {
        // console.log(i)
        return code[i] || i
    })
}
