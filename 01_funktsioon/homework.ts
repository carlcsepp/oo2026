// Daily Water Intake based on the user's weight

function calculateDWI(weightKg: number): string {
  const dwi = (weightKg * 35) / 1000; // 35ml per kg of body weight, a common guideline
  return `Your daily water intake should be approximately ${dwi.toFixed(1)} liters`;
}

// Example usage
var weight = 60;

console.log(calculateDWI(weight));
console.log(calculateDWI(70));
console.log(calculateDWI(80));
console.log(calculateDWI(90));