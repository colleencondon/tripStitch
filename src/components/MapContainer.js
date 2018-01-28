import React from 'react';
import GoogleApiComponent from 'google-maps-react';

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vw'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <Map google={this.props.google} />
    )
  }
}
  
export default GoogleApiComponent({
  apiKey: 'AIzaSyDfBDxMdthsDxdJLj4AcLbRg5dVdWuEovw'    
})(Container)