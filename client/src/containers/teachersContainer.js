import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeachers } from '../actions/teacherActions';
import { addSelectedTalk, removeSelectedTalk } from '../actions/selectedTalkActions';
import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';
import RecentTalk from '../components/talks/recentTalk';
import FavoriteTalk from '../components/talks/favoriteTalk';


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

    const { teachers, monastery } = this.props;
    if( teachers.length === 0 ) {
      teacherList = <h3>Currently no dhamma talks available for {monastery}</h3>;
    }

    teacherList = <TeachersList onHandleClick={this.onHandleClick} teachers={teachers} />
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
      <div>
        <TeachersHeader monastery={monastery} />
        { teacherList }
        <RecentTalk onHandleClick={this.onHandleClick} talk={recentTalk}/>
        <FavoriteTalk onHandleClick={this.onHandleClick} talk={favoriteTalk}/>
      </div>
    )
  }
}

TeachersContainer.defaultProps = { loading: true };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTeachers, addSelectedTalk, removeSelectedTalk }, dispatch)
}

function mapStateToProps(state) {
  const { teachers, monastery, loading } = state.teachers;
  return {
    teachers: teachers,
    loading: loading,
    monastery: monastery
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
