import React from 'react'

const Sidebar = () => {
  return (
    <div>
      {/* List-Group Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <span className="glyphicon glyphicon-random"></span> Completely
                Synergize
              </h1>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Resource Taxing
              </a>
              <a href="#" className="list-group-item">
                Premier Niche Markets
              </a>
              <a href="#" className="list-group-item">
                Dynamically Innovate
              </a>
              <a href="#" className="list-group-item">
                Objectively Innovate
              </a>
              <a href="#" className="list-group-item">
                Proactively Envisioned
              </a>
            </div>
          </div>

          {/* Text Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title">
                <span className="glyphicon glyphicon-cog"></span> Dramatically
                Engage
              </h1>
            </div>

            <div className="panel-body">
              <p>
                Objectively innovate empowered manufactured products whereas
                parallel platforms. Holisticly predominate extensible testing
                procedures for reliable supply chains. Dramatically engage
                top-line web services vis-a-vis cutting-edge deliverables.
              </p>
              <p>
                <button className="btn btn-default">Engage</button>
              </p>
            </div>
          </div>

          {/* Text Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-bullhorn"></span>
                Active Predomination
              </h3>
            </div>
            <div className="panel-body">
              <p>
                Proactively envisioned multimedia based expertise and
                cross-media growth strategies.
              </p>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default">
                  Resource
                </button>
                <button type="button" className="btn btn-default">
                  Envision
                </button>
                <button type="button" className="btn btn-default">
                  Niche
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Sidebar
