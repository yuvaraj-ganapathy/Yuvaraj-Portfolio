import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'
import "./Certification.css";
import Footer from '../components/Footer';
import tensorflow from "../assets/tensorflow.png"
import redhat from "../assets/redhat.png"
import awsda from "../assets/aswda.png"
import awscp from "../assets/awscp.png"
import az900 from "../assets/az900.png"
import ai900 from "../assets/ai900.png"

function Certifications() {
  return (
    <div>
        <Navbar />
        <h2 className='project-heading'>My <span className='lime'>Certifications</span></h2>
        <div className='cert-container'>
        <CertificationCard name="AWS Cloud Practitioner" image={awscp} link="https://www.credly.com/badges/f540ed41-cc02-4ba7-8daf-15fcecf77f9b/public_url"/>
        <CertificationCard name="AWS Developer Associate" image={awsda} link="https://www.credly.com/badges/203d890d-98ca-49be-bc64-40aa408e95c2/public_url" />
        <CertificationCard name="RedHat Developer" image={redhat} link="https://www.credly.com/badges/c4e5e0c5-771e-4fe3-b4dd-d9cd53435ab7/public_url"/>
        </div>
        
        
        <Footer />
    </div>
  )
}

export default Certifications