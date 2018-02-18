import React from 'react';

const FormComponent = ({ teachers }) => {
  return (
    <form>
      <h2>upload form</h2>
      {/* <select>
        <SelectOptions teachers={teachers} />
      </select> */}
    </form>
  )
}

const SelectOptions = ({ teachers }) => {
  const options = teachers.map((teacher, index) => <option value={teacher.id}>{teacher.name}</option>)
  return {options}
}

export default FormComponent;
