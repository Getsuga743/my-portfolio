import Head from 'next/head'
import About from '../components/About/About'
import CallToAction from '../components/CallToAction/CallToAction'
import { educationInfo, Skills, projectsInfo } from '../data/data'
import { Layout } from '../layout/Layout'
import { useInView } from 'react-intersection-observer';
import Projects from '../components/Projects/Projects'


export default function Home(props) {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    /* Optional options */
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <>
      <Head>
        <title>ivanmaierg</title>
        <meta name="description" content="This is my portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      </Head>
      <Layout>
        <CallToAction />
        <div ref={refAbout}>
          {inViewAbout && <About education={props.educationData} skills={props.skills} />}
        </div>
        {/* <Projects projects={props.projects} /> */}
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const educationData = educationInfo;
  const skills = Skills;
  const projects = projectsInfo;
  if (!educationData) {
    return {
      notFound: true,
    }
  }
  return {
    props: { educationData, skills, projects }, // will be passed to the page component as props
  }
}
