let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];
let hacks = ['es', 'it', 'de', 'ly']; // Para hacks como pued.es, s.it, etc.

function generateDomains(pronoun, adj, noun, extensions, hacks) {
  let domains = [];

  // Generar combinaciones básicas con extensiones estándar
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          domains.push(p + a + n + ext);
        }
      }
    }
  }

  // Generar combinaciones con domain hacks
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let hack of hacks) {
          if (n.endsWith(hack)) {
            let base = p + a + n.slice(0, -hack.length);
            domains.push(base + '.' + hack);
          }
        }
      }
    }
  }

  return domains;
}

let allDomains = generateDomains(pronoun, adj, noun, extensions, hacks);
allDomains.forEach(domain => console.log(domain));