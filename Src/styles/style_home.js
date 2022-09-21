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
        // flex: 1,
        // justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingTop: 80
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
    lastLesson: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    colLes1: {
        width: Dimensions.get('screen').width / 2.4,
        height: 300,
        backgroundColor: '#ff9051',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colLes2: {
        width: Dimensions.get('screen').width / 2.4,
        height: 300,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2'
    },
    les1: {
        width: Dimensions.get('screen').width / 2.4,
        height: 180,
        backgroundColor: '#81beff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    les2: {
        marginTop: 20,
        width: Dimensions.get('screen').width / 2.4,
        height: 100,
        backgroundColor: '#724e8c',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    les_title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    les_text: {
        fontSize: 16,
        marginTop: 2,
        color: 'white',
    },
    floatButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width,
        height: 100,
        position: 'absolute',
        bottom: 3,
        backgroundColor: '#00092c',
        borderRadius: 100,
    }
});
