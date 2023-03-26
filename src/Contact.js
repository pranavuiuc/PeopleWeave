import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const toast = useToast();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };
      emailjs
        .send(
          "service_x6shxbm",
          "template_pc4plrn",
          templateParams,
          "Th41k3yqf-JtMwsIv"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            toast({
              title: "Query sent",
              description: "Your query has been sent successfully.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
            toast({
              title: "Error",
              description: "An error occurred. Please try again later.",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        );
    };
  
    return (
      <Box
        bg="#F3F4F6"
        p={8}
        maxW={{ base: "xl", md: "2xl" }}
        mx="auto"
        mt={16}
        boxShadow="md"
        borderRadius="md"
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Your Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>
            Submit
          </Button>
        </form>
      </Box>
    );
}

export default Contact;