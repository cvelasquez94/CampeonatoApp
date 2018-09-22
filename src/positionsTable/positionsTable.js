import React , {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import Table from '../../components/table';
import {connect} from 'react-redux';
function mapStateToProps(state) {
  console.log('state1',state)
  return {
      list: state.positionsTableList
  }
}
class PositionsTable extends Component {
  setNomEquipo = () => {
    console.log(this.props.list)
  }

  componentWillMount() {
    this.setNomEquipo();
  }
  state = {
    tableHead: [
    {
      title: 'Equipo',
      dataIndex: 'EQ_NOMBRE',
      width: 15
    },
    {
      title: 'PJ',
      dataIndex: 'TBL_PART_JUG',
      width: 10
    },
    {
      title: 'PG',
      dataIndex: 'TBL_PART_GAN'
    },
    {
      title: 'PE',
      dataIndex: 'TBL_PART_EMP'
    },{
      title: 'PP',
      dataIndex: 'TBL_PART_PERD'
    },{
      title: 'RPts',
      dataIndex: 'TBL_PTS_REUNION'
    },{
      title: 'Pts',
      dataIndex: 'TBL_PTS'
    }]
  };
    render(){
        const state = this.state;
        return(
          <View style={{flex: 1}}>
            <Table height={500} columnWidth={160} columns={state.tableHead} dataSource={this.props.list} />
          </View>
        )
    }
}

export default connect(mapStateToProps)(PositionsTable);