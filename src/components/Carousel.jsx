"use client";
import { useState } from "react";
import { Box, SimpleGrid, Button, Text, Heading } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "Grilled Tomatoes at Home",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/1.png",
  },
  {
    title: "Snacks for Travel",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/2.png",
  },
  {
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/3.png",
  },
  {
    title: "How To Grill Corn",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/4.png",
  },
  {
    title: "Crunchwrap Supreme",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/5.png",
  },
  {
    title: "Brocolli Cheese Soup",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/6.png",
  },
];

export default function Carousel() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box px={8} py={12} mt="16">
      <Heading
        as="h1"
        fontSize="4xl"
        ml="12"
        mb="14"
        color="#0E2368"
        fontWeight="semibold"
        overflowY="hidden"
      >
        Latest Articles
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={4} mb={8} placeItems="center">
        {currentRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            description={recipe.description}
            imageSrc={recipe.imageSrc}
          />
        ))}
      </SimpleGrid>

      <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
        <Button
          onClick={() => setPage(page - 1)}
          isDisabled={page === 1}
          size="sm"
          border="solid 1px"
          borderRadius="sm"
          borderColor={page === 1 ? "#AFAFAF" : "#424961"}
          color={page === 1 ? "#AFAFAF" : "#424961"}
        >
          &lt;
        </Button>
        <Text color="#424961" fontFamily="sans-serif">
          {page}/{totalPages}
        </Text>
        <Button
          onClick={() => setPage(page + 1)}
          isDisabled={page === totalPages}
          size="sm"
          border="solid 1px"
          borderRadius="sm"
          borderColor={page === totalPages ? "#AFAFAF" : "#424961"}
          color={page === totalPages ? "#AFAFAF" : "#424961"}
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
}
