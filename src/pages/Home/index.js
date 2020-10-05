import React from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import styles from './styles';

import book from '../../assets/Livro.png';

function Home () {
    return (
        <View style={styles.container}>
            <View style={styles.field} >
                <AntDesign 
                style={styles.searchIcon} 
                name="search1" 
                size={16} 
                color="white" 
                />
                <TextInput 
                placeholder="Pesquise Livros, Autores ou Lojas!"
                placeholderTextColor="white"
                style={styles.input}
                />
            </View> 
                <ScrollView>
                <View style={{flex:1, paddingTop:20 }} >
                    <Text style={styles.title}>
                        Talvez você se interesse por...
                    </Text>
                    
                    <View style={{height:200,marginTop:20}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA</Text>
                                </View>
                            </View>
    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA E VENDA</Text>
                                </View>
                            </View>    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>VENDA</Text>
                                </View>
                            </View>    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA E VENDA</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={{flex:1, paddingTop:20 }} >
                    <Text style={styles.title}>
                        Perto de você
                    </Text>
                    
                    <View style={{height:200,marginTop:20}}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA E VENDA</Text>
                                </View>
                            </View>
    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>VENDA</Text>
                                </View>
                            </View>    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA E VENDA</Text>
                                </View>
                            </View>    
                            
                            <View style={styles.border}>
                                <View style={{ flex:2 }}>
                                    <Image 
                                    source={book}
                                    style={{flex:1, width:null, height:null,rezideMode:'cover' }}/>
                                </View>
                                <View style={{ flex:1 }}>
                                    <Text>Título do produto</Text>
                                    <Text>Valor do produto</Text>
                                    <Text>TROCA</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>              
            </ScrollView>
        </View>

    );
}

export default Home