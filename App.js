/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';

export default function App() {
  const [assets, setAssets] = useState([]);
  const [shownewscreen,setNewScreen]= useState(null);

  const handalNewScreen=(itm) =>{
    console.log(itm);
      setNewScreen(itm);}

  const loadAssets = async () => {
    const response = await fetch('https://testnets-api.opensea.io/api/v1/assets');
    const data = await response.json();
    setAssets(data.assets);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handalNewScreen(item)}>
            <Card image_url={item.image_url} name={item.name}/>
    </TouchableOpacity>

  );

  return (
    <View style={{ flex: 1 }}>

      {shownewscreen  ? (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Card image_url={shownewscreen.image_url} name ={shownewscreen.name}/>
      <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10,width:200,borderRadius:20,marginVertical:20 }} onPress={() => handalNewScreen(null)}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Back</Text>
      </TouchableOpacity>
      </View>):( <View>
        <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 10 }} onPress={() => loadAssets()}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Load</Text>
      </TouchableOpacity>
        <FlatList
        data={assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}/>
      </View>
      )}
    </View>
  );
}