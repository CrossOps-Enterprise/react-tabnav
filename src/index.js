import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import TabNav from './components/TabNav/Tabnav'

const Menu = (props) => (
  <div>
    {props.cardTitle}
    <br />
    {props.cardSubtitle}
  </div>
)

const tabScreenData = [
  {
    tabName: 'Menu',
    isActive: true,
    componentProps: {
      cardTitle: 'Menu Component',
      cardSubtitle: 'Awesome'
    },
    Component: Menu
  },
  {
    tabName: 'Offers',
    isActive: false,
    componentProps: {
      cardTitle: 'Offers Component',
      cardSubtitle: 'Awesome 2'
    },
    Component: Menu
  }
]

if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(
    <TabNav
      activeTabStyles={{ color: 'white', backgroundColor: 'green' }}
      tabBarStyles={{
        cursor: 'pointer',
        color: 'black'
      }}
      data={tabScreenData}
    />,
    document.getElementById('root')
  )
}
export default TabNav
