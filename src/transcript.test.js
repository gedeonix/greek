const transcript = require('./transcript');

test('transcript', () => {

    // Alfabet
    expect(transcript('Α|Β|Γ|Δ|Ε|Ζ|Η|Θ|Ι|Κ|Λ|Μ|Ν|Ξ|Ο|Π|Ρ|Σ|Τ|Υ|Φ|Χ|Ψ|Ω')).toBe('A|B|G|D|E|Dz|E|Th|I|K|L|M|N|Ks|O|P|R|S|T|Y|F|Ch|Ps|O') //duże litery
    expect(transcript('α|β|γ|δ|ε|ζ|η|θ|ι|κ|λ|μ|ν|ξ|ο|π|ρ|ς|σ|τ|υ|φ|χ|ψ|ω')).toBe('a|b|g|d|e|dz|e|th|i|k|l|m|n|ks|o|p|r|s|s|t|y|f|ch|ps|o') //małe litery
})