import React, { useEffect } from 'react';
import SmurfCard from './smurfCard';
import { fetchData } from '../actions/action';
import { connect } from 'react-redux';

const Smurf = props => {
    useEffect(() => {
        props.fetchData()
    }, []);
    if (props.isFetching) {
        return (
            <div>
                <h2>Lets find your Smurf!</h2>
            </div>
        )
    }
    return (
        <div>
            {props.err && <p>{ props.err }</p>}
            {props.smurfData.map(data => (
                <SmurfCard key={data.id} data={data} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.err
    }
}

export default connect(mapStateToProps, {fetchData})(Smurf);