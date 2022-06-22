import { StyleSheet,ImageBackground,Font } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom:0,
        //backgroundColor: '#ffff',
        alignItems:'center',
        borderTopLeftRadius :30,
        borderTopRightRadius: 30,
        marginTop: 30
    },
    image:{
        flex: 1,    
        borderRadius:50,
        width:'100%',
        overflow:'hidden',
        alignItems:'center',
        position: 'absolute',
        top:-18,
        paddingBottom:'100%',
        
    },
    calctext:{
        marginTop:20,
        color:'#fff',
        fontWeight:'bold',
        //fontFamily:''
    },
    form:{
        width: '100%',
        height: 'auto',
        marginTop:30,
        padding: 10,

    },
    formLabel:{
        color:'#FFF',
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width: '90%',
        borderRadius:50,
        backgroundColor: '#f6f6f6',
        height : 50,
        margin:10,
        paddingLeft: 10,

    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        //justifyContent: 'flex-start',
        width: '90%',
        fontSize: 24,
        backgroundColor:'#1CACD8',
        paddingTop:13,
        paddingBottom:13,
        marginLeft: 12,
        margin: 10,
    },
    textButtonCalculator:{
        fontSize: 20,
        color:"#FFF"

    },
    errorMessage:{
        fontSize:12,
        color:'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    shareButton:{
        width: '18%',
        borderRadius:60,
        backgroundColor: '#24a0ed',
        height : 30,
        margin:10,
        paddingLeft: 10,
        alignItems: 'center',
        paddingVertical:6
    },
    textShareButton:{
        color:'#FFF',
        
    }
});

export default styles