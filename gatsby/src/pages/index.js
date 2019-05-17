import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Topsection from '../sections/TopSection';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          githubUrl
          liveDemoUrl
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityAbout {
      edges {
        node {
          name
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    allSanityExperience {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { edges: aboutData } = data.allSanityAbout;
  const { edges: experienceData } = data.allSanityExperience;
  const { edges: projectData } = data.allSanityProject;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Topsection />
      <AboutMe aboutData={aboutData} />
      <Experience experienceData={experienceData} />
      <Projects projectData={projectData} />
    </Layout>
  );
};

export default IndexPage;
