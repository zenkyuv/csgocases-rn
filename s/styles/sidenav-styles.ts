import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: 'red',
		maxWidth: "10%",
		alignItems: "center"
	},
	elContainer: {
		width: "100%",
		alignItems: "center",
		height: 50,
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "black",
	},
	iconMain: {
		width: 60,
		height: 30,
	},
	icon: {
		width: 30,
		height: 30,
		marginTop: 20,
		marginBottom: 20
	}
});
