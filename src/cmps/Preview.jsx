import React from 'react'

export function Preview({project}) {
    return (
        
             <div className="project-preview flex ">
    <div className="preview-img" style={{backgroundImage:`url(${require(`../styles/images/${project.imgUrlName}.PNG`)})`}}></div>
     <div className="preview-info flex column"> <h3>{project.name}</h3>
      <p>{project.desc}</p>
      <a href={`${project.url}`} target="blank">Check it out</a>
      </div>
</div>
        
    )
}
