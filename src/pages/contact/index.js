import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';
import { graphql } from 'gatsby';

const Contact = props => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass='page-contact'>
      <SEO title='Contact' />
      <div className='intro intro-small'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div id='cont'>
            <div id='box'>
              <div className='col-12' id='centerMe'>
                <Call button={false} />
              </div>
            </div>
          </div>

          {/* <div id='centerMe'> */}
          <div className='col-8' id='times'>
            <h4 className='mt-4'>Business Hours</h4>
            <table className='table table-sm opening-hours-table'>
              <tbody>
                <tr>
                  <td className='day font-weight-bold'>Monday</td>
                  <td className='opens'>8:30am</td>
                  <td>-</td>
                  <td className='closes'>5:00pm</td>
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Tuesday</td>
                  <td className='opens'>8:30am</td>
                  <td>-</td>
                  <td className='closes'>5:00pm</td>
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Wednesday</td>
                  <td className='opens'>8:30am</td>
                  <td>-</td>
                  <td className='closes'>5:00pm</td>
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Thursday</td>
                  <td className='opens'>8:30am</td>
                  <td>-</td>
                  <td className='closes'>5:00pm</td>
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Friday</td>
                  <td className='opens'>8:30am</td>
                  <td>-</td>
                  <td className='closes'>5:00pm</td>
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Saturday</td>
                  <td className='opens'>Closed</td>
                  <td />
                  <td className='closes' />
                </tr>
                <tr>
                  <td className='day font-weight-bold'>Sunday</td>
                  <td className='opens'>Closed</td>
                  <td />
                  <td className='closes' />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className='container pb-6' id='test'>
        <h1 className='margin'>Testimonials</h1>
        <div className='row'>
          {testimonials.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className='col-12 col-md-6 mb-1'
            >
              <div className='testimonial'>
                <div className='testimonials-meta'>
                  <h2 className='testimonials-title'>
                    {edge.node.frontmatter.title}
                  </h2>
                  <p className='testimonials-name'>
                    {edge.node.frontmatter.name}
                  </p>
                  <p className='testimonials-jobtitle'>
                    {edge.node.frontmatter.jobtitle}
                  </p>
                </div>
                <div
                  className='testimonials-content'
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery1 {
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

export default Contact;
