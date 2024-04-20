import { useState } from "react";
import Header from "./components/Header";
import InvestmentInputs from "./components/InvestmentInputs";

const DEFAULT_INVESTMENT_CRITERIA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentCriteria, setInvestmentCriteria] = useState(
    DEFAULT_INVESTMENT_CRITERIA
  );

  function changeInvestmentCriteria(e, criteriaInput) {
    setInvestmentCriteria((prevInvestmentCriteria) => {
      return { ...prevInvestmentCriteria, [criteriaInput]: e.target.value };
    });
  }

  return (
    <>
      <Header />
      <InvestmentInputs
        investmentData={investmentCriteria}
        onInvestmentDataChange={changeInvestmentCriteria}
      />
    </>
  );
}

export default App;
