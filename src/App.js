import { Container } from 'postcss';
import './App.css';
import StyleSheet from 'styled-components';

function App() {
  return (
    	<ContainerDiv>
			<Headding>Welcome to my FirstReact App</Headding>
			<Paragraph>This is a simple paragraph. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</Paragraph>
		</ContainerDiv>
	);
}	

const ContainerDiv = StyleSheet.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	background-color: #f0f0f0;
	width: 100%;
	height: 100vh;
`;

const Headding = StyleSheet.h1`
	
`;

const Paragraph = StyleSheet.p`
	padding: 20px;
`;
export default App;
