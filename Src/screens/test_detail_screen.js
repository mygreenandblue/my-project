import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';

import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import { ScrollView } from 'react-native-virtualized-view';

const ListAnswer = [
    {
        id: '0',
        name: 'A.',
        answer: 'talk'
    },
    {
        id: '1',
        name: 'B.',
        answer: 'talked'
    },
    {
        id: '2',
        name: 'C.',
        answer: 'talking'
    },
    {
        id: '3',
        name: 'D.',
        answer: 'be talked'
    },
]

const ItemAnswer = ({ name, answer }) => (
    <TouchableOpacity style={styles.answerStyle}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{name}</Text>
        <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 6 }}>{answer}</Text>
    </TouchableOpacity>
);



export default function TestDetailScreen({ navigation: { goBack } }) {
    const renderItemAnswer = ({ item }) => (
        <ItemAnswer name={item.name} answer={item.answer} />
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.back, {}]}
                        onPress={() => goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='black'
                            size={30}
                        />
                    </TouchableOpacity>
                    <View style={[styles.count_down]}>
                        <CountDown
                            size={16}
                            until={3600}
                            onFinish={() => { alert('Finished') }}
                            digitStyle={{ backgroundColor: '#f2f2f2', }}
                            digitTxtStyle={{ color: 'black' }}
                            timeLabelStyle={{ color: 'green', fontWeight: 'bold', }}
                            separatorStyle={{ color: '#000' }}
                            timeToShow={['H', 'M', 'S']}
                            timeLabels={{ m: null, s: null }}
                            showSeparator
                        />
                    </View>
                    <TouchableOpacity style={[styles.submit, {}]}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.boxTest]}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#00092c', textAlign: 'center' }}>Correct word</Text>
                    <View style={[styles.boxQues]}>
                        <Text style={[styles.question]}>He was to shy to ..... to strangers.</Text>
                    </View>
                    <View style={styles.boxAnswer}>
                        <FlatList

                            data={ListAnswer}
                            renderItem={renderItemAnswer}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.continue}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.retry}>
                        <Ionicons
                            name="return-down-back-outline"
                            color='black'
                            size={30}
                        />
                        <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 6 }}>Retry</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, width: "100%", backgroundColor: '#fff', paddingHorizontal: 20, },
    header: {
        paddingTop: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingBottom: 60
    },
    back: {
        backgroundColor: '#ffb0bd',
        height: 50,
        width: 50,
        borderRadius: 25,
        position: 'absolute',
        top: 60,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    count_down: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit: {
        height: 50,
        width: 100,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 60,
        right: 0,
        backgroundColor: '#00843E',
        borderRadius: 25
    },
    boxTest: {
        borderWidth: 2,
        borderColor: "#00092c",
        width: '100%',
        height: Dimensions.get('screen').height / 1.6,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,

    },
    boxQues: {
        width: '100%',
        marginTop: 12,
        paddingVertical: 8,
        backgroundColor: '#136a62',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    question: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        padding: 20,
    },
    boxAnswer: {
        marginTop: 12,
    },
    answerStyle: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00092c',
        marginVertical: 8
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40
    },
    retry: {
        height: 50,
        width: 120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        borderColor: "#00092c",
        borderWidth: 1
    },
    continue: {
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00843E',
        borderRadius: 25,
    }
})