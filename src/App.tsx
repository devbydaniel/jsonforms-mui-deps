import './App.css'

import { materialCells, materialRenderers } from '@jsonforms/material-renderers'

import { JsonForms } from '@jsonforms/react'
import tagSchema from '../tagSchema.json'
import { useState } from 'react'

const initialData = {
  issuedBy: 'Daniel',
  issueDate: '2023-01-01',
  expiryDate: '2023-01-01',
  docNo: 123,
}

function App() {
  const [data, setData] = useState(initialData)
  return (
    <JsonForms
      schema={tagSchema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data }) => setData(data)}
    />
  )
}

export default App
