import {styles} from "../styles/mainpage-styles"
import Sidenav from "./sidenav";
import Inventory from "./inventory";
import { useContext } from "react";
import PageStore  from "../states-store/states/page-store";
import { observer } from "mobx-react-lite";
import { ImageBackground, View } from "react-native";
const Mainpage = observer(() => {
const pageStore = useContext(PageStore);
	return (
		<View style={styles.container}>
				<ImageBackground source={require("../images/panorama.jpg")} style={styles.image}>
						<Sidenav />
						{pageStore.inventoryVisible ? <Inventory /> : null}
			</ImageBackground>
			</View>
			)})
export default Mainpage;
