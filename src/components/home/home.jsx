/*
 * Copyright © 2014-2017 Zuru Tech HK Limited and Archbox S.r.l., All rights reserved.
 */
import React from 'react'
import './home.css'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            jobs : []
        };
    };

    render() {
        let jobs = this.state.jobs;
        let jobsDetails = [];
        for(let i=0; i < jobs.length; i++){
            jobsDetails.push(<h4 key={i}>{jobs[i].name} - {jobs[i].country}</h4>)
        }

        return (
            <div className="">
                <h1><pre>Hello GraphQL</pre></h1>
                <button onClick={() => this._executeSearch()}> Fetch Job </button>
                {jobsDetails}
            </div>
        )
    }

    _executeSearch = async () => {
        const result = await this.props.client.query({
            query: FETCH_JOB_QUERY,
        })
        const jobs = result.data.jobs;
        this.setState({jobs : jobs})
    }

}

const FETCH_JOB_QUERY = gql`
  query{
  jobs {
    id
    name
    country
    description
    isDeleted
    noOfPosition
    createdAt
    createdBy
  }
}
`

export default withApollo(Home)