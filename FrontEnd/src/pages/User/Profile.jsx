import React from 'react'

function Profile() {
  return (
    <div>
      {/* profile for user can see their details and edit*/}
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-2xl font-semibold mb-6">Profile</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-xs font-semibold mb-2">Username</label>
                <input type="text" id="username" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-xs font-semibold mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-xs font-semibold mb-2">Password</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg">Save</button>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Profile
