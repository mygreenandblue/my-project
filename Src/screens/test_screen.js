import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
    FlatList,
    Image,
    Dimensions,

} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SignUpScreen from './register-screen';
import { useTheme, Card } from 'react-native-paper';



const TestScreen = ({ navigation }) => {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={[styles.container,]}>
                    <View style={styles.header}>
                        <Image
                            source={require('../images/test.png')}
                            resizeMode='stretch'
                            style={{ width: 80, height: 80, marginRight: 12 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.text_header}>Choose one</Text>
                            <Text style={{
                                color: '#00092c',
                                fontSize: 28
                            }}>Test your level now!</Text>
                        </View>

                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('TestDetail')}
                        style={[styles.card, { backgroundColor: '#f2f2f2', borderColor: '#00092c', borderWidth: 1 }]}>
                        <Image
                            style={styles.card_image}
                            source={{
                                uri: 'https://www.freeiconspng.com/thumbs/easy-icon/easy-icon-5.png',
                            }}
                            resizeMode='stretch'
                        />
                        <Text style={[styles.card_title]}>Easy</Text>
                        <Text style={[styles.card_text]}>0/100 tests</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card,]}>
                        <Image
                            style={styles.card_image}
                            source={{
                                uri: 'https://seekicon.com/free-icon-download/medium_1.png',
                            }}
                            resizeMode='stretch'
                        />
                        <Text style={[styles.card_title]}>Medium</Text>
                        <Text style={[styles.card_text]}>0/100 tests</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { backgroundColor: '#ff9051', }]}>
                        <Image
                            style={styles.card_image}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Hard_Icon.png',
                            }}
                            resizeMode='stretch'
                        />
                        <Text style={[styles.card_title]}>Hard</Text>
                        <Text style={[styles.card_text]}>0/100 tests</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { backgroundColor: '#724e8c', }]}>
                        <Image
                            style={[styles.card_image,]}
                            source={{
                                uri: 'https://www.picng.com/upload/demon/png_demon_41357.png',
                            }}
                            resizeMode='contain'

                        />
                        <Text style={[styles.card_title]}>Nightmare</Text>
                        <Text style={[styles.card_text]}>0/100 tests</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.card, { backgroundColor: '#81beff', }]}>
                        <Image
                            style={styles.card_image}
                            source={{
                                uri: 'https://icon-library.com/images/calendar-of-events-icon/calendar-of-events-icon-20.jpg',
                            }}
                            resizeMode='stretch'
                        />
                        <Text style={[styles.card_title]}>Daily challenge</Text>
                        <Text style={[styles.card_text]}>imcomplete</Text>
                    </TouchableOpacity>



                </View>
            </ScrollView>
            {/* <TouchableOpacity
                style={styles.floatButton}
            >
              
            </TouchableOpacity> */}
        </SafeAreaView>

    );
};

export default TestScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        paddingBottom: 50,
        paddingTop: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_header: {
        color: '#00092c',
        fontWeight: 'bold',
        fontSize: 30
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#a4b2c1',
        borderRadius: 30,
        marginBottom: 12
    },
    card_image: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    card_title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#00092c',
        padding: 2
    },
    card_text: {
        fontSize: 16,
        color: '#00092c'
    }

});
