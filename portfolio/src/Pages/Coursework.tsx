import React from "react";
import { Section } from "../components/Section";
import { styled } from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  overflow: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  height: 100%;
`;

const GridBox = styled.div`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  padding: 25px;
  overflow-y: auto;
  li {
    text-align: left;
    margin-left: 0px;
    padding: none;
  }
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export default function Coursework() {
  return (
    <Section title="Course Work">
      <Content>
        <Grid>
          <GridBox>
            <Title>Program and Data Representation</Title>
            <ul>
              <li>
                Studied how data is represented in computers, from bits to
                objects, and applied it to different program representations
              </li>
              <li>
                Worked on 11 three-part projects developing small programs to
                implement data structures such as trees, lists, hashes, and
                sorting algorithms in C++, machine language, or assembly code
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Advanced Software Development Methods</Title>
            <ul>
              <li>
                Produced a desktop application using the Django 4 framework on
                Python 3 and HTML-based templates
              </li>
              <li>
                Incorporated API’s such as the Google account API and an API
                that stored information from UVa SIS
              </li>
              <li>
                Deployed the website on Heroku using a PostgreSQL database
              </li>
              <li>
                Utilized GitHub’s Continuous Integration and unit testing to
                maintain integrity of the code
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Internet Scale Applications</Title>
            <ul>
              <li>
                Completed a survey of methods for building large-scale internet
                websites and mobile apps
              </li>
              <li>
                Developed an understanding of performance engineering, scaling,
                security, and large team software engineering
              </li>
              <li>Cumulated in a working scalable online application</li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Compilers</Title>
            <ul>
              <li>
                Collaborated with peers in pairs to undertake a semester-long
                project written in modern C+
              </li>
              <li>
                Enhanced software development skills by extending an existing
                compiler codebase, documenting code, and creating comprehensive
                test cases
              </li>
              <li>
                Utilized LLVM, one of the industry's leading compiler
                infrastructures, at the core of the clang compiler family
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Operating Systems</Title>
            <ul>
              <li>
                Gained hands-on experience with essential operating system
                services, including kernel organization, process management,
                scheduling, signals, concurrent programming, memory management,
                file systems, and security
              </li>
              <li>
                Acquired knowledge and skills in memory management, including
                memory allocation and deallocation mechanisms
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Linear Algebra</Title>
            <ul>
              <li>
                Explored the applications of matrices in computations and in
                engineering
              </li>
              <li>
                Applied concepts to real-life applications by writing MATLAB
                programs to model traffic flow of an intersection, optimize
                cryptography, and implement the Google Page Rank algorithm, for
                example
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <Title>Machine Learning</Title>
            <ul>
              <li>
                Developed expertise in handling diverse datasets from multiple
                fields and demonstrated the ability to create end-to-end machine
                learning projects using popular open-source libraries, including
                Scikit-Learn, Keras, and TensorFlow
              </li>
              <li>
                Proficiently formulated and applied a wide range of supervised
                and unsupervised machine learning techniques, including linear
                regression, logistic regression, support vector machines,
                decision trees, random forests, boosting, k-means clustering,
                and hierarchical clustering
              </li>
              <li>
                Gained practical experience in artificial neural networks,
                including deep neural networks, convolutional neural networks,
                and recurrent neural networks, using the TensorFlow 2.0 API
              </li>
            </ul>
          </GridBox>
        </Grid>
      </Content>
    </Section>
  );
}
