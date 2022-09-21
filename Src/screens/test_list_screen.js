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
import SelectDropdown from 'react-native-select-dropdown'

export default function TestListScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Menu</Text>
                    <TouchableOpacity style={styles.searchBox}>
                        <FontAwesome
                            name="search"
                            color='#00092c'
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.profile}>
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                        }}
                        source={{
                            uri: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KGMN7pZGaI8AX-dAn34&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9P8iIRndfoTijtvar-DFXRUvagJLCpoUQD12eCOaFwHw&oe=634CFC78'
                        }}
                        resizeMode='contain'
                    />
                    <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                        <Text style={{ fontSize: 18, color: '#000', fontWeight: '500' }}>Your name</Text>
                        <Text style={{ fontSize: 16, color: 'grey', }}>See your personal information</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ margin: 12, borderBottomColor: '#ccc', borderBottomWidth: 1 }}></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, width: "100%", backgroundColor: '#fff' },
    header: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    text_header: {
        color: '#00092c',
        fontWeight: 'bold',
        fontSize: 30,
    },
    searchBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        top: 40, right: 20
    },
    profile: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 12
    },
    boxText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 12
    },
    rowBtn: {
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    borderBt: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})