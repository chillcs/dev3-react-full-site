import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Remit from './pages/Remit';
import Error from './pages/Error';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} exact />
				<Route path="/faq" element={<FAQ />} exact />
				<Route path="/careers" element={<Careers />} exact />
				<Route path="/terms" element={<Terms />} exact />
				<Route path="/privacy" element={<Privacy />} exact />
				<Route path="/remit" element={<Remit />} exact />
				<Route path="*" element={<Error />} exact />
			</Routes>
		</Router>
	);
}

export default App;
