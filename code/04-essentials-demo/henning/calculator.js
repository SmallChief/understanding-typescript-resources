function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return "Initial investment must be >= 0";
    }
    if (duration <= 0) {
        return "Invalid amount of years provided";
    }
    if (expectedReturn < 0) {
        return "Expected return must be at least 0";
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total *= 1 + expectedReturn;
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContributions: totalContributions,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        console.log("".concat(result.year, "\nTotal Amount:           $").concat(result.totalAmount.toFixed(2), "\nTotal Contributions:    $").concat(result.totalContributions.toFixed(2), "\nTotal Interest Earned:  $").concat(result.totalInterestEarned.toFixed(2), "\n----------------------------------------"));
    }
}
var investmentData = {
    initialAmount: -1,
    annualContribution: 100,
    expectedReturn: 0.05,
    duration: 10,
};
var results = calculateInvestment(investmentData);
printResults(results);
