import React from 'react';
import '../../style/portfilio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import GitHub and external link icons

const portfolioItems = [
  { 
    title: 'Static Interactive Resume',
    Image: '/prt-1.png',
    githublink: 'https://github.com/atammara/hackathon-milestone/tree/main/milestone-1', 
    vercellink: 'https://milestone1-2-henna.vercel.app/' 
  },
  { 
    title: 'Dynamic Resume Builder',
    Image: '/port3.png',
    githublink: 'https://github.com/atammara/hackathon-milestone/tree/main/milestone-3',
    vercellink: 'https://milestone-3-liart.vercel.app/' 
  },
  { 
    title: 'Editable Resume Builder',
    Image: '/prt-4.png',
    githublink: 'https://github.com/atammara/hackathon-milestone/tree/main/milestone-4',
    vercellink: 'https://milestone-4-ruby.vercel.app/' 
  },
  { 
    title: 'Shareable Resume Builder',
    Image: 'port-5.png',
    githublink: 'https://github.com/atammara/hackathon-milestone/tree/main/milestone-5',
    vercellink: 'https://milestone-5-roan-ten.vercel.app/' 
  },
  { 
    title: 'To-Do List',
    Image: '/todo.png',
    githublink: 'https://github.com/atammara/todo-list.git',
    vercellink: 'https://todo-list-eta-ebon.vercel.app/' 
  },
  { 
    title: 'Calculator',
    Image: '/calculator.png',
    githublink: 'https://github.com/atammara/web-cli.git',
    vercellink: 'https://web-cli-coral.vercel.app/' 
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.Image} alt={item.title} />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <div className="portfolio-links">
                <a href={item.githublink} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} style={{ marginRight: '10px' }} />
                </a>
                <a href={item.vercellink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
