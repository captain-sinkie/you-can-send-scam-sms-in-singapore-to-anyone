// packages
import type { NextPage } from 'next'
// chakra
import { Box, Center, Flex, Heading, Stack, Spacer, Text } from '@chakra-ui/react'
// components
import { Phone } from '../Components/Phone'
import { SMSForm } from '../Components/SMSForm'

const Home: NextPage = () => {
  return (
    <Box px={3}>
      <Box>You can send scam sms in Singapore to anyone</Box>

      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: '70%' }}>
          <Stack direction={{ base: 'column', lg: 'row' }} py={3}>
            <Box w="100%">
              <Box borderWidth="1px" borderRadius="md" py={3} px={5}>
                <SMSForm />
              </Box>
            </Box>
            <Spacer />
            <Center w="100%">
              <Phone />
            </Center>
          </Stack>
        </Box>

        <Box w={{ base: '100%', md: '30%' }}>
          <Box>
            <Heading as="h2">What is this site?</Heading>
            <Text>
              This site is built to highlight the vulnerability which was exploited by scammers to
              attack Singaporeans.
            </Text>
          </Box>

          <Box>
            <Heading as="h2">OCBC Scam</Heading>
            <Text>
              The scammers changed the sender names of SMS messages to An important vulnerability
            </Text>
          </Box>

          <Box>
            <Heading as="h2">Sending scam SMS</Heading>
            <Text>Scam messages can be sent in Singapore</Text>
          </Box>
          <Box>
            <Heading as="h2">What can be done?</Heading>
            <Text>Put simply, we must request for regulation to stop </Text>
          </Box>

          <Box>
            <Heading as="h2">IMDA Protection Registry Is Not Working</Heading>
            <Text>The IMDA's protection registry current not properly block SMS from sending.</Text>
          </Box>

          <Box>
            <Heading as="h2">How you can help?</Heading>
            <Text>Help to highlight this problem by sending a SMS to your friends and family.</Text>
          </Box>

          <Box>
            <Heading as="h2">Your Privacy on the site</Heading>

            <Text>This website does not store the messages you send.</Text>
            <Text>The source code for this website can be viewed on Github here.</Text>
            <Text>
              If you are a software engineer or cybersecurity expert, feel free to inspect the code
              and http calls here. If you found any issue, feel free to raise it immediately on
              Github.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Home
