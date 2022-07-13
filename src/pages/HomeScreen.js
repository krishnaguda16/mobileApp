import React from 'react'
import { View, ScrollView } from 'react-native'
import Slider from "../compoenents/Slider";
import {Heading, Input, Box, HStack, Text, VStack, Icon,Image, } from "native-base"
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";


const HomeScreen = () => {
    return (
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <Box px="4">
                <Box my="3">
                    <HStack justifyContent="space-between" alignItems="center">
                        <HStack alignItems="center">
                            <Box mr="3">
                                <Ionicons name="ios-location-sharp" 
                                          color="#ff748c" size={25}
                                          /> 
                            </Box>
                            <VStack>
                                <Text fontWeight={"bold"} fontSize="20">Home</Text>
                                <Text color="#999">Floor No:4, istahara building, vijetha super.....</Text>
                            </VStack>
                        </HStack>
                        <Box>
                            <FontAwesome5 name="glass-martini" size={25} /> 
                        </Box>
                    </HStack>
                </Box>
                <Box mb="3">
                    <VStack>
                        <VStack w="100%" space={5} alignSelf="center">
                            <Input  
                                placeholder="Search for restaurants, item or more" width="100%" 
                                py="2" px="3" fontSize="14" 
                                backgroundColor="#e5e5e5"
                                borderRadius="11"
                                InputLeftElement={<Icon m="2" ml="3" size="6" color="#ff748c" as={<MaterialIcons name="search" />} />} 
                                // InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" 
                                // as={<MaterialIcons name="search" />} />}    
                            />
                        </VStack>
                    </VStack>
                </Box>
                <Box my="3">
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {
                            ["Sort by","Fast Delivery","Pure Veg", "Ratings 4+", "Offers"].map((name) => (
                                <Box borderRadius={"10"} boxShadow="10"  mr="2" borderWidth="1" px="4" py="1" borderColor="#999">
                                    <Text>{name}</Text>
                                </Box>
                            ))
                        }
                        
                    </ScrollView>
                </Box>
            </Box>
            <Box>
                {/* <Slider /> */}
            </Box>
            <Box my="3" px="4">
                <Text fontWeight={"semibold"} fontSize="17" mb="2">Eat what makes you happy</Text>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <HStack alignItems="center" justifyContent="space-around">
                        <VStack justifyContent="center">
                            <Image mt="2" size={70} borderRadius={100} 
                                source={require(`../images/biryani.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Biryani</Text>
                        </VStack>
                        <VStack justifyContent="center">
                            <Image mt="2"  size={70} borderRadius={100} 
                                    source={require(`../images/burger.jpg`)} 
                                    alt="Alternate Text" />
                                <Text textAlign="center" color="#999">Burger</Text>
                        </VStack>
                        <VStack justifyContent="center">
                        <Image mt="2"  size={70} borderRadius={100} 
                                source={require(`../images/chinese.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Chinesse</Text>
                        </VStack>
                        <VStack justifyContent="center">
                            <Image mt="2"  size={70} borderRadius={100} 
                                source={require(`../images/north.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">North</Text>
                        </VStack>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-around"> 

                        <VStack justifyContent="center" >
                        <Image   mt="2" size={70} borderRadius={100} 
                                source={require(`../images/omlete.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Omlette</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image  mt="2"  size={60} borderRadius={100} 
                                source={require(`../images/pizza.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Biryani</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image  mt="2" size={60} borderRadius={100} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">South</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                            <Image  mt="2" size={60} borderRadius={100} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">South</Text>
                        </VStack>
                    </HStack>
                </ScrollView>
            </Box>
            
            <Box my="3" px="4">
                <Text fontWeight={"semibold"} fontSize="17">Promoted Restaurants</Text>
                    <Box>
                    <ScrollView horizontal={true}>
                            <VStack mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/biryani.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text> 
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>
                                </Box>
                            </VStack>
                            <VStack mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/burger.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/south.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/north.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/burger.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/north.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/south.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                            <VStack alignItems="center" mb="3">
                                <Box mr="5" >
                                    <Image mt="2" 
                                        size={130} 
                                        borderRadius={10} 
                                        source={require(`../images/biryani.jpg`)} 
                                        alt="Alternate Text" />
                                </Box>
                                <Box mr="5" ml="3">
                                    <Text fontSize="16" color="#000">Cruto's Cheese</Text>    
                                    <Text fontSize="13" color="#000">3.8(100+) 42 mins</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ice cream</Text>    
                                    <Text fontSize="13" color="#7f7f7f">Ayyapa Society</Text>    
                                </Box>
                            </VStack>
                        </ScrollView>
                    </Box>
                
            </Box>

            <Box my="3" px="4">
                <Text fontWeight={"semibold"} fontSize="17" mb="2">All restaurants around you</Text>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10}>
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/1.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/2.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/3.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/4.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/1.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/2.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
                <Box shadow="4" backgroundColor="#fff" borderRadius={10} mt="4">
                    <Image 
                        mt="2" 
                        size="xl"
                        borderRadius={10}
                        width="100%" 
                        source={require(`../images/3.jpg`)} 
                        mb="2"
                        alt="Alternate Text" />
                    <Box p="2">
                        <Text fontWeight={"semibold"} fontSize="18" >Bawarchi Mughal Restaurant</Text>
                        <Text fontSize="14" >Hyderabad, North indian, Chinese    $200 for one</Text>
                        <Text fontSize="14" mb="2">40 mins 60% OFF</Text>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}

export default HomeScreen
