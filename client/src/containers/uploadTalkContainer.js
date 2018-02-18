import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTeachers } from '../actions/teacherActions';
import { uploadTalk } from '../actions/uploadActions';

class UploadTalkContainer extends Component {
  constructor() {
    super();

    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.state = {
      teacher_id: '',
      title: '',
      file_url: '',
      language: '',
      description: '',
    }
  }

  componentDidMount() {
    this.props.fetchAllTeachers();
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.uploadTalk( this.state )

  }


  render() {
    const { loading } = this.props;
    if ( loading ) {
      return <h2>Loading...</h2>
    }
    const { teachers } = this.props;
    return (
      <div>
        <header>
          <p>
            Upload and Share <br />
            Your favorite talks
          </p>
        </header>
        <form onSubmit={this.onHandleSubmit}>
          <select
            required onChange={(e) => this.setState({ teacher_id: e.target.value })}>
            <option defaultValue>Select Teacher</option>
            {teachers.map((teacher,index) => <option key={ index } value={ teacher.id }>{ teacher.name }</option>)}
          </select><br />
          <input type="text"
                 name="title"
                 placeholder="Title"
                 onChange={(e) => this.setState({ title: e.target.value })}
                 value={ this.state.title }
                 required
          /><br />
          <input type="text"
                 name="file_url"
                 placeholder="File Path"
                 onChange={(e) => this.setState({ file_url: e.target.value })}
                 value={ this.state.file_url }
                 required
          /><br />
          <input type="text"
                 name="language"
                 placeholder="Language"
                 onChange={(e) => this.setState({ language: e.target.value })}
                 value={ this.state.language }
                 required
          /><br />
          <textarea
            placeholder="Description of Talk"
            onChange={(e) => this.setState({ description: e.target.value })}
            value={this.state.description}
            required>
          </textarea><br />
          <button type="submit">Upload Talk</button>
      </form>
    </div>

    )
  }
}

UploadTalkContainer.defaultProps = { loading: true };

const mapStateToProps = (state) => {
  const { teachers, loading } = state.teachers;
  return {
    teachers: teachers,
    loading: loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllTeachers, uploadTalk }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadTalkContainer);
