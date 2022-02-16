// Returns a random DNA base

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
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

// factory function creating the organism with 15 bases
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
    compareDNA: function (pAequorX) {
      let matchingBases = [];
      for (let i = 0; i < 15; i++) {
        if (this['dna'][i] === pAequorX['dna'][i]) {
          matchingBases.push(this['dna'][i]);
        };
        
      }
      console.log(`specimen ${this.specimenNum} and specimen ${pAequorX.specimenNum} have ${matchingBases.length / 15 *100}% DNA in common`);
    },
  }
}

let pAequor1 = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequorFactory(2, mockUpStrand());

//console.log(pAequor1.dna);
//console.log(pAequor2.dna);
pAequor1.compareDNA(pAequor2);

