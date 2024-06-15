import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

AOS.init();

const Home1 = () => {
  return (
    <>
      {/* <Row
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: " rgb(219, 232, 232)" }}
      >
        <Col
          lg={5}

          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 style={{ fontSize: "100px" }}>
            Link{" "}
            <span
              className="text-info"
              style={{ fontFamily: "'Michroma', sans-serif;" }}
            >
              Speare
            </span>
          </h1>
          <h2 className="mt-4">Everything you can imagine is real.</h2>
          <h5>
            {" "}
            <p className="mt-4" style={{ textAlign: "justify" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              beatae eveniet, rem dolor ut eaque, explicabo voluptate ad
              accusantium commodi quas culpa porro, illum id corporis obcaecati
              tempora facere sit.{" "}
            </p>
          </h5>
          <Link to={"/login"}>
            <button className="btn1 mt-2">Get Started</button>
          </Link>
        </Col>

        <Col lg={5} >
          <img
            className="mt-4"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{ height: "90vh" }}
            alt=""
          />
        </Col>
      </Row> */}

<>
      <div style={{ width: "100%", height: "100vh", backgroundColor: "white" }}>
        <div className='container-fluid rounded  mb-5'>
          <Row className='align-items-center p-5 '
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
            <Col sm={12} md={6} className='p-5 mb-5'>
            <h1 style={{ fontSize: "100px" }}>Link{" "}<span className="text-info" style={{ fontFamily: "'Michroma', sans-serif;" }} >
              Speare
            </span>
          </h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              beatae eveniet, rem dolor ut eaque, explicabo voluptate ad
              accusantium commodi quas culpa porro, illum id corporis obcaecati
              tempora facere sit.</p>
              
              <Link to={"/login"}>
            <button className="btn1 mt-2">Get Started</button>
          </Link>
            </Col>
            <Col sm={12} md={6}>
              <img src="https://thumbs.dreamstime.com/b/content-marketing-blogging-smm-concept-flat-design-blog-page-fill-out-articles-media-materials-uploading-process-115293520.jpg" alt="" className='w-100 p-5 mb-5' style={{ marginTop: "100px" }} />
            </Col>
          </Row>
        </div>
      </div>

    </>




      <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column">




   <Row data-aos="zoom-out"  data-aos-easing="linear"
          data-aos-duration="1000">
          <h1 className=" d-flex justify-content-center align-items-center" data-aos="zoom-in-up" style={{ fontFamily: "fantasy" }}>Popular <span className="text-success ms-1">Blogs</span></h1>
          

                  <div className="d-flex justify-content-center">
                      <div  className="col-md-4 mt-5 d-flex justify-content-center"><div class="card">
                          <div class="image">
                            <img
                              src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/6486d9547e2cd146146d4c93_NOVEMBER%209%2C%202023.jpg"
                              alt=""
                            />
                          </div>
                          <div class="content">
                            <a href="#">
                              <span class="title">
                                OpenAI’s Whisper Model Crushes Google in AI Head-to-Head
                              </span>
                            </a>

                            <p class="desc">
                              Learn how Captions used Statsig to test the performance of
                              OpenAI's new Whisper model against Google's Speech-to-Text.
                            </p>

                            <Link to={"/login"}>
                              {" "}
                              <a class="action" href="#">
                                Find out more
                                <span aria-hidden="true">→</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                    </div>
                

                      <div className="col-md-4 mt-5 d-flex justify-content-center"><div class="card">
                          <div class="image">
                            <img
                              src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/6594440a50b7ca3a7d1d81dc_Laptop%20screenshot%20displaying%20a%20color%20grading%20tool.jpg"
                              alt=""
                            />
                          </div>
                          <div class="content">
                            <a href="#">
                              <span class="title">
                                What Is Color Grading? Creating Stunning Video Color
                                Palettes....
                              </span>
                            </a>

                            <p class="desc">
                              Discover the magic of color grading. Learn practical tips
                              and tricks to enhance your videos and implement a signature
                              style with stunning visuals.
                            </p>

                            <Link to={"/login"}>
                              {" "}
                              <a class="action" href="#">
                                Find out more
                                <span aria-hidden="true">→</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                <div className="col-md-4 mt-5 d-flex justify-content-center">
                <div class="card">
                          <div class="image">
                            <img
                              src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/6584815ca7cccb4894e04842_Photo%20of%20an%20Instagram%20post%20with%20a%20gift%20box%20and%20interaction%20icons.jpg"
                              alt=""
                            />
                          </div>
                          <div class="content">
                            <a href="#">
                              <span class="title">
                                How to Do an Instagram Giveaway: Steps, Rules and FAQs{" "}
                              </span>
                            </a>

                            <p class="desc">
                              Learn how to do an Instagram giveaway to boost engagement
                              and grow your following with our step-by-step guide.
                            </p>

                            <Link to={"/login"}>
                              {" "}
                              <a class="action" href="#">
                                Find out more
                                <span aria-hidden="true">→</span>
                              </a>
                            </Link>
                          </div>
                        </div>

                </div>

            </div>

    </Row>
      </div>

      <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column">




<Row data-aos="zoom-out"  data-aos-easing="linear"
       data-aos-duration="1000">
       <h1 className=" d-flex justify-content-center align-items-center" data-aos="zoom-in-up" style={{ fontFamily: "fantasy" }}>Popular <span className="text-success ms-1">Blogs</span></h1>
       

               <div className="d-flex justify-content-center">
                   <div  className="col-md-4 mt-5 d-flex justify-content-center"><div class="card">
                       <div class="image">
                         <img
                           src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/659c0d8498a42e7cb410e54f_Collage%20of%20screenshots%20of%20popular%20YouTube%20channels.jpg"
                           alt=""
                         />
                       </div>
                       <div class="content">
                         <a href="#">
                           <span class="title">
                           YouTube Channel Ideas to Spark Creativity and Engage Audiences
                           </span>
                         </a>

                         <p class="desc">
                           Learn how Captions used Statsig to test the performance of
                           OpenAI's new Whisper model against Google's Speech-to-Text.
                         </p>

                         <Link to={"/login"}>
                           {" "}
                           <a class="action" href="#">
                             Find out more
                             <span aria-hidden="true">→</span>
                           </a>
                         </Link>
                       </div>
                     </div>
                 </div>
             

                   <div className="col-md-4 mt-5 d-flex justify-content-center"><div class="card">
                       <div class="image">
                         <img
                           src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/64c6b5a8a2b150846fbeb7a9_Lipdubbing.jpg"
                           alt=""
                         />
                       </div>
                       <div class="content">
                         <a href="#">
                           <span class="title">
                           Speak Any Language with Lipdub
                           </span>
                         </a>

                         <p class="desc">
                           Discover the magic of color grading. Learn practical tips
                           and tricks to enhance your videos and implement a signature
                           style with stunning visuals.
                         </p>

                         <Link to={"/login"}>
                           {" "}
                           <a class="action" href="#">
                             Find out more
                             <span aria-hidden="true">→</span>
                           </a>
                         </Link>
                       </div>
                     </div>
                   </div>
             <div className="col-md-4 mt-5 d-flex justify-content-center">
             <div class="card">
                       <div class="image">
                         <img
                           src="https://assets-global.website-files.com/60df2a66dbf65be7b8bc5f54/6552d8f149c943ca055faec2_20%20Social%20Media%20Content%20Ideas%20to%20Boost%20Your%20Online%20Presence.jpg"
                           alt=""
                         />
                       </div>
                       <div class="content">
                         <a href="#">
                           <span class="title">
                           20 Social Media Content Ideas to Boost Your Online Presence </span>
                         </a>

                         <p class="desc">
                           Learn how to do an Instagram giveaway to boost engagement
                           and grow your following with our step-by-step guide.
                         </p>

                         <Link to={"/login"}>
                           {" "}
                           <a class="action" href="#">
                             Find out more
                             <span aria-hidden="true">→</span>
                           </a>
                         </Link>
                       </div>
                     </div>

             </div>

         </div>

 </Row>
   </div>

      <div className="row" style={{ marginTop: "130px" }}>
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home1;
