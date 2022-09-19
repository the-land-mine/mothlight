import { Box, Heading } from "@chakra-ui/react";

import Head from "next/head";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from Mothlight" }]);

  return (
    <>
      <Box py="8" px="5">
        <Heading size="md" mb="4 ">
          Projects
        </Heading>

        <div className="mt-4">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </Box>
    </>
  );
};

export default Home;
