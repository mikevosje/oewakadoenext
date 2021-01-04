import React from 'react'
import Head from 'next/head'
import Wrapper from "../components/wrapper";
import Sidebar from "../components/sidebar";
import ContentWithSidebar from "../components/contentwithsidebar";
import PageHeader from "../components/pageheader";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    
    <Wrapper>
      <Sidebar/>
      <ContentWithSidebar>
        <PageHeader text="Welkom op de website van Oewakadoe, de kindervakantieweek in Hapert"/>
        <p>Op deze site vind je allerlei informatie zoals inschrijfformulieren, de dagindelingen en extra informatie.
          <br/>Daarnaast zullen de foto’s die gemaakt zijn tijdens de Oewakadoeweek op deze site, <a
            href="https://www.facebook.com/OewakadoeHapert" target="_blank" rel="noopener noreferrer">op
            Facebook</a> en <a href="https://www.instagram.com/oewakadoe/" target="_blank"  rel="noopener noreferrer">
            Instagram</a> geplaatst worden.
          <br/><br/>Deelname staat open voor kinderen van het basisonderwijs die binding met Hapert hebben.<br/>
          De groepsindeling is gebaseerd op de situatie op het moment van inschrijving. Dus zit uw kind op het moment
          van aanmelden in bijv. groep 3, dan geldt dit ook tijdens de Oewakadoe week.<br/>
        Gedurende de hele week zal deze groep onder leiding staan van een of meerdere begeleid(st)ers.<br/><br/>
        Oewakadoe vindt plaats in de laatste week van de basisschool vakantie. In 2020 is dat van 30 augustus t/m
          3 september.<br/><br/>
          Zorg dus dat je er bij bent!</p>
        <p>Team Oewakadoe</p>
      </ContentWithSidebar>
    </Wrapper>
    
    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
