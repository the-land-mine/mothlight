import {
  Box,
  HStack,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import type { NextPage } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatusCard = ({ children }: any) => {
  return <Stat className="border p-5 rounded-lg">{children}</Stat>;
};

const Home: NextPage = () => {
  return (
    <>
      <Box py="8" px="5">
        <Heading size="md" mb="4 ">
          Dashboard
        </Heading>

        <div className="mt-4">
          <HStack>
            <StatusCard>
              <StatLabel>Projects</StatLabel>
              <StatNumber>10</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
              </StatHelpText>
            </StatusCard>
            <StatusCard>
              <StatLabel>Pending</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                9.05%
              </StatHelpText>
            </StatusCard>{" "}
            <StatusCard>
              <StatLabel>Resolved</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                50.05%
              </StatHelpText>
            </StatusCard>{" "}
            <StatusCard>
              <StatLabel>Reopen</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                50.05%
              </StatHelpText>
            </StatusCard>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default Home;
