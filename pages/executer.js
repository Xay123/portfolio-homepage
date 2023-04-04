import { Container, Heading} from "@chakra-ui/react";
import Layout from '../components/layouts/article'

const Executer = () => (
    <Layout title="Executer">
        <Container mt={20}>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
        </Container>
    </Layout>
)

export default Executer
