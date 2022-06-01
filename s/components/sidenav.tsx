import {styles} from "../styles/sidenav-styles"
import { useContext, useState } from "react";
import PageStore from "../states-store/states/page-store";
import { Image, Pressable, View, Text } from "react-native";
import BlurView from "expo-blur/build/BlurView";


const Sidenav = () => {
	const pageStore = useContext(PageStore);
	let [bool, setBool] = useState(false)
      return(
				<BlurView style={styles.container}>
					<View style={styles.elContainer}>
						<Image style={styles.iconMain} source={require("../images/csgo-icon3.png")} />
						<Text style={styles.text}>Clicker</Text>
					</View>
					<Pressable onPress={() => {pageStore.setInventoryVisible(bool), setBool(!bool)}}>
						<Image style={styles.icon} source={require("../images/briefcase.jpg")} />
					</Pressable>
				</BlurView>
      );
}
export default Sidenav;