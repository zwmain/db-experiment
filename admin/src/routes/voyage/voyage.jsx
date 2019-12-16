import React from 'react';
import AddVoyage from '../../components/add-voyage/add-voyage.jsx';
import {
  addVoyage as apiAddVoyage,
  getAllVoyages as apiGetAllVoyages
} from '../../api/voyage/voyage';
import { message } from 'antd';
import { connect } from 'react-redux';
import { actionGetAllVoyages } from '../../redux/action/voyage';
import ManageVoyage from '../../components/manage-voyage/manage-voyage.jsx';

import './voyage.css';

class Voyage extends React.Component {
  constructor(x) {
    super(x);

    this.addVoyage = this.addVoyage.bind(this);
    this.getAllVoyages = this.getAllVoyages.bind(this);

    this.getAllVoyages();
  }

  addVoyage(item) {
    apiAddVoyage(item)
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          message.success('添加成功');
          this.getAllVoyages();
        } else {
          message.error('添加失败：' + res.message);
        }
      })
      .catch(e => {
        message.error('添加失败：' + e.toString());
      });
  }

  getAllVoyages() {
    apiGetAllVoyages()
      .then(v => {
        let res = v.data;
        if (res.status === 0) {
          this.props.dispatchAllVoyages(res.data);
        }
      })
      .catch(e => {
        message.error('航次获取失败：' + e.toString());
      });
  }

  render() {
    return (
      <div className={'voyage'}>
        <AddVoyage submit={this.addVoyage} />
        <ManageVoyage voyages={this.props.voyages} getAllVoyages={this.getAllVoyages} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    voyages: state.voyages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAllVoyages: data => {
      dispatch(actionGetAllVoyages(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Voyage);
