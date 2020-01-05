import PhonesPage from './components/PhonesPage.js'

new PhonesPage(
  document.querySelector('App')
);

// const obj = {
//
//   callbackMap: {},
//
//   subscribe(eventName, callback) {
//
//     if (!this.callbackMap[eventName]) {
//       this.callbackMap[eventName] = [];
//     }
//
//     this.callbackMap[eventName].push(callback);
//   },
//
//   emit(eventName, data) {
//     const callbacks = this.callbackMap[eventName];
//
//     if (!callbacks) {
//       return;
//     }
//
//     for (const callback of callbacks) {
//       callback(data)
//     }
//   },
// };
//
// obj.subscribe('click', (data) => {
//   console.log('clicked', data);
// });
// obj.subscribe('click', (data) => {
//   console.log('clicked111', data);
// });
//
// obj.emit('click', 999);


