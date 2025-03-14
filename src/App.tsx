import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { GlobalStyles } from "./utils/globalStyles";
import { Container } from "./App.styled";
import Calculator from "./components/Calculator/Calculator";
import Results from "./components/Results/Results";
import { MortgageProvider } from "./providers/MortgageProvider";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<MortgageProvider>
				<Container>
					<Calculator />
					<Results />
				</Container>
			</MortgageProvider>
		</ThemeProvider>
	);
}

export default App;
