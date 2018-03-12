import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMonasteries } from '../actions/monasteryActions';
import { addSelectedTalk } from '../actions/selectedTalkActions';
import { mostRecent } from '../helper';

import TeachersHeader from '../components/teachers/teachersHeader';
import TeachersList from '../components/teachers/teachersList';
import RecentTalk from '../components/teachers/recentTalk';
import FavoriteTalk from '../components/teachers/favoriteTalk';


class TeachersContainer extends Component {
  constructor() {
    super();

    this.onHandleClick = this.onHandleClick.bind(this);
  }
  // Lifecycle Methods
  componentDidMount() {
    const { monasteries } = this.props;
    if ( !monasteries.length ) {
      this.props.fetchMonasteries();
    }
  }

  // Helper Methods
  renderNoTeachers = ( monastery ) => {
    return (
      <div className="teachers-container">
          <TeachersHeader monastery={ monastery } />
          <h2>Currently no dhamma talks available for { monastery.name }</h2>
      </div>
    )
  }

  selectMonastery = () => {
    const { monasteryId } = this.props.match.params;
    return this.props.monasteries.filter(m => m.id === parseInt(monasteryId,10))[0]
  }

  getFavoriteTalk = ( talks ) => {
    return talks.sort((a,b) => b.favorites - a.favorites)[0];
  }

  // EventHandlers
  onHandleClick = (talk) => {
    this.props.addSelectedTalk(talk);
  }

  // Component Render
  render() {
    const { monasteries, isLoading } = this.props;
    if ( !monasteries.length || isLoading ) {
      return <h2>loading...</h2>
    }

    const monastery = this.selectMonastery();
    const { teachers, talks }  = monastery;

    if( !teachers.length ) {
      return this.renderNoTeachers( monastery );
    }
    // Set most recently uploaded talk from collection
    let recentTalk = mostRecent( talks );
    // Set most favorited talk
    let favoriteTalk = this.getFavoriteTalk( talks );

    let teacherList = <TeachersList onHandleClick={ this.onHandleClick } teachers={ teachers } />
    return (
      <div className="teachers-container">
        <TeachersHeader monastery={ monastery } />
        <main className="teachers-container--main">
          <div className="wrapper">
          { teacherList }
          <RecentTalk onHandleClick={ this.onHandleClick } talk={ recentTalk }/>
          <FavoriteTalk onHandleClick={ this.onHandleClick } talk={ favoriteTalk }/>
          </div>
        </main>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addSelectedTalk, fetchMonasteries }, dispatch)
}

function mapStateToProps(state) {
  return {
    monasteries: state.monasteries.collection,
    isLoading: state.monasteries.isLoading
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
