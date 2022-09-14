import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Colors from "../utils/Colors";
import { useSelector } from "react-redux";
const Success = (props) => {
	const appState = useSelector((state) => state);
	useEffect(() => {
		console.log("the appstate is ", appState);
	}, []);
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/check.png")}
				width={80}
				height={80}
				style={styles.logo}
			/>
			<Text style={styles.successText}>
				Congratulations {appState.userData.name} {appState.userData.surName}{" "}
				your account has been created. You will receive an email on{" "}
				{appState.userData.email.toLowerCase()}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white,
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		paddingHorizontal: 18,
	},
	logo: {
		alignSelf: "center",
		width: 80,
		height: 80,
	},
	successText: { textAlign: "center", fontSize: 16 },
});
export default Success;
