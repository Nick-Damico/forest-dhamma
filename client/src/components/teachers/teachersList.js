import React from 'react';
import TeacherItem from './teacherItem';

const TeachersList = ({ teachers }) => {
  let teacherItems = teachers.map((teacher,index) => <TeacherItem key={index} teacher={teacher} /> )
  return (
    <div className="teachersContainer">
      {teacherItems}
    </div>
  )
}

export default TeachersList;
