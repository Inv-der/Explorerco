import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    // Load the team data from the JSON file
    import('./data/member.json').then(data => {
      setTeamData(data);
    });
  }, []);

  if (!teamData) return <div>Loading...</div>;

  return (
    <div className="about-container">
      <h1>About Team {teamData.teamName}</h1>
      <p>{teamData.description}</p>

      <h2>Team Members</h2>
      <div className="team-members">
        {teamData.members.map(member => (
          <div className="card">
          <img className="img" src={member.image}/>
          <div className="textBox">
            <p className="text head">{member.name}</p>
            <span>{member.role}</span>
            <p className="text price">{member.description}</p>
          </div>
        </div>
           
        ))}
      </div>

      <h2>Our Challenge</h2>
      <p>{teamData.challenge}</p>
    </div>
  );
}

export default About;
