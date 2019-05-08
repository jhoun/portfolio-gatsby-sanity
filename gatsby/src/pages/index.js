import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Topsection from '../sections/TopSection';
import AboutMe from '../sections/AboutMe';
import Experience from '../sections/Experience';

import 'bootstrap/dist/css/bootstrap.min.css';

export const query = graphql`
  {
    allSanityProject {
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
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Topsection />
      <AboutMe aboutData={aboutData} />
      <Experience experienceData={experienceData} />
      {/* <ul style={{ listStyle: 'none', display: 'flex', alighItems: 'space-between', padding: 0 }}>
      {data.allSanityProject.edges.map(({ node: project }) => {
        return (
          <li key={project.slug.current} style={{ flex: '1.45%', maxWidth: '45', margin: '1rem' }}>
            <h2 style={{ fontSize: '24px' }}>
              <Link to={project.slug.current}>{project.title}</Link>
            </h2>
            <Image fluid={project.image.asset.fluid} alt={project.title} />
            <p>{project.description}</p>
            <Link to={project.slug.current}>See project details</Link>
          </li>
        );
      })}
    </ul> */}
    </Layout>
  );
};

export default IndexPage;
