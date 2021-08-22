import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './BreadCumb.styles';
import PropTypes from 'prop-types'



const BreadCumb = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
)

BreadCumb.protoTypes = {
    movieTitle: PropTypes.string
}


export default BreadCumb;
