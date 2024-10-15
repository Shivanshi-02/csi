'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import EventRegistrationForm from '@/components/EventRegistrationForm'
import ClosedRegistrationMessage from '@/components/ClosedRegistrationMessage'
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/toast"

export default function JoinUs() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true)

  useEffect(() => {

    const fetchRegistrationState = async () => {
      setIsRegistrationOpen(true) 
    }

    fetchRegistrationState()
  }, [])

  const handleSubmit = (formData: FormData) => {
    // Handle form submission logic here
    console.log('Form submitted', Object.fromEntries(formData))
    // You would typically send this data to your backend here
  }

  const events = [
    { value: "workshop", label: "Tech Workshop" },
    { value: "hackathon", label: "Hackathon 2024" },
    { value: "conference", label: "Annual Conference" },
  ]

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-gray-900 text-blue-100">
        <NavBar activeSection={''} />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-300">Join Us</h1>
            
            <AnimatePresence mode="wait">
              {isRegistrationOpen ? (
                <EventRegistrationForm key="form" events={events} onSubmit={handleSubmit} />
              ) : (
                <ClosedRegistrationMessage key="closed" />
              )}
            </AnimatePresence>
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </ToastProvider>
  )
}