import React, { useEffect, useState } from 'react'
import {
    View,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';


export default function PictureList(props) {

    const [list, setList] = useState([]);
    const keyExtractor = item => item.id;

    function onClick() {

    }

    useEffect(() => {
        if (props.list.length !== 0) {
            setList(props.list)
        } else {
            console.log('lista passada para o comp PictureList VAZIA')
        }

    }, [props.list])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={3}
                data={list}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => <PictureListItem onClick={props.onClick} item={item} />}
            />
        </View>
    );
}


function PictureListItem(props) {
    const { item } = props

    return (
        <TouchableHighlight onPress={() => { props.onClick(item) }}>
            <Image
                source={{ uri: item.url }}
                style={{
                    width: 80,
                    height: 80,
                }}
            />

        </TouchableHighlight>
    );
}