import { useEffect, useRef, useState } from "react";
import AOS from 'aos';

import { NavBar } from "../NavBar/NavBar";
import { Hello } from "../../Pages/Hello/Hello"
import { Experience } from "../../Pages/Experience/Experience";
import { Projects } from '../../Pages/Projects/Projects'
import { Contact } from '../../Pages/Contact/Contact'
import { useOnScreen } from "../../utils/Utils";

import 'aos/dist/aos.css';

const Section: (children: any, setActive: () => void) => JSX.Element = ({ children, setActive }) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (ref.current && onScreen) {
      const timeout = setTimeout(() => setActive(), 250)
      return () => clearTimeout(timeout)
    }
  }, [ref, onScreen, setActive])

  return (
    <div ref={ref} >
      {children}
    </div>
  )
}

AOS.init();

export const Main = () => {
  const [activeLink, setActiveLink] = useState('Hello')

  return (
    <div className="App">
      <NavBar activeLink={activeLink} />
      <div>
        {/* Hello section */}
      <Section setActive={() => setActiveLink('Hello')}>
        <div
          id="Hello"
          className='Hello'
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="5000"
          data-aos-once="true"
          data-aos-mirror='false'
        >
          <Hello />
        </div>
      </Section>
      {/* Experience section */}
      <Section setActive={() => setActiveLink('Experience')}>
        <div
          id="Experience"
          className='Experience'
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <Experience />
        </div>
      </Section>
      {/* Projects section */}
      <Section setActive={() => setActiveLink('Projects')}>
        <div
          id="Projects"
          className='Projects'
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <Projects />
        </div>
      </Section>
      {/* Contact section */}
      <Section setActive={() => setActiveLink('Contact')}>
        <div
          id="Contact"
          className='Contact'
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <Contact />
        </div>
      </Section>
      </div>
    </div>
  )
}