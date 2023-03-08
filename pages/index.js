import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = ( ) => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" p={3} mt={20} mb={6} align="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
               Hello, I&apos;m a high schooler in Granbury, TX.
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Zachary Layland
                    </Heading>
                    <p>
                        Computer Science
                    </p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/logo.png" alt="Profile Picture"/>
                </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant={"section-title"}>
                Work
            </Heading>
            <Paragraph>
            I am a 17 year old student enrolled at Granbury High School in Granbury, TX. I specialize in Python, however I have four years of experience with C# from robotics and Unity.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        My Portfolio
                    </Button>
                </NextLink>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2006</BioYear>
                Born in Granbury, Texas.
            </BioSection>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                I ❤
            </Heading>
            <Paragraph>
                Music, {' '}
                <Link href="/images/robotics.jpg">Robotics</Link>
                , and Machine Learning
            </Paragraph>
        </Section>
        </Container>
        </Layout>
    )
}

// To add link in paragraph, add this where you want the link and replace InsertLinkName with what you want it to display
//Text before link {' '}
//<NextLink href="/works"><Link>InsertLinkName</Link></NextLink>
//Or <Link href="">InsertLinkName</Link>

export default Page
