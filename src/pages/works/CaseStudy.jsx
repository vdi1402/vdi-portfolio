import caseStudyLogo from "../../assets/case-studies/comp-logo.png";
import connectingLogo from "../../assets/case-studies/connecting-logo.png";
import thoughtsLogo from "../../assets/case-studies/thoughts-logo.png";
import supperCubLogo from "../../assets/case-studies/supper-club-logo.png";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const studies = [
  {
    title: "Connecting",
    desc: "An app for selling, buying and adopting dogs.",
    path: "connecting",
    img: connectingLogo,
  },
  {
    title: "The Thoughts",
    desc: "An app for meditation.",
    path: "thoughts",
    img: thoughtsLogo,
  },
  {
    title: "UI Designs",
    desc: "A website design for a restaurant for customizable wrap.",
    path: "supper-club",
    img: supperCubLogo,
  },
];

const CaseStudy = () => {
  return (
    <div className='bg-slate-900 text-white pt-10 pb-4 px-4 md:px-12 md:pb-8 lg:pb-12'>
      <div className='text-center mb-6 pt-4'>
        <img
          src={caseStudyLogo}
          alt='logo for Case Studies'
          className='mx-auto'
        />
        <h2 className='text-3xl font-semibold'>UX Case Studies</h2>
      </div>
      <div className='flex flex-col gap-4 md:flex-row items-center justify-evenly'>
        {studies.map((study, id) => (
          <Link key={id} to={study.path}>
            <Card work={study} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
