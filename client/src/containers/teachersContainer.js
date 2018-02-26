import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeachers } from '../actions/teacherActions';
import { fetchMonasteries } from '../actions/monasteryActions';
import { addSelectedTalk } from '../actions/selectedTalkActions';
import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';
import RecentTalk from '../components/teachers/recentTalk';
import FavoriteTalk from '../components/teachers/favoriteTalk';
import Footer from '../components/static/footer';
import { mostRecent } from '../helper';

class TeachersContainer extends Component {

  componentDidMount() {
    const { monasteries } = this.props.monasteries;

    this.props.fetchTeachers(this.props.match);
    if ( monasteries.length === 0 ) {
      this.props.fetchMonasteries();
    }
  }

  onHandleClick = (talk) => {
    this.props.addSelectedTalk(talk);
  }

  render() {
    let teacherList, favoriteTalk, recentTalk;
    if ( this.props.teachers.loading || this.props.monasteries.loading ) {
      return <h2>loading...</h2>
    }

    const { teachers }  = this.props.teachers;
    const { monasteries } = this.props.monasteries;
    const { monasteryId } = this.props.match.params;
    // select monastery
    const monastery = monasteries.find( monastery => monastery.id == monasteryId )
    if( teachers.length === 0 ) {
      return (
            <div className="teachers-container">
                <TeachersHeader monastery={ monastery } />
                <h2>Currently no dhamma talks available for { monastery.name }</h2>
            </div>
      )
    }

    // Create Array on Objects using .concat and spread operator
    let talks = [].concat(...teachers.map(teacher => teacher.talks));
    // Set most recently uploaded talk from collection
    recentTalk = mostRecent( talks );
    // Set Teacher as property on recentTalk
    recentTalk.teacher = teachers.filter(teacher => teacher.id === recentTalk.teacher_id);

    // Set most favorited talk
    favoriteTalk = talks.sort((a,b) => b.favorites - a.favorites)[0];
    // Set teacher as property on favoriteTalk
    favoriteTalk.teacher = teachers.filter(teacher => teacher.id === favoriteTalk.teacher_id);

    teacherList = <TeachersList onHandleClick={ this.onHandleClick } teachers={ teachers } />
    return (
      <div className="teachers-container">
        <TeachersHeader monastery={ monastery } />
        <main className="teachers-container--main">
          { teacherList }
          <RecentTalk onHandleClick={ this.onHandleClick } talk={ recentTalk }/>
          <FavoriteTalk onHandleClick={ this.onHandleClick } talk={ favoriteTalk }/>
        </main>
        <Footer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTeachers, addSelectedTalk, fetchMonasteries }, dispatch)
}

function mapStateToProps(state) {
  return {
    teachers: state.teachers,
    monasteries: state.monasteries,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
