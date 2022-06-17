import { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Main from "./s/main"
import UserStore from './s/states-store/states/userStore';
import SignPanel from "./s/components/signPanel"
import { observer } from 'mobx-react-lite';
const App = observer(() => {
const userStore = useContext(UserStore);

	useEffect(() => {
		console.log("zaladowalo sie")
	})

  return (
		<View style={styles.container}>
			{userStore.userLogged ? <Main/> : <SignPanel/>}
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App