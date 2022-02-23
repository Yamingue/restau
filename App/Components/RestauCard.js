import React, { PureComponent } from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class RestauCard extends PureComponent {

    render() {
        return <>
            <View style={{
                height: 245,
                margin: 8,
                borderRadius: 5,
                borderWidth: .2,
                backgroundColor: '#f0f8ff'
            }}>
                <Image style={{ height: 140, width: '100%' }} resizeMode='cover' source={require('./Restau.jpg')} />
                <Text style={{ margin: 3, fontSize: 18, color: '#000' }} >Restaurant Gloire</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons size={18} name='map-marker-outline' />
                    <Text style={{ fontSize: 13, color: '#808080' }} >Ngaoundere</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    justifyContent: 'space-around',
                    marginTop: 5,
                    alignItems: 'center',
                    height: 39
                }}>
                    <TouchableOpacity style={{
                        alignItems:'center'
                    }} onPress={e=>{this.props.navigation.navigate('Detail')}}>
                        <Octicons name='eye' size={25} color='#000' />
                        <Text>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        alignItems:'center'
                    }}>
                        <FontAwesome name='send-o' size={25} color='#000' />
                        <Text>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        alignItems:'center'
                    }}>
                        <Ionicons name='add-circle-outline' size={25} color='#000' />
                        <Text>Add Favori</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    }
}