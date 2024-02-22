import React, { useState } from "react";
import { Box, VStack, Heading, Input, Button, Textarea, useToast } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleGenerateArticle = () => {
    if (!title.trim()) {
      toast({
        title: "Error",
        description: "Title can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulating content generation
    setContent(`Generated content for "${title}"`);
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          <FaRobot /> AI Article Writer
        </Heading>
        <Input placeholder="Enter your article title..." size="lg" onChange={handleTitleChange} />
        <Button colorScheme="blue" size="lg" leftIcon={<FaRobot />} onClick={handleGenerateArticle} isDisabled={!title.trim()}>
          Generate Article
        </Button>
        <Textarea placeholder="Generated article content will appear here..." value={content} size="lg" minHeight="300px" isReadOnly />
      </VStack>
    </Box>
  );
};

export default Index;
