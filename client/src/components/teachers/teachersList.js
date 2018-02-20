import React from 'react';
import TeacherItem from './teacherItem';

const TeachersList = ({ teachers, onHandleClick }) => {
  const teacherItems = teachers.map((teacher,index) => {
    return (
       <TeacherItem
         onHandleClick={onHandleClick}
         key={index}
         teacher={teacher}
       />
     )
  });
  return (
    <div className="teachers-list">
      {teacherItems}
    </div>
  )
}

export default TeachersList;
