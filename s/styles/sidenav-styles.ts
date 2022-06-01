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
		height: 70,
		justifyContent: "center",
		borderBottomWidth: 1,
		borderBottomColor: "rgba(255,255,255,.5)"
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
	},
	text: {
		color: "rgba(255,255,255,.9)",
		fontWeight: "500",
	}
});
