import { Box, Divider, Heading } from "@chakra-ui/react";

import Link from "next/link";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const projects = trpc.useQuery(["projects.getAll"]);

  return (
    <>
      <Box py="8" px="5">
        <Heading size="md" mb="4 ">
          Projects
        </Heading>
        <Divider />

        <div className="mt-4">
          {projects.data &&
            projects.data.map((project) => (
              <p key={project.id}>
                <Link href={`/projects/${project.id}`}>
                  {`#${project.id} - ${project.name}`}
                </Link>
              </p>
            ))}
        </div>
      </Box>
    </>
  );
};

export default Home;
