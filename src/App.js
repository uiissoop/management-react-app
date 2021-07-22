import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css'; 

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': '김해균',
  'birthday': '970711',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '980711',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '나폴레옹',
  'birthday': '920111',
  'gender': '여자',
  'job': '전략가'
},
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map( c => {
            return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
