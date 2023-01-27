import React, {useCallback} from "react";
import styled from "styled-components";
import {loadSnowPreset} from "tsparticles-preset-snow";
import Particles from "react-tsparticles";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Launch from "./components/Launch";

export default function Home() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSnowPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
    }, []);

    return (
        <Container>
            <Particles id="tsparticles"
                       init={particlesInit} loaded={particlesLoaded}
                       options={{
                           background: {
                              color: ""
                           },
                           particles: {
                               number: {
                                   value: 30,
                               },
                               opacity: {
                                   value: 0.2,
                               },
                               size: {
                                   value: {min: 1, max: 5},
                               }
                           },
                           preset: "snow"
                       }}
            />

            <Content>
                <Launch/>
                <About/>
                <Dashboard/>
                <Faq/>
                <Contact/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  background: linear-gradient(261deg, rgba(19, 34, 79, 1) 0%, rgba(4, 44, 156, 1) 100%) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
`;



