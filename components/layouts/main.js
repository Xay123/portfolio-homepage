import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import ElephantLoader from '../elephant-loader'

const LazyElephant = dynamic(() => import('../elephant'), {
  ssr: false,
  loading: () => <ElephantLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Zachary's homepage" />
        <meta name="author" content="Zachary Layland" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Zachary Layland - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyElephant />

        {children}
      </Container>
    </Box>
  )
}

export default Main