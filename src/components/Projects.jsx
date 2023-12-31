"use client";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Twitter Birthday Plea",
    description:
      "Created a landing page for Canadian Centre for Child Protection while working at the agency No Fixed Address. The design was provided for me and I had to implement it using Vue.js and delivered in 3 weeks.",
    image: "/images/projects/twitter-shot.jpg",
    previewUrl: "https://birthdayplea.com/en/",
    gitUrl: "https://github.com/eraynai/c3p-twitter-birthday",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Legal Simulation",
    description:
      "Created a quiz application for a Legal Simulation application that was created while I was working for Stitch Media. Built in React and deployed on AWS and delivered in 8 weeks.",
    image: "/images/projects/legal-shot.jpg",
    previewUrl: "https://modulearn.ca/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Cutting Edge Firewood",
    description:
      "While working at Acorn Strategy, I built several custom features for the Cutting Edge Firewood website including custom designed sections and implemented a geolocation api to only show certain products depending on what your zipcode is.",
    image: "/images/projects/cuttingEdge-shot.jpg",
    previewUrl: "https://www.cuttingedgefirewood.com/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Shopify"],
  },
  {
    id: 4,
    title: "Browne Trading Company",
    description:
      "While working at Acorn Strategy, I worked on the redesign of the site that was on Woocommerce and moving over to Shopify. I built several custom sections for the client including a custom blog for their receipes and a suggestion of products that they can purchase at the end of the blog using metafields.",
    image: "/images/projects/browneTrading-shot.png",
    previewUrl: "https://brownetrading.com/",
    gitUrl: "https://github.com/eraynai",
    tag: ["All", "Shopify"],
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Shopify"
          isSelected={tag === "Shopify"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
