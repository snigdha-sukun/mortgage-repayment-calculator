import { useMortgage } from "../../hooks/useMortgage";
import CalculatedResult from "../CalculatedResult/CalculatedResult";
import EmptyResult from "../EmptyResult/EmptyResult";
import { ResultsContainer } from "./Results.styled";

const Results = () => {
	const { hasCalculatedResults } = useMortgage();
	const hasResults = hasCalculatedResults();

	return (
		<ResultsContainer>
			{hasResults ? <CalculatedResult /> : <EmptyResult />}
		</ResultsContainer>
	);
};

export default Results;
