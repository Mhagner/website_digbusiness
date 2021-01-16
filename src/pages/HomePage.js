import React from 'react'

import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import PortfolioSection from '../components/PortfolioSection'
import ServiceSection from '../components/ServiceSection'
import Template from '../components/Template'

const HomePage = () => {
    return (
        <div>
            <Template>
                {/* SERVICES SECTION */}
                <ServiceSection />
                {/* ABOUT SECTION */}
                <AboutSection />
                {/* PORTFOLIO SECTION */}
                <PortfolioSection />
                {/* CONTACT SECTION */}
                <ContactSection />
                {/* FOOTER SECTION */}
            </Template>
        </div>
    )
}

export default HomePage