

const html = (segments, ...inserts) => 
    segments.map((s, i) => i < segments.length - 1 ? s + inserts[i] : s).join('')

const given = (val, func) => val != null ? func(val) : val

module.exports = { html, given }