import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from '../screens/splash_screen';
import SignInScreen from '../screens/login-screen';
import SignUpScreen from '../screens/register-screen';
import HomeScreen from '../screens/home_screen';
import MenuScreen from '../screens/menu_screen';
import TestScreen from '../screens/test_screen';
import GameScreen from '../screens/game_screen';
import TestDetailScreen from '../screens/test_detail_screen';

function AppNavigation() {

  const Tab = createBottomTabNavigator();
  const StartStack = createNativeStackNavigator();

  function StartStackScreen() {
    return (
      <StartStack.Navigator>
        <StartStack.Screen name="GetStart" component={SplashScreen} options={{ headerShown: false }} />
        <StartStack.Screen name="Login" component={SignInScreen} options={{ headerShown: false }} />
        <StartStack.Screen name="Register" component={SignUpScreen} options={{ headerShown: false }} />
        <StartStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </StartStack.Navigator>
    );
  }

  function TestStackScreen() {
    return (
      <StartStack.Navigator>
        <StartStack.Screen name="TestLevel" component={TestScreen} options={{ headerShown: false }} />
        <StartStack.Screen name="TestDetail" component={TestDetailScreen} options={{ headerShown: false }} />
      </StartStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Start'
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Study') {
              iconName = focused ? 'book-outline' : 'book-outline';
            } else if (route.name === 'Test') {
              iconName = focused ? 'school-outline' : 'school-outline';
            } else if (route.name === 'Game') {
              iconName = focused ? 'game-controller-outline' : 'game-controller-outline';
            } else if (route.name === 'Other') {
              iconName = focused ? 'menu-outline' : 'menu-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ff9051',
          tabBarInactiveTintColor: '#00092c',
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarStyle: {
          //   display:
          //     route.name === "Study"
          //       ? "none"
          //       : "flex",
          // }
        })}
      >

        <Tab.Screen name="Study" component={StartStackScreen} />
        <Tab.Screen name="Test" component={TestStackScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
        <Tab.Screen name="Other" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;