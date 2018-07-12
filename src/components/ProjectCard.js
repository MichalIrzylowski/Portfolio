import React from 'react';
// import { Link } from 'react-router-dom'

const ProjectCard = ({title, description, url, image, id}) => (
  <div className='ProjectCard'>
    <img src={image ? image : 'http://via.placeholder.com/247x130'} alt='Obrazek dla projektu' className='ProjectCard-Img' />
    <h4>{/*<Link to={`/Projects/${id}`}>*/}{title}{/*</Link>*/}</h4>
    <p className='ProjectCard-Description'>{description}</p>
    <a href={url}>Repozytorium</a>
  </div>
)

export default ProjectCard;
