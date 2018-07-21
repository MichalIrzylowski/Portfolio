import React from 'react';
import { Link } from 'react-router-dom'
//import { connect } from 'react-redux';
// import { SELECT_PROJECT } from '../redux/ActionTypes'

const ProjectCard = ({title, description, url, image, id/*, selectProject*/}) => {
  /*const dispatchSelectedProject = () => {
    selectProject(id);
  }*/
  return (<div className='ProjectCard'>
    <img src={image ? image : 'http://via.placeholder.com/247x130'} alt='Obrazek dla projektu' className='ProjectCard-Img' />
    <h4 className='ProjectCard-Title' /*onClick={dispatchSelectedProject}*/><Link to={`/Projects/${id}`}>{title}</Link></h4>
    <p className='ProjectCard-Description'>{`${description.substring(0, 60)}...`}</p>
    <a href={url} style={{color: '#096dd9'}}>Repozytorium</a>
  </div>)
}
/*
function mapDispatchToProps (dispatch) {
  return {
    selectProject: id => dispatch({type: SELECT_PROJECT, id})
  }
}
*/
export default /*connect(null, mapDispatchToProps)*/ProjectCard;
