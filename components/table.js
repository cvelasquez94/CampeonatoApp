import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

class Table extends Component {

    _renderCell(cellData, col){
        let style1 = this.validateWithRowAndCol(col);
        //console.log('CELDA', cellData, col)
        return (
            <View key={col.dataIndex} style={[styles.cell, style1]}>
                <Text style={{color: 'white'}}>{cellData}</Text>
            </View>
        )
    }

    _renderHeader(){
        let {columns, columnWidth} = this.props;
        //let style = this.validateWithRowAndCol();
        return columns.map((col, index) => {
            let style = this.validateWithRowAndCol(col);
            return (
                <View key={index} style={[styles.headerItem, style]}>
                    <Text>{col.title}</Text>
                </View>
            )
        })
    }

    validateWithRowAndCol(col) {
        let style1, width1;
        if (col.dataIndex === 'EQ_NOMBRE') {
            width1 = 160;
        }else {
            width1 = 40
        }
        return style1 = {
            width : width1
        }
    }

    validateRow(col, rowData) {
        if (col.dataIndex === 'EQ_NOMBRE') {
            return rowData.EQUIPO['EQ_NOMBRE']
        }
        return rowData[col.dataIndex]
    }

    _renderRow(rowData, index) {
        let { columns, renderCell} = this.props;
        // console.log( columns, renderCell,rowData, index )
        if(!renderCell) {
            renderCell = this._renderCell.bind(this, )
        }
        return (
            <View key={index} style={styles.row}>
                {
                    columns.map(col => renderCell(this.validateRow(col, rowData), col))
                }
            </View>
        )
    }

    render() {
        let { dataSource, height } = this.props;
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={[styles.contentContainer , { height }]}
                horizontal={true}
                bounces={false}
            >
                <View>
                    <View style={styles.header} >
                        {this._renderHeader()}
                    </View>
                    <ScrollView
                        style={styles.dataView}
                        contentContainerStyle={styles.dataViewContent} 
                    >
                        { dataSource.map((rowData, index) => this._renderRow(rowData, index))}
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#022c43'
    },
    contentContainer: {
      height: 240
    },
    header: {
      flexDirection: 'row',
    },
    headerItem: {
      minHeight: 30,
      width: 60,
      backgroundColor: '#efefef',
      borderRightWidth: 1,
      borderRightColor: '#dfdfdf',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dataView: {
      flexGrow: 1,
    },
    dataViewContent: {
    },
    row: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      //borderBottomWidth: 1,
      //borderBottomColor: '#dfdfdf',

    },
    cell: {
      minHeight: 25,
      width: 80,
      //backgroundColor: '#022c43',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5
    }
  });

export default Table;