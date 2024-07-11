import React from 'react'
import './Dashboard.css'
import TransactionTable from '../Components/TransactionTable'
const Dashboard = () => {
  return (
    <div className='Dashboard-comp'>
        <h1  style={{ fontSize: '7rem' }}>Dashboard</h1>

        <TransactionTable/>
    </div>
  )
}

export default Dashboard