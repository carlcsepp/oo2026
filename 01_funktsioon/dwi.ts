// Daily Water Intake

function calculateDWI(weightKg: number): string {
  const dwi = (weightKg * 35) / 1000; // 35ml is the recommended amount of water per kg of bodyweight
  return `Your daily water intake should be approximately ${dwi.toFixed(1)} liters`;
}

// Example usage
var weight = 70; // weight in kg

console.log(calculateDWI(weight));
console.log(calculateDWI(60));
console.log(calculateDWI(75));
console.log(calculateDWI(90));
