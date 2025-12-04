import React from 'react'

const Post = (props) => {
  return (
    <div>
      <div className="row">
            <article className="col-xs-12">
              <h2>{props.title}</h2>
              <p>
                {props.description}
              </p>
              <p>
                <button className="btn btn-default">Read More</button>
              </p>
              <p className="pull-right">
                <span className="label label-default">keyword</span>
                <span className="label label-default">tag</span>
                <span className="label label-default">post</span>
              </p>
              <ul className="list-inline">
                <li>
                  <a href="#">{props.time}</a>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-comment"></span>{props.coment_count}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-share"></span> {props.shares}
                  </a>
                </li>
              </ul>
            </article>
          </div>
    </div>
  )
}

export default Post;
