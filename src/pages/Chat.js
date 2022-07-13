import React from 'react'
import { View, ScrollView } from 'react-native'
import Slider from "../compoenents/Slider";
import {Heading, Input, Box, HStack, Text, VStack, Icon,Image, } from "native-base"
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";


const HomeScreen = () => {
    return (
        <>
        <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                 <Box px="4" backgroundColor="#018353">
                    <Box my="3">
                        <HStack justifyContent="space-between" alignItems="center">
                            <HStack alignItems="center">
                                <Box mr="3">
                                    <Ionicons name="ios-location-sharp" 
                                            color="#fff" size={25}
                                    />
                                </Box>
                                <HStack alignItems="center">
                                    <Text color="#fff" fontSize="16" mr="3">Home</Text>
                                </HStack>
                            </HStack>
                            <Box>
                                <FontAwesome5 name="user-circle" size={25} color="#fff" />
                            </Box>
                        </HStack>
                    </Box>
                    <Box mb="3">
                        <VStack>
                            <VStack w="100%" space={5} alignSelf="center">
                                <Input  
                                    placeholder="Search for an item in Dunzo Daily" 
                                    width="100%" 
                                    py="1" px="3" 
                                    fontSize="14" 
                                    backgroundColor="#e5e5e5"
                                    borderRadius="5"
                                    InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} 
                                    // InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" 
                                    // as={<MaterialIcons name="search" />} />} 
                                    />
                            </VStack>
                        </VStack>
                    </Box>
                </Box>
                <Box px="4" mt="3" backgroundColor="#fff" py="3">
                    <HStack alignItems="center" justifyContent="space-around">
                        <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center">
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center">
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center">
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-around"> 

                        <VStack justifyContent="center" >
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image mt="2" size={100}
                            resizeMode="contain"
                                source={require(`../images/d1.jpeg`)} 
                                alt="Alternate Text" />
                        </VStack>
                    </HStack>
                </Box>
                <Box mt="4" px="4" py="3" backgroundColor="#fff">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Curated For Your Needs</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                            <Box mr="5">
                                <Image
                                    size={"lg"} 
                                    borderRadius={5} 
                                    // width="100%"
                                    resizeMode="contain"
                                    source={require(`../images/d2.jpeg`)} 
                                    alt="Alternate Text" />
                            </Box>
                    </ScrollView>
                            
                 </Box>
                 <Box mt="4" px="4" py="3" backgroundColor="#fff">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Your Breakfast Needs</Text>
                    <HStack alignItems="center" justifyContent="space-around">
                            <VStack justifyContent="center">
                                <Image mt="2" size={100}
                                    resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-around"> 

                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d3.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                        </HStack>
                 </Box>
                 <Box mt="4" px="4" py="3" backgroundColor="#fff">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Munchies</Text>
                    <HStack alignItems="center" justifyContent="space-around">
                            <VStack justifyContent="center">
                                <Image mt="2" size={100}
                                    resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center">
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-around"> 

                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                            <VStack justifyContent="center" >
                            <Image mt="2" size={100}
                                resizeMode="contain"
                                    source={require(`../images/d4.jpeg`)} 
                                    alt="Alternate Text" />
                            </VStack>
                        </HStack>
                 </Box>
                 <Box px="4" mt="4">
                    <Image mt="2" 
                        width="100%"
                        resizeMode="contain"
                        source={require(`../images/d5.jpeg`)} 
                        alt="Alternate Text" />
                 </Box>
        </ScrollView>
        </>
    )
}

export default HomeScreen
