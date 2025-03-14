import { useMortgage } from "../../hooks/useMortgage";
import { Heading2 } from "../Results/Results.styled";
import {
	CalculatedResultContainer,
	ResultAmt,
	ResultAmtContainer,
	ResultDetails,
	StyledDivider,
} from "./CalculatedResult.styled";

const showFormattedPrice = (price: number) => {
	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(price);
};

const CalculatedResult = () => {
	const {
		monthlyPayment,
		monthlyInterestPayment,
		totalAmountPaid,
		totalInterest,
	} = useMortgage();
	return (
		<CalculatedResultContainer>
			<Heading2>Your results</Heading2>
			Your results are shown below based on the information you provided. To
			adjust the results, edit the form and click “calculate repayments” again.
			<ResultAmtContainer>
				<ResultDetails>
					<span>Your monthly repayments</span>
					<ResultAmt>
						{showFormattedPrice(monthlyPayment ?? monthlyInterestPayment ?? 0)}
					</ResultAmt>
				</ResultDetails>
				<StyledDivider />
				<ResultDetails>
					<span>
						Total you'll repay over the term
					</span>
					<Heading2>
						{showFormattedPrice(totalAmountPaid ?? totalInterest ?? 0)}
					</Heading2>
				</ResultDetails>
			</ResultAmtContainer>
		</CalculatedResultContainer>
	);
};

export default CalculatedResult;
