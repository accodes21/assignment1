"use client";
import { useState } from "react";
import { Box, SimpleGrid, Button, Text } from "@chakra-ui/react";
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
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/4.png",
  },
  {
    title: "Post-workout Recipes",
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    imageSrc: "/5.png",
  },
  {
    title: "Post-workout Recipes",
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
    <Box p={8}>
      <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={8}>
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
        >
          &lt;
        </Button>
        <Text>
          {page}/{totalPages}
        </Text>
        <Button
          onClick={() => setPage(page + 1)}
          isDisabled={page === totalPages}
          size="sm"
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
}
