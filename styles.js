import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    safeAreaViewContainer: {
        flex: 1,
    },
    iconWrapper: {
        flex: 1,
        // paddingTop: 10,
        // marginLeft: 5,
        // flexDirection: "row",
    },
    welcomeWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    welcome: {
        fontSize: 32,
        marginBottom: -25
    },
    pointsRow: {
        paddingTop: 10,
        fontWeight: "600",
        fontSize: 15
    }, 
    dailyActionRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    detailsScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingBottom: 20
    },
    detailsMainText: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#FFC940",
    },
    miniHeader: {
        fontSize: 18,
        fontWeight: "600",
        alignSelf: "center"
    },
    chartHeader: {
        fontSize: 18,
        fontWeight: "600",
        alignSelf: "center",
        paddingVertical: 5
    },
    healthSectionHeader: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: "center",
        color: "#0E5A8A"
    },
    detailsSecondaryText: {
        fontSize: 18,
        padding: 10,
    },
    todayGoals: {
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: "600",
        alignSelf: "center"
    },
    checkedCheckbox: {
        backgroundColor: "#A7B6C2", 
        opacity: 0.5
    },
    healthScreen: {
        paddingHorizontal: 25,
        paddingBottom: 20
    },
    healthTitle: {
        fontSize: 32,
        paddingBottom: 10,
        marginTop: 6,
        // marginLeft: 80,
    },
    healthRow: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 2,
    },
    healthLabel: {
        fontSize: 18,
        paddingRight: 15,
        width: 150,
    },
    healthValue: {
        fontWeight: "600",
        fontSize: 18,
    },
    normalizedCheckbox: {
        marginLeft: 0,
        marginRight: 0
    },
    indentedCheckbox: {
        marginLeft: 40,
        marginRight: 0
    },
    linkContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    link: {
        flex: 2,
        fontSize: 18,
        fontWeight: '400',
        color: "blue",
    },
    separator: {
        backgroundColor: "#BFCCD6",
        height: 1,
    },
});

export { styles };
