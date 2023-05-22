import React from "react";
import Progress from "./Progress";

const Skills = () => {
  return (
    <>
      <h1
        className="mt-5 text-center pt-5"
        style={{ fontFamily: "Source Serif Pro , serif" }}
      >
        SKILLS
      </h1>
      <div className="container shadow-lg skill mt-5 pt-4 mb-5 pb-5" id="skl">
        <div className="row">
         <Progress value={75} color={'darkcyan'} skill={'MERN'}></Progress>
         <Progress value={70} color={'brown'} skill={'JAVASCRIPT'}></Progress>
         <Progress value={60} skill={'JAVA'}></Progress>
        </div>
        <div className="row mt-3">
        <Progress value={50} color={'red'} skill={'AWS'}></Progress>
         <Progress value={85} color={'green'} skill={'GIT & GITHUB'}></Progress>
         <Progress value={65} color={'pink'} skill={'DOCKER & DOCKER COMPOSE'}></Progress>
        </div>
        <div className="row mt-3">
        <Progress value={60} color={'brown'} skill={'JENKINS'}></Progress>
         <Progress value={60} color={'gray'} skill={'ANSIBLE'}></Progress>
         <Progress value={85} color={'darkblue'} skill={'HTML & CSS'}></Progress>
        </div>
        <div className="row mt-3">
        <Progress value={55} color={'green'} skill={'KUBERNETES'}></Progress>
         <Progress value={75} color={'gray'} skill={'JSP & SERVELET'}></Progress>
         <Progress value={60} skill={'MYSQL & MONGODB'}></Progress>
        </div>
      </div>
    </>
  );
};

export default Skills;
