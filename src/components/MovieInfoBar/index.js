import React from 'react'
import { calcTime, convertMoney } from '../../helpers';
import { Wrapper, Content } from './MovieInfoBar.styles'
import PropTypes from 'prop-types'
import MovieInfo from '../MovieInfo';

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Running time: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfo.protoTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;
