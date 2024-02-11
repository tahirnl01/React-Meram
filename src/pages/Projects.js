import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helper/ProjectList';

function Projects() {
  return (
    <div className='project'>
      <h1>Projeler</h1>
      <div className='projectList'>
        {ProjectList.map((project) => {
          return <ProjectItem name= {project.name} image={project.image} />
        })}
        <a href='https://www.meram.bel.tr/projeler' className='btn-project'>tüm projelerimiz</a>
      </div>
    </div>
  )
}

export default Projects