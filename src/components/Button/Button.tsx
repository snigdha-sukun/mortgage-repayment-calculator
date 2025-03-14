import { useMortgage } from "../../hooks/useMortgage";
import { MortgageType } from "../../utils/enums";
import { StyledButton } from "./Button.styled";

const Button = () => {
	const {
		calculateMortgageInterest,
		calculateMortgageRepayment,
		mortgageType,
		hasError,
	} = useMortgage();

	const handleClick = () => {
		if(hasError()) return;
		if (mortgageType === MortgageType.InterestOnly) {
			calculateMortgageInterest();
		}
		if (mortgageType === MortgageType.Repayment) {
			calculateMortgageRepayment();
		}
	};

	return (
		<StyledButton onClick={handleClick}>
			<span>
				<img src="/icon-calculator.svg" alt="calculator" />
			</span>
			<span>Calculate Repayments</span>
		</StyledButton>
	);
};

export default Button;
