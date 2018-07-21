import React from 'react';
import { connect } from 'react-redux';
//import getSelectedProject from '../selectors';

const Project = ({selectedProject}) =>{
  return (
    <div className='Selected-Project-Wrapper'>
      <div className='Selected-Project'>
        <img className='Selected-Project-Img' src={selectedProject.bigImgUrl} alt={selectedProject.title} />
        <div>
          <h3>{selectedProject.title}</h3>
          {selectedProject.description}
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
