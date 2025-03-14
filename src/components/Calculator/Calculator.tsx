import { useMortgage } from "../../hooks/useMortgage";
import Button from "../Button/Button";
import RadioInput from "../RadioInput/RadioInput";
import TextInput from "../TextInput/TextInput";
import {
	CalculatorContainer,
	Heading2,
	Link,
	MorgageDetails,
	SectionHeader,
} from "./Calculator.styled";

const Calculator = () => {
	const {
		mortgageAmount,
		mortgageTerm,
		interestRate,
		setMortgageAmount,
		setMortgageTerm,
		setInterestRate,
		clearAll,
	} = useMortgage();

	return (
		<CalculatorContainer>
			<SectionHeader>
				<Heading2>Mortgage Calculator</Heading2>
				<Link onClick={clearAll}>Clear All</Link>
			</SectionHeader>
			<TextInput
				label="Mortgage Amount"
				value={mortgageAmount}
				setValue={setMortgageAmount}
				prefix="£"
			/>
			<MorgageDetails>
				<TextInput
					label="Mortgage Term"
					value={mortgageTerm}
					setValue={setMortgageTerm}
					suffix="years"
				/>
				<TextInput
					label="Interest Rate"
					value={interestRate}
					setValue={setInterestRate}
					suffix="%"
				/>
			</MorgageDetails>
			<RadioInput />
			<Button />
		</CalculatorContainer>
	);
};

export default Calculator;
