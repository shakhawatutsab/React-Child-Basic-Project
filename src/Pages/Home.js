import React from "react";
import Header from "../Components/Header";
import Sidebar from '../Components/Sidebar';
import Alert from "../Components/Alert";
import Post from "../Components/Post";
import LoginForm from "../Components/LoginForm";
const Home = () => {
  const posts = [
    {
      title:" Post title 1",
      description: "Post content 1",
      time: "Today",
      coment_count: "100+",
      shares: "1k+",
    },
    {
      title:" Post title 2",
      description: "Post content 2",

      time: "Yesterday",
      coment_count: "200+",
      shares: "2k+",
    },
    {
      title:" Post title 1",
      description: "Post content 3",

      time: "A week ago",
      coment_count: "300+",
      shares: "3k+",
    },
  ];
  return (
    <>
      {/* Navigation */}
      <Header />

      <div className="container-fluid">
        {/* Left Column */}
        <div className="col-sm-3">
         <Sidebar  />
        </div>
        {/*/Left Column*/}

        {/* Center Column */}
        <div className="col-sm-6">
          {posts.map(function(post,index){
            return (
              <Post
                key ={index} 
                title ={post.title} 
                description = {post.description} 
                time = {post.time} 
                coment_count = {post.coment_count} 
                shares = {post.shares} />
            );
          })}
          {/* Alert */}
          
          <Alert />

          {/* Articles */}
          <Post />
          <hr />
        </div>
        {/*/Center Column*/}

        {/* Right Column */}
        <div className="col-sm-3">
          {/* Form */}
          <LoginForm />

          {/* Progress Bars */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-scale"></span>
                Dramatically Engage
              </h3>
            </div>
            <div className="panel-body">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                >
                  100% Proactively Envisioned
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  80% Objectively Innovated
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "45%" }}
                >
                  45% Portalled
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "35%" }}
                >
                  35% Done
                </div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <h3>
            <span className="glyphicon glyphicon-modal-window"></span>{" "}
            Synergization
          </h3>
          <div
            id="side-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#side-carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#side-carousel" data-slide-to="1"></li>
              <li data-target="#side-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <a href="#">
                  <img
                    className="img-responsive"
                    src="holder.js/400x300?bg=FF8C00&text=Image%201"
                    alt=""
                  />
                </a>
                <div className="carousel-caption">
                  <h3>Dramatically Engage</h3>
                  <p>
                    Objectively innovate empowered manufactured products whereas
                    parallel platforms.
                  </p>
                </div>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    className="img-responsive"
                    src="holder.js/400x300?bg=FF8C00&text=Image%202"
                    alt=""
                  />
                </a>
                <div className="carousel-caption">
                  <h3>Efficiently Unleash</h3>
                  <p>
                    Dramatically maintain clicks-and-mortar solutions without
                    functional solutions.
                  </p>
                </div>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    className="img-responsive"
                    src="holder.js/400x300?bg=FF8C00&text=Image%203"
                    alt=""
                  />
                </a>
                <div className="carousel-caption">
                  <h3>Proactively Pontificate</h3>
                  <p>
                    Holistically pontificate installed base portals after
                    maintainable products.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#side-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#side-carousel"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/*/Right Column */}
      </div>
      {/*/container-fluid*/}

      <footer>
        <div className="footer-blurb">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-blurb-item">
                <h3>
                  <span className="glyphicon glyphicon-text-size"></span>{" "}
                  Dynamic
                </h3>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
                <p>
                  <a className="btn btn-default" href="#">
                    Procrastinate
                  </a>
                </p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3>
                  <span className="glyphicon glyphicon-wrench"></span> Efficient
                </h3>
                <p>
                  Dramatically maintain clicks-and-mortar solutions without
                  functional solutions. Efficiently unleash cross-media
                  information without cross-media value. Quickly maximize timely
                  deliverables for real-time schemas.
                </p>
                <p>
                  <a className="btn btn-default" href="#">
                    Unleash
                  </a>
                </p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                <h3>
                  <span className="glyphicon glyphicon-paperclip"></span>{" "}
                  Complete
                </h3>
                <p>
                  Professionally cultivate one-to-one customer service with
                  robust ideas. Completely synergize resource taxing
                  relationships via premier niche markets. Dynamically innovate
                  resource-leveling customer service for state of the art
                  customer service.
                </p>
                <p>
                  <a className="btn btn-default" href="#">
                    Complete
                  </a>
                </p>
              </div>
              <div className="col-sm-3 footer-blurb-item">
                {/* Thumbnails */}
                <h3>
                  <span className="glyphicon glyphicon-camera"></span>{" "}
                  Phosfluorescent
                </h3>
                <div className="row">
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <a href="#" className="thumbnail">
                      <img src="holder.js/110x80" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>

        <div className="small-print">
          <div className="container">
            <p>
              <a href="#">Terms &amp; Conditions</a> |
              <a href="#">Privacy Policy</a> | <a href="#">Contact</a>
            </p>
            <p>Copyright &copy; Example.com 2015</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
