"use client"
import React from 'react'

export default function Button() {
    function checkOut(){
        alert("Thank you for time")
      }
  return (
    <div>
        <button onClick={checkOut} className="btn-primary btn sm:w-[200px]">Checkout</button>
        
    </div>
  )
}
