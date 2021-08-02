import Head from 'next/head'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Fade from 'react-reveal/Fade';
export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={styles.page}>
                <Fade top>
                    <section className={styles.titleSection}>
                        <section className={styles.titleFloatLeft}>
                            <h5 className={styles.titleGreeting}>Hi there, I am</h5>
                            <h1>Kristen Tidmuss</h1>
                            <h3 className={styles.titleJob}>Developer</h3>
                            <a href={"https://github.com/KristenTidmuss/"}><FontAwesomeIcon icon={['fab','github']} className={styles.titleLinks}></FontAwesomeIcon></a>
                            <a href={"https://www.linkedin.com/in/kristen-tidmuss-116ab8105/"}><FontAwesomeIcon icon={['fab','linkedin']} className={styles.titleLinks}></FontAwesomeIcon></a>
                            <a href={"mailto:kristen.tidmuss@outlook.com?subject=Web%20Enquiry%3A"}><FontAwesomeIcon icon='envelope' className={styles.titleLinks}></FontAwesomeIcon></a>

                        </section>
                        <section className={styles.titleFloatRight}>
                            <img src='/images/Avatar-Color-NoBG.png'/>
                        </section>
                    </section>
                </Fade>
                <Fade top>
                    <section>
                        <h3 className={styles.aboutMeTitle}>About Me</h3>
                        <section className={styles.aboutMe}>
                            <section className={styles.aboutFloatLeft}>
                                <p>I am a 24 year old software developer currently living in Nottingham, UK.
                                    For the last 6 years I have been working for Quotient Sciences in Ruddington under many job roles.
                                    Most recently as an IT Application Support Analyst.
                                    Currently I am studying at Nottingham Trent University working towards a degree in software development along side my full time job.</p>
                            </section>
                            <section className={styles.aboutFloatRight}>
                                C#
                                <ProgressBar now={95} className={styles.aboutSkillBar} />
                                SQL
                                <ProgressBar now={95} className={styles.aboutSkillBar} />
                                MVC
                                <ProgressBar now={90} className={styles.aboutSkillBar} />
                                Blazor
                                <ProgressBar now={90} className={styles.aboutSkillBar} />
                                Powershell
                                <ProgressBar now={80} className={styles.aboutSkillBar} />
                                Python
                                <ProgressBar now={75} className={styles.aboutSkillBar} />
                                React
                                <ProgressBar now={60} className={styles.aboutSkillBar} />
                            </section>
                        </section>
                    </section>
                </Fade>
                <Fade top>
                    <section>
                        <h3 className={styles.experienceTitle}>My Experience</h3>
                        <section className={styles.experience}>
                            <b>Quotient Sciences: IT Application Support Analyst</b>
                            <p>2014 - Present</p>
                            <section className={styles.experienceDescription}>
                                <u>The Company</u>
                                <p>
                                    Quotient Sciences is a drug development and manufacturing accelerator supporting customers from candidate selection to commercial launch.
                                    Quotient Sciences operates in a highly regulated environment and has to comply with multiple standards and agencies such as GMP/GCP, The MHRA and The FDA.
                                </p>
                                <u>My Role</u>
                                <p>
                                    As an IT Application Support Analyst I have a wider variety of jobs. This gives me a strong understanding of how all areas of the
                                    department function. Some of my responsibilities are outlined below:
                                    <ul>
                                        <li>Develop intuitive software compliant with data regulations</li>
                                        <li>Develop efficient and logical databases</li>
                                        <li>Perform maintenance and backups on MSSQL databases.</li>
                                        <li>Maintain and upgrade legacy systems with new technologies</li>
                                        <li>Support end users in accordance with KPIs</li>
                                    </ul>
                                </p>
                            </section>
                        </section>
                    </section>
                </Fade>
                <Fade top>
                    <section>
                        <h3 className={styles.educationTitle}>My Education</h3>
                        <section className={styles.education}>
                            <b>Digital and Technology Solutions Professional (Software Engineering)</b><br/>
                            Nottingham Trent University<br/>
                            2020 - 2024
                        </section>
                        <section className={styles.education}>
                            <b>Microsoft Technology Associate: Database Administration (MTA)</b><br/>
                            <span>Microsoft</span><br/>
                            <span>2020</span>
                        </section>
                        <section className={styles.education}>
                            <b>BTEC Level 3 Diploma in Professional Competence for IT and Telecoms Professionals (QCF)</b><br/>
                            <span>3AAA Apprenticeships</span><br/>
                            <span>2014 - 2015</span>
                        </section>
                        <section className={styles.education}>
                            <b>BTEC Level 3 Extended Diploma in ICT Systems and Principles (QCF)</b><br/>
                            <span>3AAA Apprenticeships</span><br/>
                            <span>2014 - 2015</span>
                        </section>
                    </section>
                </Fade>
                <Fade top>
                    <section>
                        <h3 className={styles.workTitle}>My Work</h3>
                        <section className={styles.work}>
                            <Card className={styles.workCard}>
                                <Card.Img variant="top" src="/images/whom.jpg" />
                                <Card.Body>
                                    <Card.Title>EvE Whom</Card.Title>
                                    <Card.Text>
                                        A small WebAssembly app which takes a characters name from EvE online and a list of other characters,
                                        it then compares their in-game group history via the API to find common groups
                                    </Card.Text>
                                    More Details: <a href={"https://github.com/KristenTidmuss/EvE-Whom"}><FontAwesomeIcon icon={['fab','github']} className={styles.workLinks}></FontAwesomeIcon></a>
                                </Card.Body>
                            </Card>

                        </section>
                    </section>
                </Fade>
            </section>
        </Layout>
    )
}
