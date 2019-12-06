import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import b4 from './b4.jpg';
import after from './aftr.jpg';
import inProgress from './inPerson.jpg';

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-gallery">
      <SEO title="Gallery" />
      <div className="parallaxGal">
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 id="frost" className="about">
                  Gallery
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 id="ourWork">Our Work</h1>
      </div>
      <div className="gallery">
        <div id="imgBox">
          <img src={b4} alt="pool before" className="galleryImage" />
        </div>
        <div id="imgBox">
          <img src={after} alt="pool after" className="galleryImage" />
        </div>
        <div id="imgBox">
          <img src={inProgress} alt="in progress cleaning" className="galleryImage" />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            name
            jobtitle
          }
        }
      }
    }
  }
`;

export default Testimonials;
