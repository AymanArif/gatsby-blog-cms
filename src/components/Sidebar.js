import React from 'react'
import {Card, CardTitle, CardBody, Form, Input, FormGroup} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

const Sidebar = () => (
     <div>
          <Card>
               <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                         Newletter
                    </CardTitle>
                    <Form className="text-center">
                         <FormGroup>
                         <Input type="email" placeholder="Yuor email address.." />
                         </FormGroup>
                         <button className="btn btn-outline-success text-uppercase">
                              Subscribe
                         </button>
                    </Form>
               </CardBody>
          </Card>
          <Card>
               <CardBody>
                    <CardTitle className="text-center text-uppercase">
                         Advertisement
                    </CardTitle>
                    <img
                         src="https://via.placeholder.com/320x200"
                         alt="Advert"
                         style={{ width: '100%'}}
                    />
               </CardBody>
          </Card>
          <Card>
               <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                         Recent posts
                    </CardTitle>
                    <StaticQuery
                         query={sidebarQuery}
                         render={data => {
                         return (
                         <div>
                              {data.allMarkdownRemark.edges.map(({ node }) => (
                                   <Card key = {node.id}>
                                        <Link to={node.fields.slug}>
                                             <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                        </Link>
                                        <CardBody>
                                             <CardTitle>
                                                  <Link to={node.fields.slug}></Link>
                                             </CardTitle>
                                        </CardBody>
                                   </Card>
                              ))}
                         </div>
                         )
                         }}
                    />
               </CardBody>
          </Card>
     </div>

)

const sidebarQuery = graphql`
query sidebarQuery {
     allMarkdownRemark(
       sort: { fields: [frontmatter___date], order: DESC }
       limit: 3
     ) {
      edges{
        node{
	     id	
          frontmatter{
            title
            image{
              childImageSharp {
                fluid(maxWidth: 600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
               slug
          }
        }
      }
    }
  }
`
export default Sidebar

