import { useState } from "react"
import { Pressable, Text, View } from "react-native"

const CaseOpener = () => {
const [showContainer, setContainer] = useState(false)
const knife = {
		co: "knife",
		skin: "tooth",
		rzadkosc: "red",
		img: require("../images/knife.png")
	}
	const cases = {
		co: "case",
		skin: "tooth",
		rzadkosc: "red",
		img: require("../images/briefcase4.png")
	}


	const randomSkins = [knife, knife, knife, knife, knife, knife, knife, knife, knife, knife, knife]
	const renderCaseSkins = () => {
		return (randomSkins.map(s => <div></div>))
	}

	return (
		<View>
			<Text>elo</Text>
			{showContainer ? renderCaseSkins() : null}
			<Pressable onPress={() => setContainer(true)}>Unlock Container</Pressable>
		</View>
)
}

export default CaseOpener