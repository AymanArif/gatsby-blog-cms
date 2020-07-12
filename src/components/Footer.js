import React from 'react'

const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            Ayman's Blog
        </h4>
        <p className="texy-center"> Follow me on Social Media</p>
        <div>
            <ul className="footer-social-links">
                <ul className="social-links-list">
                    <li>
                        <a
                            href="https://www.twitter.com/@aymanace97"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="twitter"
                        >
                            <i className="fab fa-twitter fa-2x" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ayman-arif-patel-300683127/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin"
                        >
                            <i className="fab fa-linkedin fa-2x" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.github.com/AymanArif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github"
                        >
                            <i className="fab fa-github fa-2x" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://medium.com/@aymanarif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="medium"
                        >
                            <i className="fab fa-medium fa-2x" />
                        </a>
                    </li>

                </ul>
            </ul>
        </div>
    </div>

)

export default Footer