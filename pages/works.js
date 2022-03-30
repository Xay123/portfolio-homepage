import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from '../components/layouts/article'
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbPasswd from '../public/images/works/python.png'

const Works = () => {
    return (
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={20}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="passwordManager" title="Password Manager" thumbnail={thumbPasswd}>
                        A password manager with encrypted passwords as well as an encrypted log in.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
