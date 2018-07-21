import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import getSelectedProject from '../selectors';

const Project = ({selectedProject}) =>{
  return (
    <div className='Selected-Project-Wrapper'>
      <div className='Selected-Project'>
        <Link to='/Projects'><i class="fas fa-arrow-left"></i> Powrót do projektów</Link>
        <img className='Selected-Project-Img' src={selectedProject.bigImgUrl} alt={selectedProject.title} />
        <div className='Selected-Project-Description'>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
        </div>
    </div>
    </div>
  )
}


function mapStateToProps (state, ownProps) {
  return {
    selectedProject: state.loadedProjects.projects.find( p => p.id === +ownProps.match.params.id)
  }
}

export default connect(mapStateToProps)(Project);
