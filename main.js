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
      };
      console.log(`specimen ${this.specimenNum} and specimen ${pAequorX.specimenNum} have ${matchingBases.length / 15 *100}% DNA in common`);
    },
    willLikelySurvive: function () {
      let CGBases = [];
      for (let i = 0; i < 15; i++) {
        if (this['dna'][i] === 'C' || this['dna'][i] === 'G') {
          CGBases.push(this['dna'][i]);
        };
      };
      return CGBases.length / 15 > 0.6;
    },
    complementStrand: function () {
      const replaceWithT = x => {
        if (x==='T') {
          return x='A';
        } else 
        if (x==='A') {
          return x='T';
        } else 
        if (x==='C') {
          return x='G';
        } else
        if (x==='G') {
          return x='C';
        }
      }
      return this['dna'].map(replaceWithT);
    }
  }
}

let survivingInstances = [];
while (survivingInstances.length < 30) {
  let instance = pAequorFactory(undefined, mockUpStrand());
  if (instance.willLikelySurvive() === true) {
    survivingInstances.push(instance);
  };
};

//let pAequor1 = pAequorFactory(1,mockUpStrand())
//console.log(pAequor1.dna);
//console.log(pAequor1.complementStrand())

