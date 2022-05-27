import {styles} from "../styles/sidenav-styles"
import { useContext, useState } from "react";
import PageStore from "../states-store/states/page-store";
import { Image, Pressable, View } from "react-native";
import BlurView from "expo-blur/build/BlurView";

const Sidenav = () => {
	const pageStore = useContext(PageStore);
	let [bool, setBool] = useState(false)
      return(
				<BlurView style={styles.container}>
					<View style={styles.elContainer}>
						<Image style={styles.iconMain} source={require("../images/csgo-icon.png")} />
					</View>
					<Pressable onPress={() => {pageStore.setInventoryVisible(bool), setBool(!bool)}}>
					<Image style={styles.icon} source={require("../images/case-icon.png")} />
					</Pressable>
				</BlurView>
      );
}
export default Sidenav;