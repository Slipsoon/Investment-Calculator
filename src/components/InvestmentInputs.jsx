export default function InvestmentInputs({
  investmentData,
  onInvestmentDataChange,
}) {
  function validateDurationInput(e, criteriaInput) {
    if (e.target.value < 1) {
      alert("Value cannot be lower than 1");
    } else {
      onInvestmentDataChange(e, criteriaInput);
    }
  }

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
            onChange={(e) => validateDurationInput(e, "duration")}
            value={investmentData.duration}
          />
        </p>
      </div>
    </section>
  );
}
