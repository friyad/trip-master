import React from 'react';
import useSrollRestore from '../../Hooks/useSrollRestore';
import aboutUsImage from '../../images/aboutUsImage.jpg'

const About = () => {
    useSrollRestore()
    return (
        <div className="mt-24 xs:w-11/12 max-w-screen-3xl mx-auto">
            <div>
                <h1 className="text-4xl text-left text-gray-800 font-bold font-mochy">About Us</h1>
                <hr className="my-2" />
                <div className="my-3 grid xs:grid-cols-1 lg:grid-cols-12 gap-x-5 text-left">
                    <div className="lg:col-span-12 xs:col-span-1">
                        <p className="text-justify text-xl">In-depth interviews with 19 owners of exceptionally successful US-based conventional travel agencies revealed negative public perceptions of travel agencies to be the main external threat facing the sector. Misplaced faith in Internet-based cybermediaries, unqualified travel agents, negative mass media coverage and failure to attract young entrants were constituent sub-themes. Public outreach was identified as the main opportunity to counter these perceptions, with inherent interest in travel and the need for geographical awareness revealed as sub-themes. Other threats were unfavorable relations with some vendors, and geopolitical and economic uncertainty. Other opportunities were niche products and markets, Internet technologies, and consolidation and reduced competition.
                        </p>
                    </div>

                    <p className="lg:col-span-7 xs:col-span-1 text-justify text-xl">
                        As with other open system sectors, tourism and hospitality organizations commonly engage in strategic planning as a means of gaining competitive advantage in the face of an increasingly uncertain, dynamic and complex world (Harrison, 2003; Jogaratnam & Law, 2006). A core component of strategic planning is strategic (or SWOT) analysis, which entails the identification and assessment of internal strengths and weaknesses, as well as external opportunities and threats (Tribe, 2005). Superior performance is achieved, at least in principle, if the organization is able to align its internal environment (e.g. strategic direction, competitive strategies, allocation of resources, etc.) to respond optimally to these external opportunities and threats (Olsen & Roper, 1998).

                        The external component, accordingly, is a critical aspect of strategic planning that is apprehended through a process of ‘environmental scanning’ (or ES) (Jogaratnam & Law, 2006), which Okumus (2004) defines as ‘the employment of systematic methods … to monitor and forecast those external forces and developments that are not under the direct control of the organization or its industry’ (p. 124). A useful distinction in ES can be made between the ‘task environment’, or vendors, media, local communities, government agencies, customers and other groups that the organization regularly interacts with, and the ‘broad environment’, which encompasses the sociocultural, ecological, geopolitical, economic and technological contexts that the organization operates within. The distinction is important because organizations can exert at least some influence over the task environment but little or none over the broad environment, suggesting the respective utility of proactive and reactive organizational strategies (Harrison, 2003).
                    </p>
                    <div className="lg:col-span-5 xs:col-span-1 p-4">
                        <img src={aboutUsImage} alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;