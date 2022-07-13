import React from 'react'
import { View, ScrollView } from 'react-native'
import Slider from "../compoenents/Slider";
import {Heading, Input, Box, HStack, Text, VStack, Icon,Image} from "native-base"
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Notifications = () => {
    return (
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
            <Box px="4">
                <Box my="3">
                    <HStack justifyContent="space-between" alignItems="center">
                        <Box>
                            <Text fontWeight={"bold"} fontSize="20">Home</Text>
                            <Text color="#999">Floor No:4, istahara building, vijetha super.....</Text>
                        </Box>
                        <Box>
                            <FontAwesome5 name="user-alt" size={30} /> 
                        </Box>
                    </HStack>
                </Box>
                <Box mb="3">
                    <VStack>
                        <VStack w="100%" space={5} alignSelf="center">
                            <Input  
                                placeholder="Search for restaurants, item or more" width="100%" 
                                py="3" px="3" fontSize="14" 
                                backgroundColor="#e5e5e5"
                                borderRadius="11"
                                // InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} 
                                InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" 
                                as={<MaterialIcons name="search" />} />} />
                        </VStack>
                    </VStack>
                </Box>
            </Box>
            <Box>
                <Slider />
            </Box>
            <Box my="3" px="4">
                <Text fontWeight={"semibold"} fontSize="17">What's on your mind?</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {/* {["biryani.jpg","burger.jpg","chinese.jpg","north.jpg",
                        "omlete.jpg","pizza.jpg","south.jpg"].map((name) => {
                            console.log('name')
                            console.log(name)
                    })} */}
                    <VStack justifyContent="center" mr="3">
                        <Image mt="2" size={60} borderRadius={100} 
                            source={require(`../images/biryani.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">Biryani</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image mr="3" mt="2"  size={60} borderRadius={100} 
                            source={require(`../images/burger.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">Burger</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image mr="3" mt="2"  size={60} borderRadius={100} 
                            source={require(`../images/chinese.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">Chinesse</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image mr="3" mt="2"  size={60} borderRadius={100} 
                            source={require(`../images/north.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">North</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image  mr="3" mt="2" size={60} borderRadius={100} 
                            source={require(`../images/omlete.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">Omlette</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image mr="3" mt="2"  size={60} borderRadius={100} 
                            source={require(`../images/pizza.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">Biryani</Text>
                    </VStack>
                    <VStack justifyContent="center" mr="3">
                    <Image mr="3" mt="2" size={60} borderRadius={100} 
                            source={require(`../images/south.jpg`)} 
                            alt="Alternate Text" />
                        <Text textAlign="center" color="#999">South</Text>
                    </VStack>
                </ScrollView>
            </Box>
            <Box my="3" px="4">
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    {
                        ["Sort by","Fast Delivery","Pure Veg", "Ratings 4+", "Offers"].map((name) => (
                            <Box borderRadius={"50"}  mr="2" borderWidth="1" px="4" py="1" borderColor="#999">
                                <Text>{name}</Text>
                            </Box>
                        ))
                    }
                    
                </ScrollView>
            </Box>
            <Box my="3" px="4">
                <Text fontWeight={"semibold"} fontSize="17">115 restaurants to explore</Text>
                <Box>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/biryani.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/burger.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/north.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/burger.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/north.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>
                    <HStack alignItems="center" mb="3">
                        <Box width="50%" >
                            <Image mt="2" 
                                size={200} 
                                borderRadius={10} 
                                source={require(`../images/biryani.jpg`)} 
                                alt="Alternate Text" />
                        </Box>
                        <Box width="50%" ml="3">
                            <Text fontSize="21" color="#000">Cruto's Cheese</Text>    
                            <Text fontSize="16" color="#000">3.8(100+) 42 mins</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ice cream</Text>    
                            <Text fontSize="14" color="#7f7f7f">Ayyapa Society</Text>    
                        </Box>
                    </HStack>

                </Box>
            </Box>
        </ScrollView>
    )
}

export default Notifications
