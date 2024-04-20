export default function InvestmentInputs({
  investmentData,
  onInvestmentDataChange,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(e) => onInvestmentDataChange(e, "initialInvestment")}
            value={investmentData.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => onInvestmentDataChange(e, "annualInvestment")}
            value={investmentData.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(e) => onInvestmentDataChange(e, "expectedReturn")}
            value={investmentData.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(e) => onInvestmentDataChange(e, "duration")}
            value={investmentData.duration}
          />
        </p>
      </div>
    </section>
  );
}
