import { StackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import firebase from 'firebase';
import ENV from './env.json';

require("firebase/firestore");

const config = {
  apiKey: ENV.FIREBASE_API_KET,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STRAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
Login:{screen:LoginScreen},
Signup:{screen:SignupScreen},
Home:{screen:MemoListScreen},
MemoDetail:{screen:MemoDetailScreen},
MemoEdit:{screen:MemoEditScreen},
MemoCreate:{screen:MemoCreateScreen},
},{
  navigationOptions:{
  headerTitle:'Memot',
  headerTintColor:'#fff',
  headerBackTitle:null,
  headerStyle:{
    backgroundColor:'#265366',
  },
  headerTitleStyle:{
    color:'#fff',
  },
  },
});

export default App;
