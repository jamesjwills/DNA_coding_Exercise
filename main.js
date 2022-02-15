// Returns a random DNA base
const dnaBases = ['A', 'T', 'C', 'G'];
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, baseArray) {
  return {
    specimenNum: number,
    dna: baseArray,
    mutate: function() {
      const selectedBaseIndex = Math.floor(Math.random()*15);    
      let newBase = returnRandBase();
      while (this.dna[selectedBaseIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[selectedBaseIndex] = newBase;
    },
  }
}




