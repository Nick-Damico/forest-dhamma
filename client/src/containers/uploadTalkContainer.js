import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTeachers } from '../actions/teacherActions';
import { uploadTalk } from '../actions/uploadActions';
import { Link } from 'react-router-dom';

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
    this.setState({
      teacher_id: '',
      title: '',
      file_url: '',
      language: '',
      description: ''
    })
  }

  render() {
    let errorMsg = null;
    const { loading } = this.props;
    if ( loading ) {
      return <h2>Loading...</h2>
    }

    const { teachers, talk } = this.props;
    if ( talk && talk.status === "success" ) {
      const monastery = teachers.filter(teacher => teacher.id === talk.talk.teacher_id)[0].monastery;
      return (
        <div>
          <h3>Upload Successful</h3>
          <Link to={`/monasteries/${monastery.id}`}>Go to Monastery</Link>
        </div>
      )
    }

    if ( talk && talk.status === "error" ) {
      errorMsg = <h3>Error: {JSON.stringify(talk.message)} </h3>;
    }

    return (
      <div className="upload-container">
        <header className="upload-container--header">
          <p>
            Upload and Share <br />
            Your favorite talks
          </p>
        </header>
        <div className="error-msg">
            { errorMsg }
        </div>
        <div className="upload-form-container">
          <form onSubmit={this.onHandleSubmit}>

            <div className="input-container">
              <select
                required className="custom-select" onChange={(e) => this.setState({ teacher_id: e.target.value })}>
                <option defaultValue>Select Teacher</option>
                {teachers.map((teacher,index) => <option key={ index } value={ teacher.id }>{ teacher.name }</option>)}
              </select>
            </div>

            <div className="input-container">
              <input type="text"
                     name="title"
                     placeholder="Title"
                     onChange={(e) => this.setState({ title: e.target.value })}
                     value={ this.state.title }
                     required
              />
            </div>

            <div className="input-container">
              <input type="text"
                     name="file_url"
                     placeholder="File Path"
                     onChange={(e) => this.setState({ file_url: e.target.value })}
                     value={ this.state.file_url }
                     required
              />
            </div>

            <div className="input-container">
              <input type="text"
                     name="language"
                     placeholder="Language"
                     onChange={(e) => this.setState({ language: e.target.value })}
                     value={ this.state.language }
                     required
              />
            </div>

            <div className="input-container">
              <textarea
                placeholder="Description of Talk"
                onChange={(e) => this.setState({ description: e.target.value })}
                value={this.state.description}
                required>
              </textarea>
            </div>
            <button className="upload-button" type="submit">Upload Talk</button>
        </form>
      </div>
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
    talk: state.selectedTalk
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllTeachers, uploadTalk }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadTalkContainer);
