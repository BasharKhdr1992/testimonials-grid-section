import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import assets from './assets';

const App = () => {
  return (
    <div className="wrapper">
      <div className="testimonial-grid">
        <div className="testimonial-grid-left">
          <Testimonial
            width={50}
            borderColor={'hsl(210, 46%, 95%)'}
            colorTheme={{
              username: 'username-light',
              jobTitle: 'job-title-light',
              mainPara: 'main-para-light',
              reviewQuote: 'review-quote-light',
            }}
            username="Daniel Clifford"
            jobTitle="Verified Graduate"
            main_para={`I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.`}
            quote={`“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`}
            profile_image={assets.daniel}
            bgColor={'hsl(263, 55%, 52%)'}
          />
          <Testimonial
            width={25}
            borderColor={'hsl(210, 46%, 95%)'}
            colorTheme={{
              username: 'username-light',
              jobTitle: 'job-title-light',
              mainPara: 'main-para-light',
              reviewQuote: 'review-quote-light',
            }}
            username="Jonathan Walters"
            jobTitle="Verified Graduate"
            main_para={`The team was very supportive and kept me motivated`}
            quote={`“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”`}
            profile_image={assets.jonathan}
            bgColor={'hsl(217, 19%, 35%)'}
          />
          <Testimonial
            width={25}
            borderColor={'hsl(210, 46%, 95%)'}
            colorTheme={{
              username: 'username-dark',
              jobTitle: 'job-title-dark',
              mainPara: 'main-para-dark',
              reviewQuote: 'review-quote-dark',
            }}
            bgColor={`hsl(0, 0%, 100%)`}
            username="Jeanette Harmon"
            jobTitle="Verified Graduate"
            main_para="An overall wonderful and rewarding experience"
            quote={`“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”`}
            profile_image={assets.jeanette}
          />
          <Testimonial
            width={50}
            borderColor={'hsl(263, 55%, 52%)'}
            colorTheme={{
              username: 'username-light',
              jobTitle: 'job-title-light',
              mainPara: 'main-para-light',
              reviewQuote: 'review-quote-light',
            }}
            bgColor={`hsl(219, 29%, 14%)`}
            username="Patrick Abrams"
            jobTitle="Verified Graduate"
            main_para="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
            learning from their experiences was easy."
            quote={`“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”`}
            profile_image={assets.patrick}
          />
        </div>
        <Testimonial
          width={20}
          borderColor={'hsl(210, 46%, 95%)'}
          colorTheme={{
            username: 'username-dark',
            jobTitle: 'job-title-dark',
            mainPara: 'main-para-dark',
            reviewQuote: 'review-quote-dark',
          }}
          bgColor={`hsl(0, 0%, 100%)`}
          username="Kira Whittle"
          jobTitle="Verified Graduate"
          main_para="Such a life-changing experience. Highly recommended!"
          quote={`  “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”`}
          profile_image={assets.kira}
        />
      </div>
      <div class="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <button href="#">Bashar Khdr</button>.
      </div>
    </div>
  );
};

export default App;
