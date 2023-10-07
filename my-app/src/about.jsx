import React from 'react';

function About() {
  return (
    <div className="about-page">
      <h1>About Our Project</h1>
      <p>
        Welcome to our React project! We're excited to tell you more about what we've been working on.
      </p>

      <h2>Project Overview</h2>
      <p>
        Our project is a [brief description of your project's purpose and goals]. We aim to [mention the project's main objectives].
      </p>

      <h2>Technologies Used</h2>
      <p>
        This project was built using the following technologies:
      </p>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        {/* Add more technologies as needed */}
      </ul>

      <h2>Meet the Team</h2>
      <p>
        Our dedicated team of developers and designers have worked hard to bring this project to life. Meet the key team members:
      </p>
      <div className="team-members">
        <div className="team-member">
          <img src="team-member1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Frontend Developer</p>
        </div>
        <div className="team-member">
          <img src="team-member2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        {/* Add more team members as needed */}
      </div>

      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.
      </p>
      <p>Email: contact@example.com</p>

      {/* Add any other relevant sections as needed */}
    </div>
  );
}

export default About;
