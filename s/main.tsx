import Mainpage from './components/mainpage';
import { StoresProvider, stores } from "./states-store/store";
import "./styles/root-styles.ts"
const Main = () => {
	return (
		<StoresProvider value={stores}>
			<Mainpage/>
		</StoresProvider>
	)
}
export default Main