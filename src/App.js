import './App.css';
import StyleSheet from 'styled-components';

function App() {
  return (
    	<>
			<Headding>Welcome to my FirstReact App</Headding>
		</>
	);
}	

const Headding = StyleSheet.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin : 100px;
`;

export default App;
