import { useMortgage } from "../../hooks/useMortgage";
import { MortgageType } from "../../utils/enums";
import { ErrorMessage } from "../TextInput/TextInput.styled";
import {
	RadioInputContainer,
	RadioInputLabelText,
	RadioInputLegend,
	RadioLabel,
	StyledRadioInput,
} from "./RadioInput.styled";

const RadioInput = () => {
    const { mortgageType, setMortgageType, isError } = useMortgage();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMortgageType(e.target.value as MortgageType);
    };

	const hasError = isError && mortgageType === undefined;

	return (
		<RadioInputContainer>
			<RadioInputLegend>Mortgage Type</RadioInputLegend>
			<RadioLabel
				htmlFor="repayment"
				isSelected={mortgageType === MortgageType.Repayment}
			>
				<StyledRadioInput
					type="radio"
					value={MortgageType.Repayment}
					id="repayment"
					name="mortgageType"
					onChange={handleChange}
                    checked={mortgageType === MortgageType.Repayment}
				/>
				<RadioInputLabelText>Repayment</RadioInputLabelText>
			</RadioLabel>

			<RadioLabel
				htmlFor="interest-only"
				isSelected={mortgageType === MortgageType.InterestOnly}
			>
				<StyledRadioInput
					type="radio"
					value={MortgageType.InterestOnly}
					id="interest-only"
					name="mortgageType"
					onChange={handleChange}
                    checked={mortgageType === MortgageType.InterestOnly}
				/>
				<RadioInputLabelText>Interest Only</RadioInputLabelText>
			</RadioLabel>
			{hasError && <ErrorMessage>This field is required</ErrorMessage>}
		</RadioInputContainer>
	);
};

export default RadioInput;
