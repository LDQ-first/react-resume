import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  ProjectDiv  from '../../styled/Project.js'

export default class Project extends Component {
    static get propTypes() {
        return {
           _this: PropTypes.object
        }
    }

     componentDidMount() {
         const {_this} = this.props
         console.log(this._project)
         console.log(this._project.offsetTop)
         _this._setTopData(2, this._project.offsetTop)
    }
    

    render() {
    
        return (
            <ProjectDiv>
               <div className="projectContent" ref={project => this._project = project}>
                   <h2 className="project">
                    项目
                  </h2>
               </div>
            </ProjectDiv>
        )
    }
}
