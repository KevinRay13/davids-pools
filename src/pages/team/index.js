import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass='page-teams'>
      <SEO title='About' />
      <div className='parallaxAbt'>
        <div className='intro' id='intro'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' id='col12'>
                <h1 id='frost' className='about'>
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container pb-6'>
        <div className='row' id='aboutDP'>
          <h1 id='h1About'>Davids Pools</h1>
          <p id='p1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi
            ligula, congue vel orci eu, tristique commodo dui. Aenean pharetra
            quam ut lectus eleifend ultrices. Ut sit amet lorem sagittis, mollis
            ex eget, dictum eros. Vestibulum luctus nec massa et eleifend. Etiam
            elementum nibh nunc, eget sodales eros venenatis eget. Praesent nunc
            erat, dapibus et semper a, scelerisque at dui. Curabitur posuere
            egestas velit et convallis. Nulla at pharetra ante, aliquet porta
            justo.
          </p>
          {/* {teams.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className='col-12 col-md-6 mb-1'
            >
              <div className='team card-two'>
                <div className='card-header'>
                  <div className='card-header-left'>
                    {edge.node.frontmatter.image && (
                      <div className='card-image'>
                        <img
                          alt={edge.node.frontmatter.title}
                          className='img-fluid mb-2'
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className='card-right'>
                    <h2 className='card-title'>
                      {edge.node.frontmatter.title}
                    </h2>
                    <ul className='card-meta'>
                      <li>
                        <strong>{edge.node.frontmatter.jobtitle}</strong>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href={edge.node.frontmatter.linkedinurl}
                        >
                          {edge.node.frontmatter.linkedinurl}
                        </a>
                      </li>
                      <li>
                        <a href={edge.node.frontmatter.email}>
                          {edge.node.frontmatter.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='team-content'
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            jobtitle
            linkedinurl
            email
          }
        }
      }
    }
  }
`;

export default Team;
