import React from 'react'
import { View, ScrollView } from 'react-native'
import Slider from "../compoenents/Slider";
import {Heading, Input, Box, HStack, Text, VStack, Icon,Image, } from "native-base"
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";


const Profile = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
                <Box px="4" backgroundColor="#800080">
                    <Box my="3">
                        <HStack justifyContent="space-between" alignItems="center">
                            <HStack alignItems="center">
                                <Box mr="3">
                                    <Ionicons name="ios-location-sharp" 
                                            color="#ff748c" size={25}
                                    />
                                </Box>
                                <HStack alignItems="center">
                                    <Text color="#fff" fontSize="16" mr="3">Home -</Text>
                                    <Text color="#fff" >Floor No:4, istahara .....</Text>
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
                                    placeholder="Search" 
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
                <Box my="3">
                    <Slider />
                </Box>
                <Box px="4">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Trending Near You</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                    </ScrollView>
                </Box>
                <Box px="4" mt="3">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Explore By Categories</Text>
                    <HStack alignItems="center" justifyContent="space-around">
                        <VStack justifyContent="center">
                            <Image mt="2" size={70} borderRadius={100} 
                                source={require(`../images/biryani.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 1</Text>
                        </VStack>
                        <VStack justifyContent="center">
                            <Image mt="2"  size={70} borderRadius={100} 
                                    source={require(`../images/burger.jpg`)} 
                                    alt="Alternate Text" />
                                <Text textAlign="center" color="#999">Category 2</Text>
                        </VStack>
                        <VStack justifyContent="center">
                        <Image mt="2"  size={70} borderRadius={100} 
                                source={require(`../images/chinese.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 3</Text>
                        </VStack>
                        <VStack justifyContent="center">
                            <Image mt="2"  size={70} borderRadius={100} 
                                source={require(`../images/north.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 4</Text>
                        </VStack>
                    </HStack>
                    <HStack alignItems="center" justifyContent="space-around"> 

                        <VStack justifyContent="center" >
                        <Image   mt="2" size={70} borderRadius={100} 
                                source={require(`../images/omlete.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 5</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image  mt="2"  size={60} borderRadius={100} 
                                source={require(`../images/pizza.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 6</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                        <Image  mt="2" size={60} borderRadius={100} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 7</Text>
                        </VStack>
                        <VStack justifyContent="center" >
                            <Image  mt="2" size={60} borderRadius={100} 
                                source={require(`../images/south.jpg`)} 
                                alt="Alternate Text" />
                            <Text textAlign="center" color="#999">Category 8</Text>
                        </VStack>
                    </HStack>
                </Box>
                <Box pl="4" py="3" mt="3" backgroundColor="#D8BFD8">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">New Arrivals</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                    </ScrollView>
                </Box>
                <Box px="4">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">Blast Of Freshness</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                    </ScrollView>
                </Box>
                <Box my="3" mt="3">
                    <Slider />
                </Box>
                <Box pl="4" py="3" mt="3" backgroundColor="#7FFFD4">
                    <Text fontWeight={"semibold"} fontSize="17" mb="3">For Your Furry Friends</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                        <Box shadow="5" mr="3"  backgroundColor="#fff" p="2" borderRadius={10}>
                            <VStack justifyContent="center" px="1">
                                <Image 
                                    mt="2"
                                    size={75}
                                    margin="auto"
                                    mb="2"
                                    source={require(`../images/biryani.jpg`)} 
                                    alt="Alternate Text" />
                                <Text color="#000" fontSize="15">Bingo! angles...</Text>
                                <Text color="#b5b5b5" fontSize="15">65 g</Text>
                                <Text fontSize="13">$20</Text>
                                <Text fontSize="16">$19</Text>
                            </VStack>
                        </Box>
                    </ScrollView>
                </Box>
                <Box px="4" py="4">
                    <Text fontSize="40" fontWeight="bold" color="#b5b5b5">
                        Didn't find Whats you were looking for ?
                    </Text>
                </Box>
            </ScrollView>
    )
}

export default Profile
