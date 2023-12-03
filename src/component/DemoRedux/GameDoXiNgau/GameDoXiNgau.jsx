import React, { Component } from 'react';
import LuaChon from './LuaChon';
import KetQua from './KetQua';
import { connect } from 'react-redux';
import {randomNumberInRange} from './../../../util/util'
// import './gameDoXiNgau.scss';
 
 class GameDoXiNgau extends Component {
  render() {
    return (
      <div className='bg_gameXucXac'>
        <div className="container">
          <h1 className='text bg-red-600'>Game Đỗ Xí Ngầu </h1>
          {/* Chứa tài xỉu và các xí ngầu */}
          <LuaChon></LuaChon>

          {/* Kết quả và tổng số bàn chơi */}
          <KetQua></KetQua>

          {/* Khi bấm vào sẽ hiển thị kết quả thằng hay thua */}
          <button  className='py-2 px-5 bg-primary bg-red text-white'
          onClick={this.props.batDauChoiGame}>Play game </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    batDauChoiGame: ()=>{
      // thay đổi xí ngầu
      // const xiNgau1 = randomNumberInRange(6)
      // const xiNgau2 = randomNumberInRange(6)
      // const xiNgau3 = randomNumberInRange(6)
      
      // chạy vòng lặp cách 1
      // let newListXiNgau= []
      // for(let i =0;i <3; i++){
      //   newListXiNgau.push({
      //     xiNgau: randomNumberInRange(6)
      //   });
      // }
      // chạy vòng lặp cách 2
      let newListXiNgau = Array(3).fill('').map(()=>{
        return {
        xiNgau: randomNumberInRange(6)
        }
      })
      const action = {
        type: 'BAT_DAU_CHOI',
        payload: newListXiNgau 
      };
      dispatch(action)
    },
  };
};
export default connect (null,mapDispatchToProps)(GameDoXiNgau)