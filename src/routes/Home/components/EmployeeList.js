import React, { PropTypes } from 'react'

// PropTypes
// TODO fix this so taht propTypes work right
// import { EmployeeSimlified } from 'constants/PropTypes'

const EmployeeList = ({ children }) => (
  <div className='employee-list'>
    <h3>Current Employees</h3>
    <ul className='collection'>
      {children}
    </ul>
  </div>
)

EmployeeList.propTypes = {
  children: PropTypes.array.isRequired
}

export default EmployeeList
