"use client"

import Error from "next/error";

import React from 'react'

const NotFound = () => {
  return (
    <html>
        <body>
            <Error statusCode={404} />
        </body>
    </html>
  )
}

export default NotFound