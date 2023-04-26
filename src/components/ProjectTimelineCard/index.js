import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails
  return (
    <div className="courseContainer">
      <img src={imageUrl} className="projectImage" alt="project" />
      <div className="titleContainer">
        <h1 className="courseHeadingText">{projectTitle}</h1>
        <div className="durationContainer">
          <AiFillCalendar className="clockIcon" />
          <p className="durationText">{duration}</p>
        </div>
      </div>
      <p className="descriptionText">{description}</p>
      <a href={projectUrl} className="linkText">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
