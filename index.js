import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Proptypes from 'prop-types'

class TabNav extends Component {
  static propTypes = {
    activeTabStyles: Proptypes.object,
    tabBarStyles: Proptypes.object,
    classes: Proptypes.string,
    tabBarBorderStyle: Proptypes.object,
    data: Proptypes.array
  }

  static defaultProps = {
    activeTabStyles: {
      border: 'solid 1px red'
    },
    tabBarStyles: {
      border: 'solid 1px green'
    },
    classes: '',
    tabBarBorderStyle: {},
    data: [
      {
      tabName: 'Dummy',
      isActive: true,
      Component: (props) => (<div>This is a {props.componentName} component</div>),
      componentProps: {
        componentName: "Dummy"
      }
    },
    {
      tabName: 'Dummy 2',
      isActive: false,
      Component: (props) => (<div>This is a {props.componentName} component</div>),
      componentProps: {
        componentName: "Dummy 2"
      }
    }]
  }

  constructor(props) {
    super(props)
    this.state = {
      tabData: this.props.data || []
    }

    this.setItem = this.setItem.bind(this)
  }

  setItem(index) {
    const merged = [...this.state.tabData]

    if (!merged[index].isActive) {
      merged[index].isActive = !this.state.tabData[index].isActive
    }
    merged.forEach((item, rowIndex) => {
      return index !== rowIndex ? (item.isActive = false) : null
    })

    this.setState({ tabData: merged })
  };

  render() {
    const { activeTabStyles, tabBarStyles, classes, tabBarBorderStyle } = this.props
    const { tabData } = this.state
    if (!tabData.length) return <div>Please Provide Data</div>
    return (
      <div className='container-fluid flexer-column'>
        <div className='w-100 flexer' style={tabBarBorderStyle}>
          {tabData.map((item, index) => (
            <div
              key={index}
              style={(item.isActive ? { ...tabBarStyles, ...activeTabStyles } : { ...tabBarStyles })}
              className={`${classes} w-100 flexer`}
              onClick={() => this.setItem(index)}
            >
              {item.tabName}
            </div>
          ))}
        </div>

        <div>
          {tabData.map(({ Component, ...item }, index) => (
            <div key={index}>
              {item.isActive && item.tabName === tabData[index].tabName && (
                Component(item.componentProps || {})
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default TabNav
