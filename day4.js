/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
  name: "Sulforaphane",
  treatableSymptoms: [
      "dementia",
      "alzheimer's",
      "inflammation",
      "neuropathy",
  ],
},
{
  name: "Longvida Curcumin",
  treatableSymptoms: [
      "pain",
      "inflammation",
      "depression",
      "arthritis",
      "anxiety",
  ],
},
{
  name: "Hericium erinaceus",
  treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
},
{
  name: "Nicotinamide mononucleotide",
  treatableSymptoms: [
      "ageing",
      "low NAD",
      "obesity",
      "mitochondrial myopathy",
      "diabetes",
  ],
},
{
  name: "PainAssassinator",
  treatableSymptoms: [
      "pain",
      "inflammation",
      "cramps",
      "headache",
      "toothache",
      "back pain",
      "fever",
  ],
},
];

function webMD(ailments, meds) {
  let rightMedArr = []
  for (let obj of meds) {
      let cureSymps = true
      for (let symp of ailments) {
          if (!obj['treatableSymptoms'].includes(symp)){
              cureSymps = false
          }
      }
      if (cureSymps === true) {
          rightMedArr.push(obj['name'])
      }
  }
  return rightMedArr
}

console.log(webMD(["pain", "inflammation", "depression"], medications))

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/