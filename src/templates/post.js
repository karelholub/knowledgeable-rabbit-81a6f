import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';
import SEO from "../components/SEO";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';
import BlogPostFooter from '../components/BlogPostFooter';
import CtaButtons from '../components/CtaButtons';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Post extends React.Component {
    render() {
      let twitter = "";
      if (
        _.get(this.props, "pageContext.site.siteMetadata.footer.has_social") &&
        _.get(this.props, "pageContext.site.siteMetadata.footer.social_links")
      ) {
        let social_links = _.get(
          this.props,
          "pageContext.site.siteMetadata.footer.social_links"
        );
        let twitter =
          "@" +
          social_links
            .find((element) => element.label === "Twitter")
            .url.split("/")
            .pop();
      }
        return (
            <Layout {...this.props}>
              <SEO
                title={_.get(this.props, "pageContext.frontmatter.title")}
                description={_.get(this.props, "pageContext.frontmatter.excerpt")}
                image={withPrefix(_.get(this.props, "pageContext.frontmatter.image"))}
                pathname={this.props.location.pathname}
                author={twitter}
              />
            <div className="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                    </div>
                    )}
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                  <div className="post-image">
                    <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                  </div>
                  )}
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                  </div>

                  <TwitterShareButton
                    url={"https://www.lepsikomunikace.cz"+this.props.location.pathname}
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    url={"https://www.lepsikomunikace.cz"+this.props.location.pathname} className="ln-button"
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton> 
                  <BlogPostFooter {...this.props} page={this.props.pageContext} date_type={'long'} />
                  
                </article>
              </div>
            </div>
            </Layout>
        );
    }
}
