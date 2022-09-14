import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { apply } from "redux-saga/effects";
import store from "./src/Redux/store/store";
import Register from "./src/screens/Register";
import Success from "./src/screens/Success";
const Stack = createStackNavigator();
const AuthStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Register"
			component={Register}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Success"
			component={Success}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

const App = () => {
	LogBox.ignoreAllLogs();
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AuthStack />
			</NavigationContainer>
		</Provider>
	);
};
export default App;
// export default function App() {
// 	return (
// 		<Provider store={store}>
// 			<NavigationContainer>
// 				<AuthStack />
// 			</NavigationContainer>
// 		</Provider>
// 	);
// }
