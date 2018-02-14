import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeachers } from '../actions/teacherActions';
import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';


class TeachersContainer extends Component {
  componentDidMount() {
    this.props.fetchTeachers(this.props.match)
  }

  render() {
    let teacherList;
    const { teachers } = this.props;
    const monastery = teachers ? teachers[teachers.length - 1] : null;
    if ( teachers[0] ) {
      if ( teachers[0].length > 1) {
      teacherList = <TeachersList teachers={teachers[0]} />
    } else {
      teacherList = <h3>Currently no dhamma talks available for {monastery}</h3>;
      }
    }
    return (
      <div>
          { teachers.length === 0
            ? <h2>Loading</h2>  :
            <TeachersHeader monastery={monastery} />
          }
          { teacherList }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTeachers }, dispatch)
}

function mapStateToProps(state) {
  return { teachers: state.teachers }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
