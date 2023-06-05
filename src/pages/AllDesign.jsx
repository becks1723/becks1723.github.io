import { Card, CardBody} from '@chakra-ui/react'
import { Image, Stack, Heading, Text, SimpleGrid} from '@chakra-ui/react';
import styled from 'styled-components';
import businessCard from '../assets/businesscard.jpg';
import stationary from '../assets/stationary.jpg';
import musicPoster from '../assets/musicposter.jpg';
import movie from '../assets/movie.png';

function AllDesign() {
  return(
    <Container>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(23%, 1fr))'>

      <Card>
          <CardBody>
            <Image
              margin='auto'
              objectFit='cover'
              src={musicPoster}
              alt='Music Poster photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Music Poster</Heading>
              <Text>
                Design a music poster in Adobe InDesign
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Image
              margin='auto'
              border='2px'
              borderColor='#FDBA74'
              objectFit='cover'
              src={businessCard}
              alt='Business card photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Business Card</Heading>
              <Text>
                Designed a business card and logo in Adobe Illustrator
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Image
              margin='auto'
              border='2px'
              borderColor='#FDBA74'
              objectFit='cover'
              src={stationary}
              alt='Stationary photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Stationary</Heading>
              <Text>
                Designed stationary based off the business card and logo in Adobe Illustrator
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Image
              margin='auto'
              objectFit='cover'
              src={movie}
              alt='movie photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Movie</Heading>
              <Text>
                Created a short film using Adobe After Effects using elements created in Adobe Illustrator
              </Text>
            </Stack>
          </CardBody>
        </Card>

      </SimpleGrid>
    </Container>
  )
}

const Container = styled.div`
`
export default AllDesign