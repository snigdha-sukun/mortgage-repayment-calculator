import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			lime: string;
			red: string;
			white: string;
			slate100: string;
			slate300: string;
			slate500: string;
			slate700: string;
			slate900: string;
		};
		fontSizes: {
			base: string;
		};
		fontWeights: {
			base: number;
			bold: number;
		};
	}
}
