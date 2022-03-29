import { Container, Badge, List, ListItem } from "@chakra-ui/react";
//import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title={"Password Manager"}>
            <Container mt={20}>
                <Title>
                    Password Manager <Badge>2021</Badge>
                </Title>
                <P>
                    A password manage with encrypted passwords as well as an encrypted log in.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Language</Meta>
                        <span>Python</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/python.png" alt="Python"/>
            </Container>
        </Layout>
    )
}

export default Work