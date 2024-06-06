let pronoun = ["the", "our", "it", "he", "she"];
let adj = ["great", "big", "acid", "bad", "cool"];
let noun = ["jogger", "racoon", "developer", "nike", "card"];
let ext = [".com", ".net", ".us", ".io", ".es"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < ext.length; e++) {
        let domain = pronoun[p] + adj[a] + noun[n] + ext[e];
        console.log(domain);
      }
    }
  }
}
