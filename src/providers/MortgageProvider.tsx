import { useCallback, useMemo, useState } from "react";
import type { MortgageType } from "../utils/enums";
import { MortgageContext } from "./MortgageContext";

export const MortgageProvider = ({
	children,
}: { children: React.ReactNode }) => {
	const [mortgageAmount, setMortgageAmount] = useState<number | undefined>();
	const [mortgageTerm, setMortgageTerm] = useState<number | undefined>(); // in years
	const [interestRate, setInterestRate] = useState<number | undefined>(); // in percentage
	const [mortgageType, setMortgageType] = useState<MortgageType | undefined>();
	const [monthlyInterestPayment, setMonthlyInterestPayment] = useState<
		number | undefined
	>();
	const [monthlyPayment, setMonthlyPayment] = useState<number | undefined>();
	const [totalInterest, setTotalInterest] = useState<number | undefined>();
	const [totalAmountPaid, setTotalAmountPaid] = useState<number | undefined>();
	const [isError, setIsError] = useState<boolean>(false);

	const calculateMortgageInterest = useCallback(() => {
		if (
			mortgageAmount !== undefined &&
			interestRate !== undefined &&
			mortgageTerm !== undefined
		) {
			const monthlyInterestRate = interestRate / 100 / 12;
			const numberOfPayments = mortgageTerm * 12;
			const monthlyPayment =
				(mortgageAmount *
					monthlyInterestRate *
					(1 + monthlyInterestRate) ** numberOfPayments) /
				((1 + monthlyInterestRate) ** numberOfPayments - 1);
			const totalRepaymentAmount = monthlyPayment * numberOfPayments;
			const totalInterestPaid = totalRepaymentAmount - mortgageAmount;
			const monthlyInterestPayment = mortgageAmount * monthlyInterestRate;

			setMonthlyInterestPayment(monthlyInterestPayment);
			setTotalInterest(totalInterestPaid);
			setMonthlyPayment(undefined);
			setTotalAmountPaid(undefined);
		}
	}, [mortgageAmount, interestRate, mortgageTerm]);

	const calculateMortgageRepayment = useCallback(() => {
		if (
			mortgageAmount !== undefined &&
			interestRate !== undefined &&
			mortgageTerm !== undefined
		) {
			const monthlyInterestRate = interestRate / 100 / 12;
			const numberOfPayments = mortgageTerm * 12;
			const monthlyPayment =
				(mortgageAmount *
					monthlyInterestRate *
					(1 + monthlyInterestRate) ** numberOfPayments) /
				((1 + monthlyInterestRate) ** numberOfPayments - 1);
			const totalAmountPaid = monthlyPayment * numberOfPayments;

			setMonthlyPayment(monthlyPayment);
			setTotalAmountPaid(totalAmountPaid);
			setMonthlyInterestPayment(undefined);
			setTotalInterest(undefined);
		}
	}, [mortgageAmount, interestRate, mortgageTerm]);

	const clearAll = useCallback(() => {
		setMortgageAmount(undefined);
		setMortgageTerm(undefined);
		setInterestRate(undefined);
		setMortgageType(undefined);
		setMonthlyInterestPayment(undefined);
		setMonthlyPayment(undefined);
		setTotalInterest(undefined);
		setTotalAmountPaid(undefined);
		setIsError(false);
	}, []);

	const hasCalculatedResults = useCallback(() => {
		if (
			(monthlyPayment && totalAmountPaid) ||
			(monthlyInterestPayment && totalInterest)
		) {
			return true;
		}
		return false;
	}, [monthlyInterestPayment, monthlyPayment, totalAmountPaid, totalInterest]);

	const hasError = useCallback(() => {
		if (
			mortgageAmount === undefined ||
			mortgageTerm === undefined ||
			interestRate === undefined ||
			mortgageType === undefined
		) {
			setIsError(true);
			return true;
		}
		setIsError(false);
		return false;
	}, [mortgageAmount, mortgageTerm, interestRate, mortgageType]);

	const contextValue = useMemo(
		() => ({
			mortgageAmount,
			mortgageTerm,
			interestRate,
			mortgageType,
			monthlyInterestPayment,
			monthlyPayment,
			totalInterest,
			totalAmountPaid,
			setMortgageAmount,
			setMortgageTerm,
			setInterestRate,
			setMortgageType,
			calculateMortgageInterest,
			calculateMortgageRepayment,
			clearAll,
			hasCalculatedResults,
			hasError,
			isError
		}),
		[
			mortgageAmount,
			mortgageTerm,
			interestRate,
			mortgageType,
			monthlyInterestPayment,
			monthlyPayment,
			totalInterest,
			totalAmountPaid,
			calculateMortgageInterest,
			calculateMortgageRepayment,
			clearAll,
			hasCalculatedResults,
			hasError,
			isError
		],
	);

	return (
		<MortgageContext.Provider value={contextValue}>
			{children}
		</MortgageContext.Provider>
	);
};
