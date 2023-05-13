import {TailwindProvider} from "tailwindcss-react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from "./screens/home/HomeScreen";
import {MemoScreen} from "./screens/memo/MemoScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Memo" component={MemoScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
  );
}
