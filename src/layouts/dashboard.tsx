import { Box, HStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/sidebar";

type Props = {
  children: ReactNode;
};

const Dashboard = ({ children }: Props) => {
  return (
    <>
      <HStack pl="200px" gap="0">
        <Sidebar />
        <Box
          flexGrow={1}
          width="100%"
          ml="0"
          minHeight="100vh"
          display="flex"
          flexDir="column"
        >
          <main className="flex-grow">{children}</main>
          <Footer />
        </Box>
      </HStack>
    </>
  );
};

export default Dashboard;
