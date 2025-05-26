import "./App.css";
import { AppProvider } from "./providers/app.provider";
import { Header } from "./components/header";
import { Router } from "./routes/Router";
import { Footer } from "./components/footer";

const App = () => {
	return (
		<AppProvider>
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<Header firstname="Alex" />

				<main className="flex-grow">
					<Router />
				</main>

				<Footer />
			</div>
		</AppProvider>
	);
};
export default App;
