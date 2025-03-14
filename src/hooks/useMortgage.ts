import { useContext } from "react";
import { MortgageContext } from "../providers/MortgageContext";

export const useMortgage = () => {
	const context = useContext(MortgageContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
