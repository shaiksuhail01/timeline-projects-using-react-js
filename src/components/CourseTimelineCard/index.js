import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <>
      <div className="titleContainer">
        <h1 className="courseHeadingText">{courseTitle}</h1>
        <div className="durationContainer">
          <AiFillClockCircle className="clockIcon" />
          <p className="durationText">{duration}</p>
        </div>
      </div>
      <p className="descriptionText">{description}</p>
      <div className="courseTagListContainer">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="listItemContainer">
            {eachTag.name}
          </p>
        ))}
      </div>
    </>
  )
}
export default CourseTimelineCard
