function generateDynamicContent(ageGroup, category) {
    // Define content templates based on age group and category
    const contentTemplates = {
      child: {
        literature: "Read this story about a brave little mouse!",
        science: "Learn about the solar system and the planets!",
        history: "Explore ancient civilizations and their mysteries!"
      },
      teen: {
        literature: "Discover classic novels and their timeless themes!",
        science: "Dive into the world of chemistry and conduct fun experiments!",
        history: "Uncover the events that shaped the modern world!"
      },
      adult: {
        literature: "Explore contemporary fiction and thought-provoking literature!",
        science: "Stay updated with the latest scientific discoveries and breakthroughs!",
        history: "Delve deep into historical events and their impact on society!"
      }
    };
  
    // Check if the selected age group and category have content templates
    if (contentTemplates[ageGroup] && contentTemplates[ageGroup][category]) {
      // If yes, return the corresponding content
      return contentTemplates[ageGroup][category];
    } else {
      // If no, return a default message
      return "Sorry, content not available for the selected age group and category.";
    }
  }

    export { generateDynamicContent };
  