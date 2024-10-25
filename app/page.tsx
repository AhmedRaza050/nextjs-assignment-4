

import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";



export default function Home() {
  return (
   <>
 
    <div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#CFA6A61C",
          padding: "0px",
          margin: "0px",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            height: "24px",
            width: "283px",
            paddingLeft: "0px",
            position: "absolute",
            top: "66px",
            right: "20px",
            fontFamily: "inter",
            fontWeight: "500",
            fontSize: "20px",
            lineHeight: "24.2px",
            display: "flex",
            gap: "25px",
          }}
        >
          <a href="#" style={{ height: "25px", width: "61px" }}>
            Works
          </a>
          <a href="#" style={{ height: "24px", width: "43px" }}>
            Blog
          </a>
          <a href="#" style={{ height: "24px", width: "77px" }}>
            Contact
          </a>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "1030px",
            height: "308px",
            top: "220px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "521px",
                height: "305px",
              }}
            >
              <h1
                style={{
                  fontFamily: "heebo",
                  fontWeight: "900",
                  fontSize: "48px",
                  lineHeight: "61px",
                  letterSpacing: "2px",
                  color: " #21243D",
                }}
              >
                Hi, I am John <br />
                Creative Technologist
              </h1>
              <p
                style={{
                  width: "497px",
                  height: "66px",
                  marginTop: "24px",
                  color: "#21243D",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "Heebo",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "23.5px",
                  textAlign: "left",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet
                <br />
                sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam <br /> consequat sunt nostrud amet.
              </p>

              <button
                style={{
                  width: "205px",
                  height: "50px",
                  borderRadius: "2px",
                  backgroundColor: "#F98585",
                  boxShadow: "0px 4px 4px 0px #4141418A",
                  marginTop: "24px",
                  color: "white",
                }}
              >
                <a href="#"> Download Resume </a>
              </button>
            </div>
            <div
              style={{
                width: "298px",
                height: "308px",
                marginLeft: "90px",
                opacity: "0px",
              }}
            >
              <div
                style={{
                  width: "282px",
                  height: "297px",
                  borderRadius: "50%",
                  background: "#AA9F9F4F",
                }}
              >
                <div
                  style={{
                    width: "292px",
                    height: "299px",
                  }}
                >
                  <Image
                    src="/image.png"
                    alt="john`s Picture"
                    height={292}
                    width={299}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#f9e8e6",
            padding: "20px",
            width: "100%",
            height: "502px",
            marginTop: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              alignItems: "center",
            }}
          >
            <h2
              style={{
                color: "#000000",
                fontFamily: "Heebo",
                fontSize: "22px",
                paddingLeft: "137px",
                fontWeight: "500",
                lineHeight: "32.31px",
                textAlign: "left",
              }}
            >
              Recent Post
            </h2>
            <a
              href="#"
              style={{
                fontWeight: "500px",
                textDecoration: "none",
                lineHeight: "32.31px",
                paddingRight: "137px",
                color: " rgb(249, 133, 133)",
                fontFamily: "Heebo",
                fontSize: "22px",
              }}
            >
              View all
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                height: "356px",
                top: "742",
                left: "238px",

                width: "483px",
              }}
            >
              <div
                style={{
                  width: "391px",
                  marginLeft: "10px",

                  height: " 286px",
                  top: "38px",
                  left: "35px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Heebo",
                    fontSize: "26px",
                    marginTop: "10px",
                    fontWeight: "700",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  Making a design system from scratch
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    justifyContent: "left",
                    alignItems: "center",
                    fontFamily: "Heebo",
                    fontSize: "18px",
                    fontWeight: " 400",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  <p>12 Feb 2020</p> &nbsp; &nbsp; |&nbsp; &nbsp;
                  <p>Design, Pattern</p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                height: "356px",
                top: "742",
                left: "238px",

                width: "483px",
              }}
            >
              <div
                style={{
                  width: "391px",
                  marginLeft: "10px",

                  height: " 286px",
                  top: "38px",
                  left: "35px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Heebo",
                    fontSize: "26px",
                    marginTop: "10px",
                    fontWeight: "700",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  Making a design system from scratch
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    justifyContent: "left",
                    alignItems: "center",
                    fontFamily: "Heebo",
                    fontSize: "18px",
                    fontWeight: " 400",
                    lineHeight: "38px",
                    letterSpacing: "0.02em",
                    textAlign: "left",
                  }}
                >
                  <p>12 Feb 2020</p> &nbsp; &nbsp; |&nbsp; &nbsp;
                  <p>Design, Pattern</p>
                </div>
                <p style={{ marginTop: "20px" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FAF4F4", }}
        >
         
          <h2
            style={{
              marginLeft: "273px",
              paddingTop: "30px",
              color: "#000000",
              fontFamily: "Heebo",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "32.31px",
            }}
          >
            Featured works
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start", 
              marginTop: "30px",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                gap: "30px",
              }}
            >
              
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard1.png"}
                  alt="Dashboard Design 1"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>

          
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard2.png"}
                  alt="Dashboard Design 2"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>

            
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={"/dashboard3.png"}
                  alt="Dashboard Design 3"
                  width={246}
                  height={180}
                  style={{
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>

            
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
              }}
            >
              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              
              <div
                style={{
                  width: "500px",
                  padding: "10px",
                  backgroundColor: "#FAF4F4",
                }}
              >
                <h3 style={{ marginBottom: "10px", color: "#000" }}>
                  Designing Dashboards
                </h3>
                <p style={{ marginBottom: "10px" }}>
                  <span
                    style={{
                      backgroundColor: "#f98585",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      marginRight: "10px",
                    }}
                  >
                    2020
                  </span>
                  Dashboard
                </p>
                <p style={{ color: "#555" }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              marginTop: "120px",
            }}
          >
            <a
              href="https://www.facebook.com"
              style={{ margin: "0 10px" }}
              aria-label="Facebook"
            >
              <FaSquareFacebook size={30} /> 
            </a>
            <a
              href="https://www.instagram.com"
              style={{ margin: "0 10px" }}
              aria-label="Instagram"
            >
              <IoLogoInstagram size={30} />
            </a>
            <a
              href="https://www.twitter.com"
              style={{ margin: "0 10px" }}
              aria-label="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              style={{ margin: "0 10px" }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          
          <div
            style={{
              color: "gray",
              textAlign: "center",
              marginTop: "20px",
              paddingBottom: "20px",
              fontFamily: "Heebo",
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "32.31px",
            }}
          >
            Copyright ©2020 All rights reserved
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
