import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Text style={[styles.title]}>English learning</Text>
                <Text style={{
                    color: '#00092c',
                    fontSize: 30,
                }}>for you</Text>
            </View>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../images/splash.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                    borderRadius={12}
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: '#a4b1c2'
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title]}>Let's make your English more fluent</Text>
                <Text style={styles.text}>The easy way to learn English with your child</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <LinearGradient
                            colors={['#00094c', '#00092c']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Start learning</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topbar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#00092c',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#00092c',
        marginTop: 8
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        borderColor: 'pink'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
