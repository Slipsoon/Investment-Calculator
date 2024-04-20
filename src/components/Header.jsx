import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={img} alt="" />
      <h1 id="header">Investment Calculator</h1>
    </div>
  );
}
