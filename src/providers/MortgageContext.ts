import { createContext } from "react";
import type { MortgageType } from "../utils/enums";

interface MortgageContextType {
	mortgageAmount: number | undefined;
	mortgageTerm: number | undefined;
	interestRate: number | undefined;
	mortgageType: MortgageType | undefined;
	monthlyInterestPayment: number | undefined;
	monthlyPayment: number | undefined;
	totalInterest: number | undefined;
	totalAmountPaid: number | undefined;
	setMortgageAmount: (amount: number) => void;
	setMortgageTerm: (term: number) => void;
	setInterestRate: (rate: number) => void;
	setMortgageType: (type: MortgageType) => void;
	calculateMortgageInterest: () => void;
	calculateMortgageRepayment: () => void;
	clearAll: () => void;
	hasCalculatedResults: () => boolean;
	hasError: () => boolean;
	isError: boolean;
}

export const MortgageContext = createContext<MortgageContextType | undefined>(
    undefined,
);