'use client'

import React from 'react'

export default function TableLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[600px] w-full text-sm">
        <thead className="bg-gray-100 text-sm font-medium text-gray-700">
          <tr>
            <th className="p-2 w-10">
            </th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  )
}
