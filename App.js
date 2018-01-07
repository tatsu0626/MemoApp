import { StackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen'

const App = StackNavigator({
  Home:{ screen:MemoListScreen }
});

export default App;
