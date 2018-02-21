import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeachers } from '../actions/teacherActions';
import { addSelectedTalk, removeSelectedTalk } from '../actions/selectedTalkActions';
import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';
import RecentTalk from '../components/talks/recentTalk';
import FavoriteTalk from '../components/talks/favoriteTalk';
import TalksFooter from '../components/talks/talksFooter';

class TeachersContainer extends Component {
  componentDidMount() {
    this.props.fetchTeachers(this.props.match);
  }

  onHandleClick = (talk) => {
    this.props.addSelectedTalk(talk);
  }

  render() {
    let teacherList, favoriteTalk, recentTalk;
    const { loading } = this.props;
    if ( loading ) {
      return <h2>loading...</h2>
    }

    const { teachers } = this.props;
    let monastery = teachers[0].monastery
    if( teachers.length === 0 ) {
      teacherList = <h3>Currently no dhamma talks available for { monastery.name }</h3>;
    }

    teacherList = <TeachersList onHandleClick={ this.onHandleClick } teachers={ teachers } />
    let talks = [].concat(...teachers.map(teacher => teacher.talks));
    // Set favorite talk from collection
    recentTalk = talks.sort((a,b) => {
      let aDate = new Date(a.created_at);
      let bDate = new Date(b.created_at);
      return bDate - aDate;
    })[0];
    // set teacher as property on talks Array
    recentTalk.teacher = teachers.filter(teacher => teacher.id === recentTalk.teacher_id);
    // store most favorited talk
    favoriteTalk = talks.sort((a,b) => b.favorites - a.favorites)[0];
    // set teacher as property on talks Array
    favoriteTalk.teacher = teachers.filter(teacher => teacher.id === favoriteTalk.teacher_id);

    return (
      <div className="teachers-container">
        <TeachersHeader monastery={ monastery } />
        <main className="teachers-container--main">
          { teacherList }
          <RecentTalk onHandleClick={ this.onHandleClick } talk={ recentTalk }/>
          <FavoriteTalk onHandleClick={ this.onHandleClick } talk={ favoriteTalk }/>
        </main>
        <TalksFooter />
      </div>
    )
  }
}

// list of components to contain in directory
// TeacherHeader.js
// TeachersList
// favoriteTalk
// recentTalk
// Footer

TeachersContainer.defaultProps = { loading: true };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTeachers, addSelectedTalk, removeSelectedTalk }, dispatch)
}

function mapStateToProps(state) {
  const { teachers, monastery, loading } = state.teachers;
  return {
    teachers: teachers,
    loading: loading
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
