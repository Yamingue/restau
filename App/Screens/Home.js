import React, { PureComponent } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import RestauCard from '../Components/RestauCard'

export default class Home extends PureComponent {

    render() {
        return <>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#FFF',
                margin: 5,
                alignItems:'center',
                height:40

            }}>
                <TextInput
                placeholder='search place or town'
                style={{
                    width:'85%',
                    borderWidth:.5,
                }} />
                <TouchableOpacity style={{
                    width:'13%',
                    backgroundColor:'#000',
                    height:'100%',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Feather name='search' size={35} color='#fff' />
                </TouchableOpacity>
            </View>
            <ScrollView>

                <RestauCard {...this.props} />
                <RestauCard {...this.props} />
                <RestauCard {...this.props} />
                <RestauCard {...this.props} />
                <RestauCard {...this.props} />
            </ScrollView>
        </>
    }
}