import React from 'react'
import {View,Text,TextInput,Image} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';

const LoginComponent=()=>{
    return(
        <Container>
            <Image height="40" width="40" source={require('../../assets/images/logo.png')} style={styles.logoImage}/>
    <Input
    label="Username"
    iconPosition="right"
    placeholder="Enter Username"
    //error={'This feild is required'}
    />
     <Input
    label="Password"
    placeholder="Enter Password"
    secureTextEntry={true}
    icon={<Text>Show</Text>}
    iconPosition="right"
    />
    <CustomButton primary title="Submit"/>

    </Container>

    )
}

export default LoginComponent;