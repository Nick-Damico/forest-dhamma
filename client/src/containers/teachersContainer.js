import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeachers } from '../actions/teacherActions';
import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';
import RecentTalk from '../components/talks/recentTalk';
import FavoriteTalk from '../components/talks/favoriteTalk';


class TeachersContainer extends Component {
  componentDidMount() {
    this.props.fetchTeachers(this.props.match)
  }

  render() {
    let teacherList, favorite, recentTalk;
    const { teachers } = this.props;
    // Create a selectedMonastery is app state data on selecting a monastery to remove
    // overly complicated code below.
    const monastery = teachers ? teachers[teachers.length - 1] : null;
    if ( teachers[0] ) {
      if ( teachers[0].length >= 1) {
      teacherList = <TeachersList teachers={teachers[0]} />
      // store most recent talk ? remove this step by fetch request for talks from server?
      let talks = [].concat(...teachers[0].map(teacher => teacher.talks));
      recentTalk = talks.sort((a,b) => {
        let aDate = new Date(a.created_at);
        let bDate = new Date(b.created_at);
        return bDate - aDate;
      })[0];
      recentTalk.teacher = teachers[0].filter(teacher => teacher.id === recentTalk.teacher_id);
    } else {
      teacherList = <h3>Currently no dhamma talks available for {monastery}</h3>;
      }
    }
    return (
      <div>
          { teachers.length === 0
            ? <h2>Loading</h2>  :
            <div>
            <TeachersHeader monastery={monastery} />
            { teacherList }
            <RecentTalk talk={recentTalk}/>
            <FavoriteTalk />
            </div>
          }

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
