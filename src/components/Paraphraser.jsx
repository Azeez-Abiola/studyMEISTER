import React, { useState, useCallback } from 'react'

export default function ParaphrasingTool() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = useCallback((e) => {
    setInputText(e.target.value)
  }, [])

  const handleClear = useCallback(() => {
    setInputText('')
    setOutputText('')
  }, [])

  const handleParaphrase = useCallback(() => {
    // In a real application, this would call an API to paraphrase the text
    setOutputText(`Paraphrased version of: ${inputText}`)
  }, [inputText])

  const wordCount = inputText.trim().split(/\s+/).length

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto rounded-lg  p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Paraphrasing Tool</h1>
        
        <div className="mb-4">
          <textarea
            className="w-full h-80 p-2 border border-gray-300 rounded-md resize-none"
            placeholder="Start typing or paste your text here..."
            value={inputText}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">{inputText.trim().split(/\s+/).filter(word => word).length} words</span>
            <div className="space-x-2">
              <button
                className="px-10 py-2 text-gray-700 rounded-md border border-[#3D5A80] transition-all duration-300 transform hover:scale-105"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                className="px-12 py-2 bg-[#3D5A80] text-white rounded-md transition-colors hover:bg-white hover:text-[#3D5A80] hover:border hover:border-[#3D5A80]"
                onClick={handleParaphrase}
              >
                Paraphrase
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Paraphrased Text</h2>
          <textarea
            className="w-full h-80 p-2 border border-gray-300 rounded-md resize-none"
            value={outputText}
            readOnly
          ></textarea>
        </div>

      
      </div>
      <footer className="text-center text-sm text-gray-500 mt-24 mb-0">
          © 2024 StudyMEISTER. All rights reserved.
        </footer>
    </div>
    
  )
}