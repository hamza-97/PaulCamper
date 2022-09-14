import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	ScrollView,
	Modal,
} from "react-native";
import Colors from "../utils/Colors";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/actions/actions";
import UserTextInputs from "../components/UserTextInputs";
const Register = (props) => {
	let dispatch = useDispatch();
	const [name, setName] = useState("");
	const [surName, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [error, setErrors] = useState([]);

	const validateData = (testingAgainst, regex, message) => {
		if (regex.test(testingAgainst)) {
			return true;
		}
		let validationError = message;
		addErrorToArray(validationError);
		return false;
	};
	const addErrorToArray = (err) => {
		let arr = error;
		arr.push(err);
		setErrors(arr);
	};
	const submit = () => {
		let validName = validateData(
			name,
			/^([a-zA-Z_-]){2,14}$/,
			"Name should be only letters and length should be between 2-14"
		);
		let validSurname = validateData(
			surName,
			/^([a-zA-Z_-]){2,}$/,
			"Surname should be only letters and length should be more than 2"
		);
		let validEmail = validateData(
			email.toLowerCase(),
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Email is not in correct format"
		);
		let validPassword = validateData(
			password,
			/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/,
			"Password should be 8 characters and should contain 1 Uppercase letter and 1 number"
		);
		if (validName && validSurname && validEmail && validPassword) {
			let userData = { name, surName, email, password };
			let data = { userData: userData, navigation: props.navigation };
			dispatch(RegisterUser(data));
		} else {
			setShowModal(true);
		}
	};
	return (
		<View style={styles.container}>
			<ScrollView>
				<Image
					source={require("../../assets/logo.png")}
					width={400}
					height={200}
					style={styles.logo}
				/>
				<UserTextInputs label="Enter Name" value={name} setFunc={setName} />
				<UserTextInputs
					label="Enter Surname"
					value={surName}
					setFunc={setSurname}
				/>
				<UserTextInputs
					label="Enter Email"
					value={email.toLowerCase()}
					setFunc={setEmail}
				/>
				<UserTextInputs
					label="Enter Password"
					value={password}
					setFunc={setPassword}
				/>
				<TouchableOpacity onPress={() => submit()} style={styles.button}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
			</ScrollView>
			<Modal
				supportedOrientations={["portrait", "landscape"]}
				animationType={"slide"}
				visible={showModal}
				transparent={true}
			>
				<TouchableOpacity
					activeOpacity={1}
					style={styles.modal}
					onPress={() => {
						setShowModal(false);
						setErrors([]);
					}}
				>
					<View style={styles.modalCard}>
						{error.map((err) => {
							return (
								<View style={styles.modalBody}>
									<Image
										source={require("../../assets/cross.png")}
										width={20}
										height={20}
										style={styles.valid}
									/>
									<Text style={styles.errText}>{err}</Text>
								</View>
							);
						})}
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
	},
	logo: {
		alignSelf: "center",
		width: 400,
		height: 200,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 24,
		backgroundColor: Colors.primary,
		paddingHorizontal: 40,
		paddingVertical: 12,
		borderRadius: 40,
	},
	buttonText: {
		fontSize: 24,
		color: Colors.white,
	},
	valid: {
		width: 20,
		height: 20,
	},
	modal: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 24,
		zIndex: 2,
		width: "100%",
	},
	modalCard: {
		backgroundColor: "white",
		paddingHorizontal: 24,
		paddingVertical: 40,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.4,
		shadowRadius: 1,
	},
	modalBody: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 8,
	},
	errText: { marginLeft: 12, fontSize: 16 },
});
export default Register;
