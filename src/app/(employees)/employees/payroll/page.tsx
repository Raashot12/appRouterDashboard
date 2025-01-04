import React from 'react'

const PayRoll = () => {
  return (
    <div>
      <section
        style={{
          minHeight: "calc(100vh - 112px)",
        }}
        className={`flex flex-col items-center justify-center bg-gray-50`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Payroll Page
        </h1>
        <p className={`text-lg text-gray-600`}>
          This is your starting point. Explore the dashboard and manage your
          Payroll seamlessly.
        </p>
      </section>
    </div>
  )
}

export default PayRoll