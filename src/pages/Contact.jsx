import React from "react";
import styled from "styled-components";
import background from '../assets/contact-background.jpg';
import { keyframes } from "styled-components";
import { Card, CardHeader, CardBody} from '@chakra-ui/react'
import { Stack, Heading, Text, StackDivider, Box} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare} from "react-icons/fa";

function Contact(){
  return(
    <ContactContainer>
      <Background src={background} alt="Background Photo"/>
      <CardContainer>
      <Card>
        <CardHeader>
          <Heading size='md'>Contact Me!</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Email
              </Heading>
              <Text pt='2' fontSize='sm'>
                Personal: beckychen.323@gmail.com
              </Text>
              <Text pt='2' fontSize='sm'>
                Academic: chenb9@rpi.edu
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                LinkedIn
              </Heading>
              <IconButton margin='10px' as="a" href="https://www.linkedin.com/in/becky-chen2332/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Github
              </Heading>
              <IconButton margin='10px' as="a" href="https://github.com/becks1723" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
      </CardContainer>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  font-family: 'Work Sans', sans-serif;
`

const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  display: block;
`

const bannerEaseIn = keyframes`
  0% { opacity: 0; }
  100% {opacity: 1; }
`

const CardContainer = styled.div`
  color: black;
  text-align: center;
  position: absolute;
  top: 30%;
  bottom: 0;
  right: 20%;
  left: 20%;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  animation-name: ${bannerEaseIn};
  animation-duration: 5s;
  padding: 30px 0 30px 0;
  font-family: 'Work Sans', sans-serif;
`

export default Contact