import React from 'react'

function temp() {
    return (
        <footer className="bg-gray-200 text-gray-600 py-4">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap justify-center space-x-4 mb-2">
                    <a href="/intellectual-property-policy" className="hover:text-gray-800">Intellectual Property Policy</a>
                    <a href="/terms-of-service" className="hover:text-gray-800">Terms of Service</a>
                    <a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a>
                    <a href="/security" className="hover:text-gray-800">Security</a>
                </div>
                <p className="text-center text-sm text-black">
                    © 2024 Printify, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default temp