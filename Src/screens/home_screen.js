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
    Modal,

} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SignUpScreen from './register-screen';
import { useTheme } from 'react-native-paper';

const ListTopic = [
    {
        id: '0',
        topic_name: 'Colors',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rainbow-diagram-ROYGBIV.PNG/640px-Rainbow-diagram-ROYGBIV.PNG'
    },
    {
        id: '1',
        topic_name: 'Body',
        image: 'https://img.favpng.com/19/25/7/thumb-clip-art-hand-vector-graphics-finger-png-favpng-x2Z2SfVWFCdpbniz5mXDbrA8u.jpg'
    },
    {
        id: '2',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
    {
        id: '3',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
    {
        id: '4',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
    {
        id: '5',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
    {
        id: '6',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
    {
        id: '7',
        topic_name: 'Food',
        image: 'https://toppng.com/uploads/preview/apple-fruit-11526067113bpkdzjmq8g.png'
    },
];

const ListLesson = [
    {
        id: '0',
        les_name: 'Vocabulary',
        image: 'https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-15.png',
        image_color: 'brown'
    },
    {
        id: '1',
        les_name: 'Communication',
        image: 'https://cdn-icons-png.flaticon.com/512/493/493808.png',
        image_color: 'green'
    },
    {
        id: '2',
        les_name: 'Grammar',

        image: 'https://cdn-icons-png.flaticon.com/512/32/32329.png',
        image_color: 'yellow'
    },
    {
        id: '3',
        les_name: 'Reading',
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/education-school/read-book-icon.png',
        image_color: 'red'
    },
    {
        id: '4',
        les_name: 'Writing',
        image: 'https://static.thenounproject.com/png/29383-200.png',
        image_color: '#a4b1c2'
    },
    {
        id: '5',
        les_name: 'Listen',
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/listen-listening-icon.png',
        image_color: '#00092c'
    },
    {
        id: '6',
        les_name: 'Speaking',
        image: 'https://icon-library.com/images/speak-icon-png/speak-icon-png-29.jpg',
        image_color: '#fff'
    },
    {
        id: '7',
        les_name: 'Pronunciation',
        image: 'https://icon-library.com/images/pronunciation-icon/pronunciation-icon-18.jpg',
        image_color: '#fff'
    },
];

const ItemTopic = ({ topic_name, image }) => (
    <TouchableOpacity style={styles.itemTopic}>
        <Image
            style={styles.topic_image}
            source={{
                uri: image,
            }}
        />
        <Text style={{ fontSize: 16 }}>{topic_name}</Text>
    </TouchableOpacity>
);

const ItemLesson = ({ les_name, image, image_color }) => (
    <TouchableOpacity style={styles.itemLesson}>
        <Image
            style={styles.les_image}
            source={{
                uri: image,
            }}
            tintColor='white'
        />
        <View style={{ flexDirection: 'column', marginLeft: 12 }}>
            <Text style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}>{les_name}</Text>
            <Text style={{ fontSize: 16, color: '#fff', }}>studied</Text>
        </View>
        <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: '#6f9e8f', position: 'absolute', right: 10, }}></View>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const { colors } = useTheme();
    const renderItemTopic = ({ item }) => (
        <ItemTopic topic_name={item.topic_name} image={item.image} />
    );
    const renderItemLesson = ({ item }) => (
        <ItemLesson les_name={item.les_name} image={item.image} color={item.image_color} />
    );
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FlatList
                            numColumns={4}
                            data={ListTopic}
                            renderItem={renderItemTopic}
                            keyExtractor={item => item.id}
                        />
                        <View style={{
                            alignSelf: 'flex-end',
                            position: 'absolute',
                        }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Ionicons
                                    name="close"
                                    color='grey'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <ScrollView nestedScrollEnabled={true}>
                <View style={[styles.container, modalVisible ? { backgroundColor: 'rgba(0,0,0,0.5)' } : '']}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Choose what</Text>
                        <Text style={{
                            color: '#00092c',
                            fontSize: 30
                        }}>to learn today?</Text>

                    </View>

                    <View style={styles.searchBox}>
                        <FontAwesome
                            name="search"
                            color={colors.text}
                            size={30}
                            style={{ padding: 12 }}
                        />
                        <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search..." placeholderTextColor={'grey'} />
                    </View>

                    <View style={styles.topic}>
                        <FlatList

                            horizontal
                            data={ListTopic}
                            renderItem={renderItemTopic}
                            keyExtractor={item => item.id}
                        // scrollEnabled={false}
                        />
                        <TouchableOpacity style={styles.more_topic} onPress={() => setModalVisible(true)}>
                            <Ionicons
                                name="ellipsis-horizontal-outline"
                                color={colors.text}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40 }}>Last topics</Text>

                    <View style={styles.lastTopic}>
                        <TouchableOpacity style={styles.colTopic1}>
                            <Image
                                style={{ height: 160, width: 90, marginBottom: 20 }}
                                source={{
                                    uri:
                                        'https://cdn.pixabay.com/photo/2012/05/07/13/00/giraffe-48393_1280.png',
                                }}
                                resizeMode='stretch'

                            />
                            <Text style={styles.pic_title}>Animals</Text>
                            <Text style={styles.pic_text}>80 words</Text>
                        </TouchableOpacity>

                        <View style={styles.colPic1}>
                            <TouchableOpacity style={styles.pic1}>
                                <Image
                                    style={{ height: 70, width: 140, marginBottom: 20 }}
                                    source={{
                                        uri:
                                            'https://snipstock.com/assets/cdn/png/099a1aa2e48373b5e9204a84d6c65bf1.png',
                                    }}
                                    resizeMode='stretch'
                                />
                                <Text style={styles.pic_title} >Sea life</Text>
                                <Text style={styles.pic_text}>80 words</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.pic2}>
                                <Image
                                    style={{ height: 40, width: 60, marginRight: 6 }}
                                    source={{
                                        uri:
                                            'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
                                    }}
                                    resizeMode='stretch'
                                />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.pic_title} >Insects</Text>
                                    <Text style={styles.pic_text}>80 words</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>Practise</Text>

                </View>
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={ListLesson}
                        renderItem={renderItemLesson}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
            {/* <TouchableOpacity
                style={styles.floatButton}
            >
              
            </TouchableOpacity> */}
        </SafeAreaView>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    modalView: {
        marginTop: 80,
        backgroundColor: "white",
        borderRadius: 20,
        paddingRight: 12,
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: Dimensions.get("window").height,
    },

    buttonClose: {
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        paddingBottom: 50,
        paddingTop: 60
    },
    text_header: {
        color: '#00092c',
        fontWeight: 'bold',
        fontSize: 30
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderColor: '#000',
        height: 60,
        borderRadius: 12,
    },
    topic: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTopic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center', alignItems: 'center',
        marginLeft: 12,
        marginTop: 20
    },
    topic_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    more_topic: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center', alignItems: 'center',
        marginLeft: 12,
        marginTop: 20
    },
    lastTopic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    colTopic1: {
        width: Dimensions.get('screen').width / 2.4,
        height: 300,
        backgroundColor: '#ff9051',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colPic1: {
        width: Dimensions.get('screen').width / 2.4,
        height: 300,
        flexDirection: 'column',
    },
    pic1: {
        width: Dimensions.get('screen').width / 2.4,
        height: 180,
        backgroundColor: '#81beff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic2: {
        marginTop: 20,
        width: Dimensions.get('screen').width / 2.4,
        height: 100,
        backgroundColor: '#724e8c',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pic_title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    pic_text: {
        fontSize: 16,
        marginTop: 2,
        color: 'white',
    },
    itemLesson: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('screen').width - 40,
        height: 80,
        backgroundColor: '#00843E',
        borderRadius: 20,
        shadowColor: '#0a5d',
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginVertical: 6,
    },
    les_image: {
        width: 40,
        height: 40,
        tintColor: '#00092c',
    }
    // floatButton: {
    //     borderWidth: 1,
    //     borderColor: 'rgba(0,0,0,0.2)',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: Dimensions.get('screen').width,
    //     height: 100,
    //     position: 'absolute',
    //     bottom: 3,
    //     backgroundColor: '#00092c',
    //     borderRadius: 100,
    // }
});
