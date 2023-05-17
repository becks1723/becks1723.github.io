import React from "react";
import styled from "styled-components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AllProjects from './AllProjects';
import AllDesign from './AllDesign';

function Projects() {
  return(
    <ProjectContainer>
      <Title>
        Projects
      </Title>
      <Text>
        Check out all my projects here!
      </Text>
      <TabContainer>
        <Tabs size='lg' isFitted variant='soft-rounded' colorScheme='orange'>
          <TabList>
            <Tab>Websites</Tab>
            <Tab>Design</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <AllProjects/>
            </TabPanel>
            <TabPanel>
              <AllDesign/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </TabContainer>

    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  font-family: 'Work Sans', sans-serif;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Title = styled.h1`
  font-size: 50px;
  margin: auto;
  width: 100%;
  text-align: center;
`

const Text = styled.h2`
  font-weight: 500;
  width: 100%;
  margin: auto;
  text-align: center;
`

const TabContainer = styled.section`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 20px;
  padding: 20px;
`

export default Projects
