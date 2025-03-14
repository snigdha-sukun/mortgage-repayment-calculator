import { Heading2 } from "../Results/Results.styled";
import { EmptyResultContainer, Paragraph } from "./EmptyResult.styled";

const EmptyResult = () => {
	return (
		<EmptyResultContainer>
			<div>
				<img src="/illustration-empty.svg" alt="Empty Result" width="100%" height="100%" />
			</div>
			<Heading2>Results shown here</Heading2>
			<Paragraph>
				Complete the form and click “calculate repayments” to see what your
				monthly repayments would be.
			</Paragraph>
		</EmptyResultContainer>
	);
};

export default EmptyResult;
