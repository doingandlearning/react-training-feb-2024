import React from "react"

// create context

export interface IThemeContext {
	theme: string;
	toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext | null>(null)

// create provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = React.useState("light");
	const toggleTheme = () => {
		setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
	}
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>
		{children}
	</ThemeContext.Provider>
}

// wrap the parent with the provider


// use the context