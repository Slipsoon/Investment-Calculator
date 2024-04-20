import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function InvestmentResult({ investmentData }) {
  const investmentResults = calculateInvestmentResults(investmentData);
  const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((investmentYear) => {
          const totalInterest =
            investmentYear.valueEndOfYear -
            investmentYear.annualInvestment * investmentYear.year -
            initialInvestment;
          const totalAmountInvested =
            investmentYear.valueEndOfYear - totalInterest;
          return (
            <tr key={investmentYear.year}>
              <td>{investmentYear.year}</td>
              <td>{formatter.format(investmentYear.valueEndOfYear)}</td>
              <td>{formatter.format(investmentYear.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
