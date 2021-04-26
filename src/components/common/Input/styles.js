import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
wrapper:{
    height:42,
    borderColor: colors.grey,
    borderWidth:1,
    borderRadius:4,
    paddingHorizontal:9,
    marginTop:5,
},
textInput:{
    flex:1,
    width:'100%',
},
inputContainer:{
    paddingVertical:13,
},
error:{
    color:colors.danger,
    paddingTop:4,
    fontSize:12,
}
})