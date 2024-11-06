// components/RecipeCard.js
import { Box, Image, Text, Button, Heading } from "@chakra-ui/react";

const RecipeCard = ({ title, description, imageSrc }) => {
  return (
    <Box
      as="article"
      border="1px solid #373737"
      borderRadius="2xl"
      p={4}
      maxW="sm"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="xl"
        textAlign="center"
        paddingY="1.5"
        paddingX="1"
      />
      <Box paddingX="6" paddingY="2">
        <Heading
          as="h2"
          fontSize="xl"
          mt={4}
          mb={2}
          color="#0E2368"
          fontWeight="bold"
          className="text-center md:text-left"
        >
          {title}
        </Heading>
        <Text color="#444957" fontSize="sm" mb={4} lineHeight="tall">
          {description}
        </Text>
        <Button
          colorScheme="blue"
          variant="outline"
          size="sm"
          border="solid 1px #424961"
          borderRadius="4xl"
          paddingX="1"
          color="#424961"
          fontSize="sm"
          fontWeight="500"
          fontFamily="sans-serif"
          className="w-full md:w-[33%]"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeCard;
