import React from 'react';
import { Link } from 'react-router';



export default function RepoCard (props) {
  return (
    <article className="row">
        <div className="col-sm-8">
            <h3><Link to={`/repos/${props.owner.login}/${props.name}`}>{props.full_name}</Link></h3>
            <p className="text-gray">{props.description}</p>
            <p className="text-gray small">{props.updated_at}</p>
        </div>
        <div className="col-sm-2">
            <p className="text-gray">{props.language}</p>
        </div>
        <div className="col-sm-2">
            <p className="text-gray"><i className="fa fa-star"/>{props.stargazers_count}</p>      
        </div>
    </article>
  )
};