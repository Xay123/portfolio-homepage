import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbManager from '../public/images/contents/python.png'

const Posts = () => (
    <Layout title="Posts">
        <Container mt={20}>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="Python" thumbnail={thumbManager} href="https://www.youtube.com/watch?v=bSMZgXzC9AA"/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts