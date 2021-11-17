import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Cv() {
  const lightGray = useColorModeValue("gray.500", "gray.400");
  const darkGray = useColorModeValue("gray.700", "gray.500");

  return (
    <Flex direction="column" gridGap={8} px={36}>
      {/* CV Header */}
      <Flex align="center" gridGap={2}>
        <Image
          borderRadius="full"
          boxSize="6em"
          src="https://bit.ly/sage-adebayo"
          alt="Minhee (Erin) Park"
          mr={6}
        />
        <Flex direction="column">
          <Heading fontSize="2xl">Erin Park</Heading>
          <Text color={lightGray}>Developer in Seoul, South Korea</Text>
          <Text fontSize="0.9em" color={darkGray}>
            Seoul, South Korea
          </Text>
        </Flex>
      </Flex>

      {/* CV Subheading */}
      <Flex direction="column" gridGap={2}>
        <Text>About</Text>
        <Text color={darkGray} fontSize="0.85em">
          Executive Business Development with 8 years of experience specializing
          in investing, consulting, and project management. Built career in tech
          and mobile game industry in Beijing and San Francisco. Currently
          focused on blockchain and health tech.
        </Text>
        <Text></Text>
      </Flex>

      {/* CV Body */}
      <Flex gridGap={14}>
        <Text fontSize="0.85em" color={darkGray}>
          Jan 2018 - Present
        </Text>
        <Flex direction="column">
          <Text fontSize="0.85em">EastRiver</Text>
          <Text color={lightGray} fontSize="0.85em">
            Founder - Seoul, South Korea
          </Text>
          <Text fontSize="0.85em" color={darkGray}>
            &bull; Advising blockchain startups on raising capital for seed
            funding, raised $2.5M from venture capitalists in the US, Korea and
            Japan
          </Text>
          <Text fontSize="0.85em" color={darkGray}>
            &bull; Establishing partnerships on behalf of clients for research
            and business expansion in Asia
          </Text>
          <Text fontSize="0.85em" color={darkGray}>
            &bull; Creating blockchain use-cases for business partners in
            collaboration with engineering teams
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Cv;
