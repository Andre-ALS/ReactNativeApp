import Reactotron from 'reactotron-react-native';

const tron = Reactotron
  .configure({ host: '192.168.40.104' })
  .useReactNative()
  .connect();
tron.clear();

console.tron = tron;
