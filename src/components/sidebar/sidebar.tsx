import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Box
      height="100vh"
      width="200px"
      top="0"
      left="0"
      position="fixed"
      bg="gray.100"
    >
      <Box p="4" mb="2" display="flex" alignItems="center" gap="1">
        <Link href="/">
          <h1 className="text-xl md:text-xl leading-normal cursor-pointer font-extrabold text-gray-700">
            Bug<span className="text-blue-600">Tracker</span>
          </h1>
        </Link>
        <span className="text-xs text-gray-700">v0.0.1</span>
      </Box>
      <Link href="/">
        <Box cursor="pointer" py="1" px="4" display="flex" alignItems="center">
          Dashboard
        </Box>
      </Link>
      <Link href="/projects">
        <Box cursor="pointer" py="1" px="4" display="flex" alignItems="center">
          Projects
        </Box>
      </Link>
      <Link href="/settings">
        <Box cursor="pointer" py="1" px="4" display="flex" alignItems="center">
          Settings
        </Box>
      </Link>
    </Box>
  );
};

export default Sidebar;
