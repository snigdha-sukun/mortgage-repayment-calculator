import { useMortgage } from "../../hooks/useMortgage";
import {
	ErrorMessage,
	Input,
	InputAdornment,
	InputContainer,
	InputWrapper,
	Label,
} from "./TextInput.styled";

const TextInput = ({
	label,
	value,
	setValue,
	prefix,
	suffix,
}: {
	label: string;
	value: number | undefined;
	setValue: (val: number) => void;
	prefix?: string;
	suffix?: string;
}) => {
	const { isError } = useMortgage();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = Number(e.target.value);
		if (Number.isNaN(input)) return;
		setValue(input);
	};

	const hasError = isError && value === undefined;

	return (
		<InputContainer>
			<Label htmlFor={label}>{label}</Label>
			<InputWrapper showError={hasError}>
				{prefix && (
					<InputAdornment showError={hasError}>{prefix}</InputAdornment>
				)}
				<Input
					type="number"
					id={label}
					value={value ?? ""}
					onChange={handleChange}
				/>
				{suffix && (
					<InputAdornment showError={hasError}>{suffix}</InputAdornment>
				)}
			</InputWrapper>
			{hasError && <ErrorMessage>This field is required</ErrorMessage>}
		</InputContainer>
	);
};

export default TextInput;
