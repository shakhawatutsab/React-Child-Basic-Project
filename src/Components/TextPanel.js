import React from 'react'

const TextPanel = (props) => {
  return (
    <div>
      {/* Text Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <span className="glyphicon glyphicon-cog"></span>{props.title || "Title "}
              </h1>
            </div>

            <div className="panel-body">
              <p>
                {props.description || "Lorem Ipsum dolor sit"}
              </p>
              <p>
                <button className="btn btn-default">{props.button_text || "Read more" }</button>
              </p>
            </div>
          </div>
    </div>
  )
}

export default TextPanel
