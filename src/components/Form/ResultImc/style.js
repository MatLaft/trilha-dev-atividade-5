import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ResultImc:{
        flex:1,
        marginTop:-10,
        paddingTop:10,
        paddingTop:10,
        borderRadius:10,
        alignItems: 'center',
        width: '100%'
    },
    NumberIMC:{
        fontSize:48,
        color:"#1CACD8",
        fontWeight:'bold'
    },
    information:{
        fontSize:18,
        color:'#1CACD8',
        fontWeight:'bold'
    },
    shareButton:{
        backgroundColor: '#24a0ed',
        height : 30,
        margin:10,
        paddingLeft: 10,
        paddingRight:10,
        alignItems: 'center',
        paddingVertical:6,
        borderRadius:60,
    },
    textShareButton:{
        color:'#FFF',
    },
    boxShare:{
        width: '100%',
        alignItems: 'center'
    }
});

export default styles