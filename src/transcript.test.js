const transcript = require('../js/transcript');

test('transcript', () => {

    // Alfabet
    expect(transcript('Α|Β|Γ|Δ|Ε|Ζ|Η|Θ|Ι|Κ|Λ|Μ|Ν|Ξ|Ο|Π|Ρ|Σ|Τ|Υ|Φ|Χ|Ψ|Ω')).toBe('A|B|G|D|E|Dz|E|Th|I|K|L|M|N|Ks|O|P|R|S|T|Y|F|Ch|Ps|O') //duże litery
    expect(transcript('α|β|γ|δ|ε|ζ|η|θ|ι|κ|λ|μ|ν|ξ|ο|π|ρ|ς|σ|τ|υ|φ|χ|ψ|ω')).toBe('a|b|g|d|e|dz|e|th|i|k|l|m|n|ks|o|p|r|s|s|t|y|f|ch|ps|o') //małe litery

    // [1] spółgłoska gamma (czytane jako n przed γ, κ, ξ, χ)
    expect(transcript('ἄγγελος')).toBe('angelos')
    expect(transcript('ἄγκυρα')).toBe('ankyra')
    expect(transcript('σάλπιγξ')).toBe('salpinks')
    expect(transcript('λόγχη')).toBe('lonche') //e z kreską

    // [2] dyftongi (dwugłoski)
    expect(transcript('αι')).toBe('aj')
    expect(transcript('ει')).toBe('ej')
    expect(transcript('οι')).toBe('oj')
    expect(transcript('υι')).toBe('yj')
    expect(transcript('αυ')).toBe('ał')
    expect(transcript('ευ')).toBe('eł')
    expect(transcript('ηυ')).toBe('ēł')
    expect(transcript('Αι')).toBe('Ał')

    // [3] Znaki diakrytyczne
    expect(transcript('άέήίόύώ άέήίόύώ')).toBe('aeēioyō aeēioyō') // acutus
    expect(transcript('ὰὲὴὶὸὺὼ')).toBe('aeeioyo') // gravis
    expect(transcript('ᾶῆῖῦῶ')).toBe('aeiyo') // circumflexus

    // Ewangelia Marka 1:1-3 (TODO)
    expect(transcript('Ἀρχὴ τοῦ εὐαγγελίου Ἰησοῦ Χριστοῦ [υἱοῦ θεοῦ].')).toBe('Arche toy eyangelioy Iesoy Christoy [yhioy theoy].')
    expect(transcript('Καθὼς γέγραπται ἐν τῷ Ἠσαΐᾳ τῷ προφήτῃ·')).toBe('Kathos gegraptaj en to Hsaia to profēte:')
    expect(transcript('ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου,')).toBe('idoy apostello ton angelon moy pro prosōpoy soy,')
    expect(transcript('ὃς κατασκευάσει τὴν ὁδόν σου·')).toBe('hos kataskełasej ten hodon soy:')
    expect(transcript('φωνὴ βοῶντος ἐν τῇ ἐρήμῳ·')).toBe('fone boontos en te erēmo:')
    expect(transcript('ἑτοιμάσατε τὴν ὁδὸν κυρίου,')).toBe('hetojmasate ten hodon kyrioy,')
    expect(transcript('εὐθείας ποιεῖτε τὰς τρίβους αὐτοῦ,')).toBe('eytheias pojeite tas triboys aytoy,')

    // 1 Koryntian 15:1-3 (TODO)
    expect(transcript('Γνωρίζω δὲ ὑμῖν, ἀδελφοί, τὸ εὐαγγέλιον ὃ εὐηγγελισάμην ὑμῖν, ὃ καὶ παρελάβετε, ἐν ᾧ καὶ ἑστήκατε,')).toBe('Gnoridzo de hymin, adelfoi, to eyangelion ho eyengelisamen hymin, ho kai parelabete, en o kai hestēkate,')
    expect(transcript('δι’ οὗ καὶ σῴζεσθε, τίνι λόγῳ εὐηγγελισάμην ὑμῖν εἰ κατέχετε, ἐκτὸς εἰ μὴ εἰκῇ ἐπιστεύσατε.')).toBe('di’ oy kai sodzesthe, tini logo eyengelisamen hymin ei katechete, ektos ei me eike episteysate.')

    // Ewangeria Jana
    expect(transcript('ΚΑΤΑ ΙΩΑΝΝΗΝ')).toBe('KATA IOANNEN')
    expect(transcript('Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος.')).toBe('En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos.')
    expect(transcript('οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν.')).toBe('oytos en en arche pros ton theon.')
    expect(transcript('πάντα δι’ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν. ὃ γέγονεν')).toBe('panta di’ aytoy egeneto, kai choris aytoy egeneto oyde hen. ho gegonen')

    // Unicode
    expect(transcript('\u1f18\u03bd \u1f00\u03c1\u03c7\u1fc7 \u1f26\u03bd \u1f41 \u03bb\u1f79\u03b3\u03bf\u03c2, \u03ba\u03b1\u1f76 \u1f41 \u03bb\u1f79\u03b3\u03bf\u03c2 \u1f26\u03bd \u03c0\u03c1\u1f78\u03c2 \u03c4\u1f78\u03bd \u03b8\u03b5\u1f79\u03bd, \u03ba\u03b1\u1f76 \u03b8\u03b5\u1f78\u03c2 \u1f26\u03bd \u1f41 \u03bb\u1f79\u03b3\u03bf\u03c2.')).toBe('En arche en ho logos, kai ho logos en pros ton theon, kai theos en ho logos.')

    // Strongs
    expect(transcript('A')).toBe('A')
    expect(transcript('Ἀαρών')).toBe('Aarōn')
    expect(transcript('Ἀβαδδών')).toBe('Abaddōn')
    expect(transcript('ἀβαρής')).toBe('abarēs')
    expect(transcript('Ἀββᾶ')).toBe('Abba')
    expect(transcript('Ἄβελ')).toBe('Abel')
    expect(transcript('Ἀβιά')).toBe('Abia')
    expect(transcript('Ἀβιαθάρ')).toBe('Abiathar')
    expect(transcript('Ἀβιληνή')).toBe('Abilenē')
    expect(transcript('Ἀβιούδ')).toBe('Abioyd')
    expect(transcript('Ἀβραάμ')).toBe('Abraam')
    expect(transcript('ἄβυσσος')).toBe('abyssos')
    expect(transcript('Ἄγαβος')).toBe('Agabos')
    expect(transcript('ἀγαθοεργέω')).toBe('agathoergeo')
    expect(transcript('ἀγαθοποιέω')).toBe('agathopojeo')
    expect(transcript('ἀγαθοποιΐα')).toBe('agathopojia')
    expect(transcript('ἀγαθοποιός')).toBe('agathopojos')
    expect(transcript('ἀγαθός')).toBe('agathos')
    expect(transcript('ἀγαθωσύνη')).toBe('agathosyne')

    //                [N] The people [G]of God []send [A]an apostle [D]into a city
    expect(transcript('oἱ ἅνθρωπoι θέoυ πέμπoυσιν ἀπόστoλoν εἰς πόλει')).toBe('ohi hanthropoi theoł pempołsin apostolon eis polej')

    //                [N]the son [G]of man []teaches [A]people [D]in the house
    expect(transcript('ὁ υἱoς ἀνθρώπoυ διδάκει λαὸν oἵκῳ')).toBe('ho yhios anthrōpoł didakej laon ohiko')

})