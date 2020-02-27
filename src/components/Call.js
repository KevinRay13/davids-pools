import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>San Antonio Phone: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
          {props.data.site.siteMetadata.contact.phone}
        </a>
      </div>

      <div className="call-phone">
        <strong>Austin Phone: </strong>
        <a href="tel:210 487 8813">210 487 8813</a>
        {/* {props.data.site.siteMetadata.contact.phone} */}
      </div>
      <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/contact" className="button">
          Contact
        </a>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
