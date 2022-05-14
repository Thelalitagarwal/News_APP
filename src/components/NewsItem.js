import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  
  render() {
    let {title,desc,imurl,newurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-3" >
          <img src={imurl} className="card-img-top" alt="..."/>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={newurl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            <p className="card-text" style={{margin:"0"}}><small className="text-muted">{author?`By ${author}`:""}</small></p>
            <p className="card-text" style={{margin:"0"}}><small className="text-muted">Published on {new Date(date).toGMTString().slice(0,16)}</small></p>
          </div>
        </div>
    </div>
    )
  }
}
