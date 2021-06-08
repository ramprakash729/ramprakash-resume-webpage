import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3> Jun 2019- Till Date </h3>
            <p>
              Teaching web programming, Data structures and C program. Tce360
              (Internal College Appraisal site) development member for
              developing R&D and placement Cell features. Savita (Internal
              College Board for NIRF ranking) Member of panel that facilitates
              Data center of College.Developed an Internal Entrance Exam Website
              for First Year admission (M.Sc Data science) . Automated the mark
              entry in TCEnet (Internal Website for mark entry).
            </p>
          </div>
        </div>

        {/* two */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jun -2017-May -2019</h3>
            <p>
              Skilled in Oracle Fusion HCM technical, PL/SQL, Oracle HR,
              Migration Projects, Oracle SQL Developer, and Database Management
              System (DBMS).Created Forms in Oracle Apps and used SVN for
              version control.
            </p>
          </div>
        </div>

        {/* three */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan-2017 to Jun 2017</h3>
            <p>
              Developed Social support Dashboard.It is a centralized
              utility/tool which helps in listing the current unanswered
              questions from technical forums that an IBM support team is
              interested in.The Dashboard helped in estamating the long backlogs
              of the development team and provided the oppurtunity to fix it
              soon.
            </p>
          </div>
        </div>

        {/* four
         */}
      </div>
    </div>
  );
};

export default Experience;
