//data:
// initial amount
// annual contribution
// expected return
// duration
type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return "Initial investment must be >= 0";
  }

  if (duration <= 0) {
    return "Invalid amount of years provided";
  }
  if (expectedReturn < 0) {
    return "Expected return must be at least 0";
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total *= 1 + expectedReturn;
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions += annualContribution;
    total += annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalInterestEarned,
      totalContributions,
    });
  }

  return annualResults;
}

function printResults(results: CalculationResult): void {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const result of results) {
    console.log(
      `${result.year}
Total Amount:           $${result.totalAmount.toFixed(2)}
Total Contributions:    $${result.totalContributions.toFixed(2)}
Total Interest Earned:  $${result.totalInterestEarned.toFixed(2)}
----------------------------------------`
    );
  }
}
const investmentData: InvestmentData = {
  initialAmount: -1,
  annualContribution: 100,
  expectedReturn: 0.05,
  duration: 10,
};

const results = calculateInvestment(investmentData);
printResults(results);
