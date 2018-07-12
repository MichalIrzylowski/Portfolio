import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const Projects = ({projects}) => {
  const projectCards = projects.map(p => (
    <ProjectCard key={p.id} id={p.id} title={p.title} description={p.description} url={p.url} image={p.imgUrl} />
  ))
  return (
    <div className='Informations ProjectList'>
      {projectCards}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    projects: state.loadedProjects.projects
  }
}

export default connect(mapStateToProps)(Projects);
