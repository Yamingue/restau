import React, { PureComponent } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

export default class Detail extends PureComponent {

    render(){
       return <ScrollView>
           <View style={{
               height:200,
               backgroundColor:'red',
               margin:5
           }}>
               <Image source={require('../Components/maps.jpg')}
               
               style={{ 
                   width:'100%',
                   height:'100%'
               }}/>
           </View>
            <View style={{
                margin:5
            }}>
                <TouchableOpacity style={{ alignItems:'center'}}>
                    <Feather name='map' color={'#000'} size={35}/>
                    <Text>Open on Map</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    }
}