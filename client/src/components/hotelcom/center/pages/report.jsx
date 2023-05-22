import React from 'react'
import ReportPage from '../../widgets/reportpage'

const Report = () => {
  return (
    <div>
      {/* Title */}
      <h1 className='text-3xl font-bold'>Report</h1>
      <div className='mt-8 mb-7'>
      <ReportPage/>
      </div>
      <h1 className='text-3xl font-bold'>Previous Reports</h1>
    </div>
  )
}

export default Report