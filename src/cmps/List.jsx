import React from 'react'
import { Preview } from './Preview'

export function List({ projects }) {
    return (<div style={{textAlign:"center",color:"white"}}>
        <h1>PROJECTS</h1>
        <div style={{backgroundColor:'orange',width:'300px',height:'2px',margin:'auto'}}></div>
        <div className="project-list flex column space-around
        ">
            
          
            {
                projects.map((project,idx) => <Preview project={ project } key={ idx } />)
            }

        </div>
        </div>
    )
}
