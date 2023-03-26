import {
    Box,
    Flex,
    Heading,
    Text,
    Center,
    VStack,
    useColorModeValue,
    Image,
    UnorderedList, ListItem, List
  } from "@chakra-ui/react";

  
function Introduction() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      maxWidth="1200px"
      mx="auto"
      my={8}
      mt={8}
      
      p={8}
      borderRadius="xl"
    >
      <Box
        bg="purple.400"
        color="white"
        p={8}
        borderRadius="xl"
        alignSelf="flex-start"
        transform="translateX(-10%)"
        width="600px"
        height="300px"
        marginBottom={4}
        display="flex"
        alignItems="center"
        position="relative"
      >
        
        <div>
          <Heading mb={4}>Introduction</Heading>
          <Text>
          Hi, I'm Pranav, a freshman majoring in Computer Science with a passion for coding. Whether it's designing user interfaces, building software solutions or exploring new programming languages, I love the challenge of creating something from scratch and bringing it to life.
          </Text>
        </div>
      </Box>
      <Box
        bg="green.400"
        color="white"
        p={8}
        borderRadius="xl"
        alignSelf="flex-end"
        transform="translateX(10%)"
        width="600px"
        height="300px"
        marginBottom={4}
        display="flex"
        alignItems="center"
        position="relative"
      >
        
        <div>
          <Heading mb={4}>Fun facts about me</Heading>
          <Text>
            <UnorderedList>
              <ListItem>I'm an avid table tennis player</ListItem>
              <ListItem>I'm a fitness enthusiast and enjoy weightlifting</ListItem>
              <ListItem>I'm a big fan of science fiction and love reading books in the genre.</ListItem>
            </UnorderedList>
          </Text>
        </div>
      </Box>
      <Box
        bg="blue.400"
        color="white"
        p={8}
        borderRadius="xl"
        alignSelf="flex-start"
        transform="translateX(-10%)"
        width="600px"
        height="300px"
        marginBottom={4}
        display="flex"
        alignItems="center"
        position="relative"
      >
        
        <div>
          <Heading mb={4}>Why I want to join PeopleWeave</Heading>
          <Text>
          When I came across PeopleWeave, I was immediately drawn to its mission of improving the networking experience in academia. As an undergraduate in computer science, I understand the value of networking and how it can shape one's career. To be a part of a project that aims to facilitate these connections and create a platform for researchers to connect with each other is something I am truly excited about. I am confident that working at PeopleWeave will allow me to grow as a developer and make a meaningful impact.
          </Text>
        </div>
      </Box>
    </Flex>
  );

    
    
}

export default Introduction;