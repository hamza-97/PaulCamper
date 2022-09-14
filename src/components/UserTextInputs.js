import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {} from "react-native-paper";
import Colors from "../utils/Colors";

const UserTextInputs = (props) => {
	const [focused, setFocused] = useState(false);
	const onChange = (text) => {
		props.setFunc(text);
	};
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={[
					styles.input,
					{ borderColor: focused ? Colors.primary : Colors.black },
				]}
				theme={{
					colors: {
						primary: Colors.primary,
						underlineColor: "transparent",
					},
				}}
				onFocus={() => setFocused(true)}
				onBlur={() => {
					setFocused(false);
				}}
				placeholder={props.label}
				value={props.value}
				keyboardType="default"
				onChangeText={(text) => onChange(text)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		padding: 12,
		borderColor: Colors.gray1,
	},
	input: {
		color: Colors.black,
		borderWidth: 2,
		borderRadius: 4,
		fontSize: 20,
		paddingVertical: 8,
		paddingHorizontal: 8,
	},
	text: { fontSize: 16 },
});

export default UserTextInputs;
