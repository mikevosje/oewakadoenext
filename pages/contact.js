import React from 'react'
import Head from 'next/head'
import Wrapper from "../components/wrapper";
import Sidebar from "../components/sidebar";
import ContentWithSidebar from "../components/contentwithsidebar";
import PageHeader from "../components/pageheader";

const Contact = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    
    <Wrapper>
      <Sidebar/>
      <ContentWithSidebar>
        <PageHeader text="Contact"/>
        <p>Oewakadoe vindt plaats op het terrein van de handboogvereniging op de Lemelvelden aan de Burg. Van
          Woenseldreef in Hapert.<br/>
          Heeft u vragen kunt u altijd&nbsp;<a href="mailto:info@oewakadoe.nl">mailen</a>.</p>
        <img className="imggroup img-fluid mt-3" src="/static/images/teamfoto-2019.jpg" alt="Teamfoto Oewakadoe 2019"/>
      </ContentWithSidebar>
    </Wrapper>
    
    <style jsx>{`
      .imggroup {
      max-width: 400px;
    `}</style>
  </div>
)

export default Contact
