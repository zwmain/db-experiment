import React from 'react';
import LogonForm from '../../components/logon-form/logon-form.jsx';

class Logon extends React.Component{
  constructor(x){
    super(x);
  }
  render() {
    return <div className={'logon'}>
      <LogonForm/>
    </div>;
  }
}

export default Logon;
