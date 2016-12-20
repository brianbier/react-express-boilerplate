import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

class Layout extends React.Component {
  render(){
    return (
    <DocumentTitle title='Just Search'>
      <div className="row">
      <div className="col-md-3">
      Menu Bar
      </div>
        <div className="col-md-9">
          <main>
           {this.props.children}
          </main>
        </div>
      </div>
    </DocumentTitle>
    )
  }
}


export default Layout;