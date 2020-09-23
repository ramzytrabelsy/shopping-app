
<h1 align="center"> React Native Shopping App</h1>

<p align="center">This shopping app is developed with react native developer who wants to build a shopping app. The goal of this boilerplate is demo how to config react native project with react navigation & state management redux </p>


Packages & Libraries used
=======

* [React Native](https://www.npmjs.com/package/react-native) - A framework for building native apps with React.
* [React](https://www.npmjs.com/package/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
* [React navigation 5](https://reactnavigation.org) - Routing and navigation for your React Native apps.
* [redux](https://redux.js.org) - Redux is a predictable state container for JavaScript apps.
* [react-redux](https://react-redux.js.org) - React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
* [React native vector icons](https://www.npmjs.com/package/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.

Steps to Run the Project in Development Mode
=======
Use the below commands to clone the project and enter inside the directory
After that install the dependencies.
```
git clone https://github.com/ramzytrabelsy/shopping-app.git
cd shopping-app
yarn install
```

### IOS
We can directly run the app
```
npx react-native run-ios
```

### Facing any error related to pods in ios
We need to install the pods
```
sudo gem install cocoapods
cd ios
pod install
cd ..
npx react-native run-ios
```

### Android
We can directly run the app
```
npx react-native run-android
```
