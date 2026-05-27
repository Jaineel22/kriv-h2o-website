import React from 'react'
import Container from './Container'
import { company } from '../../data/company'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <Container className="py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="text-lg font-semibold">{company.name}</div>
          <div className="mt-2 text-sm text-gray-600">{company.email}</div>
          <div className="text-sm text-gray-600">{company.phone}</div>
        </div>

        <div className="text-sm text-gray-600">
          <div>{company.addresses?.[0]?.line1}</div>
          <div>
            {company.addresses?.[0]?.city}, {company.addresses?.[0]?.country}
          </div>
        </div>
      </Container>
    </footer>
  )
}
