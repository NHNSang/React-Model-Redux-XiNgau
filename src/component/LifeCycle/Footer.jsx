import React, { Component } from 'react'

export default class Footer extends PureComponent {
    // Thay component thành PureComponent để tránh tình trạng loadpage ngầm
  render() {
    console.log('footer')
    return (

      <div>Footer</div>
    )
  }
}
