import { Text, View, Image } from "react-native"
import {styles} from "../styles/inventory-styles"
import BlurView from "expo-blur/build/BlurView";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from "react-native";
const Inventory = () => {

	const knife = {
		co: "knife",
		skin: "tooth",
		rzadkosc: "red",
		img: require("../images/knife.png")
	}

	const inven = [knife,knife,knife, knife, knife, knife, knife, knife, knife, knife, knife]

	return(
		<BlurView style={styles.container}>
			<Text style={styles.text}>Inventory</Text>
			<ScrollView>
			<View style={styles.itemsContainer}>
				{inven.map(i => <View style={styles.item}>
					<BlurView style={styles.iconContainer} intensity={100}><Image style={styles.icon} source={i.img} /></BlurView>
					<Text style={styles.itemText}>{i.co}</Text>
					<Text style={styles.itemText1}>{i.skin}</Text>
				</View>)}
				</View>
				</ScrollView>
	</BlurView>
)
}

export default Inventory