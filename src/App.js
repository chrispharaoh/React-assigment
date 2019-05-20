import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              WELCOME TO SIMPLE MESSAGE DRAFT WEB APPLICATION
            </h3>
          </div>
          <div className="panel-body">
           <span className="btn btn-primary"> <h4><Link to="/create">CREATE NEW DRAFT MESSAGES</Link></h4></span>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>message</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map((board, index) =>
                  <tr key={index}>
                    <td className="showlist"><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td className="messag">{board.description}</td>
                    <td>{board.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
