import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
class TabNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabData: this.props.data || []
    }

    this.setItem = this.setItem.bind(this)
  }

  setItem (index) {
    const merged = this.state.tabData

    if (!merged[index].isActive) {
      merged[index].isActive = !this.state.tabData[index].isActive
    }
    merged.forEach((item, rowIndex) => {
      return index !== rowIndex ? (item.isActive = false) : null
    })

    this.setState({ tabData: merged })
  };

  render () {
    const { activeTabStyles, tabBarStyles, classes, tabBarBorderStyle } = this.props
    const { tabData } = this.state
    if (!tabData.length) return <div>no data given</div>
    return (
      <div className='container-fluid flexer-column'>
        <div className='w-100 flexer' style={tabBarBorderStyle}>
          {tabData.map((item, index) => (
            <div
              key={index}
              style={(item.isActive && activeTabStyles) || tabBarStyles}
              className={`${classes} col-lg-2 col-md-12 col-sm-12 flexer p-3`}
              onClick={() => this.setItem(index)}
            >
              {item.tabName} this is updated
            </div>
          ))}
        </div>

        <div>
          {tabData.map(({ Component, ...item }, index) => (
            <Fragment key={index}>
              {item.isActive && item.tabName === tabData[index].tabName && (
                <div>
                  {Component(item.componentProps || {})}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    )
  }
}

export default TabNav
