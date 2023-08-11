import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Image, HStack, Stack, Heading, Text, Divider, IconButton, SimpleGrid} from '@chakra-ui/react';
import styled from 'styled-components';
import poster_boy from '../assets/posterboy.jpg';
import habit_track from '../assets/habittrack.jpg';
import cosmic_comets from '../assets/cosmic_comets.jpg';
import time_design from '../assets/time_design.jpg';
import lighthouse from '../assets/lighthouse.png';
import data_dash from '../assets/data_dash.jpg';
import { FaGithubSquare } from "react-icons/fa";


function AllProjects() {
  return(
    <Container>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(23%, 1fr))'>

      <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={poster_boy}
              alt='Sticky Net photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>PosterBoy</Heading>
              <Text>
                A social media website for users to put their ideas on a community board and remove their peers' sticky notes
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Check it out here:</Text>
              <IconButton as="a" href="https://github.com/PiersonG33/PosterBoy" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </HStack>
          </CardFooter>
        </Card>

        <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={habit_track}
              alt='Habit Tracker photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Habit Tracker</Heading>
              <Text>
              A web application designed to provide management assistance to users and their activities.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Check it out here:</Text>
              <IconButton as="a" href="https://github.com/ThatBlueJay/HabitTracker" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />/>} />
            </HStack>
          </CardFooter>
        </Card>

        <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={cosmic_comets}
              alt='Cosmic Comets photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Cosmic Comets</Heading>
              <Text>
                Web app employing NASA’s datasets to visualize the effect of wildfires/wind on solar energy production in California
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Check it out here:</Text>
              <IconButton as="a" href="https://github.com/becks1723/NASA-DataVisualizer" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </HStack>
          </CardFooter>
        </Card>

        <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={time_design}
              alt='Time Design photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Time Design</Heading>
              <Text>
                Time Design is a scheduling website created for the stressed and overloaded Rensselaer student in mind              
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Check it out here:</Text>
              <IconButton as="a" href="https://github.com/becks1723/TimeDesign" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </HStack>
          </CardFooter>
        </Card>

        <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={lighthouse}
              alt='LightHouse photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>LightHouse</Heading>
              <Text>
                LightHouse finds directions for the route with the most streetlights and provides convenient access to emergency contacts              
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Check it out here:</Text>
              <IconButton as="a" href="https://github.com/becks1723/Lighthouse-Hackviolet" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </HStack>
          </CardFooter>
        </Card>

        <Card maxW='sm'>
          <CardBody>
            <Image
              margin='auto'
              height='40%'
              objectFit='cover'
              src={data_dash}
              alt='data dash photo'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Data Dash</Heading>
              <Text>
                The purpose of our project is to be able to organize databases for the ease of the user, given a json file.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <HStack>
              <Text>Private repo:</Text>
              <IconButton aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </HStack>
          </CardFooter>
        </Card>

      </SimpleGrid>
    </Container>
  )
}

const Container = styled.div`
`

export default AllProjects