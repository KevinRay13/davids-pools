import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Services = (props) => {
  const services = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="Services" />
      <div className="parallaxSer">
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 id="frost" className="about">
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6 spacing">
        <div>
          {services.map(edge => (
            <div>
              <div key={edge.node.frontmatter.path}>
                <div className="card service service-teaser">
                  <div className="card-content">
                    <h2>
                      <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                    </h2>
                    <p id="excerpt">{edge.node.excerpt}</p>
                    <Link to={edge.node.frontmatter.path} id="more">
                      <p> Click for More </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ServicesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Services;
