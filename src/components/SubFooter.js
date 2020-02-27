import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>San Antonio Phone: </strong>
                <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
                  {props.data.site.siteMetadata.contact.phone}
                </a>
              </li>
              <li>
                <strong>Austin Phone: </strong>
                <a href="tel:210 487 8813">210 487 8813</a>
              </li>
              <li>
                <strong>Email: </strong>
{' '}
                <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
