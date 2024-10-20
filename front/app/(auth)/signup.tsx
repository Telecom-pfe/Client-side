import { StyleSheet, View, Text,Button , TextInput, Image ,Pressable, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form"
import YupPassword from 'yup-password'
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
YupPassword(yup)
 function Signup() {




const schema = yup.object().shape({
  Email:yup.string().email("invalid email format").required("this field is required"),
  Password:yup.string().password().required("this field is required"),
  
  ConfirmPassword:yup.string().required("this field is required ").oneOf([yup.ref("Password")], "Password do not match")
})


  interface FormData  {
    Email: string
    Password: string
    ConfirmPassword : string
  }

  
  interface inputs {
    Email: string ;
    Password : string ;
    ConfirmPassword : string
  }


  const {
    control,
    handleSubmit,
    formState: { errors },
   
  } = useForm<FormData>({
    resolver:yupResolver(schema),
    defaultValues: {
      Email: "",
      Password: "",
      ConfirmPassword :""
    },
  })
  const onSubmit = (inputs:inputs) => {
    
   
  }

  return (
    <View style={styles.maincontainer}>
      <View >
        <Image
        style={styles.logo}
        source={require("../../assets/images/no background.png")}
        />
        
        </View>

        <View >
        <Text style={styles.title} >inscrivez-vous</Text>
        </View>
        <Text style={styles.Email}>Email</Text>
      <Controller
        control={control}
       
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
          />
        )}
        name="Email"
      />
      {errors.Email && <Text style={styles.errorpassword}>{errors.Email.message}</Text>}
      
      <View style={styles.passwordcontainer} >
      <Text style={styles.password}>
          Password
         </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            secureTextEntry={true}
          />
        )}
        name="Password"
      />
        {errors.Password && <Text style={styles.errorpassword} >{errors.Password.message}</Text>}
</View>

<View style={styles.passwordcontainer} >
      <Text style={styles.password}>
            Confirm  Password
         </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="ConfirmPassword"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            secureTextEntry={true}
          />
        )}
        name="ConfirmPassword"
      />
        {errors.ConfirmPassword && <Text style={styles.errorpasswordConfirmation} >{errors.ConfirmPassword.message}</Text>}
</View>


<View style={styles.button2} >
        <Pressable  onPress={handleSubmit(onSubmit)} >
          <Text  style={styles.buttontext}>Submit</Text>
        </Pressable>
       </View>
        <View style ={styles.position} >
      <Text style={styles.account}>
        Don't have an accout ?  <Pressable    ><Text style={styles.navigation}>sign in</Text></Pressable>
       </Text>
       </View>
    </View>
  )
}
export default Signup

const styles = StyleSheet.create({
  logo: {
   
    width: 150,
    height: 100,
    marginBottom:40,
  },
  title : {
    marginLeft : 50,
    marginTop: -40,
    fontSize : 25,
  },
  Email : {
    color : "grey",
    marginRight : 240 ,
    marginTop : 30
  
  },
  name: {
    marginLeft : 80,
    marginTop : -80,
    color : "#F26268" , 
    fontSize : 20,
    paddingBottom : 60
  } , 
  input : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
     borderRadius : 20 , 
     width : 300 , 
    color : "black" ,
     
    
  },
  container : {
marginTop : 30
  } , 
container1 : {
  marginTop : 50
    },

 navigation : {
  color : "#1DBED3",
  fontSize : 15,
 } ,

 position : {
  marginTop : 50,
  marginLeft : 20
 },

 account : {
   color : "#888888",
   fontSize : 15,
 },

 password : {
 
  marginLeft : 15 ,
  color : "grey" ,
 },

 maincontainer:{
flex : 1 , 
justifyContent : "center",
alignItems:"center",
marginTop : 10

 },button: {
  marginTop: 15,
  marginLeft: 10,
  height: 50,
  width: 200,
  backgroundColor: '#F26268',
  borderRadius: 10,
  elevation: 3, // for Android
},
buttonText: {
  marginTop: 10,
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: 16,
  textAlign: 'center',
},

passwordcontainer :{
marginTop : 20
},
 
errorpassword : {
  marginLeft : 70,
  color: "red"
},

errorpasswordConfirmation :{
  marginLeft : 110,
 color: "red"
},


button2: {
  marginTop : 50,
  backgroundColor: "#1DBED3",
  width : 200,
  height : 25,
  borderRadius : 30

},

buttontext :{
  textAlign : "center",
  marginTop : 6,
  color : "white"
  
},




    
  });