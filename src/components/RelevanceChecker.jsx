import { useState } from 'react'
import { Search, Home, FileText, Settings, HelpCircle, User, ChevronDown, Info, Menu } from 'lucide-react'

export default function ArticleRewriter() {
  const [articleText, setArticleText] = useState('')
  const [results, setResults] = useState([
    { id: 1, text: "Rewritten article appears here. This version has been accepted.", status: 'accepted' },
    { id: 2, text: "This is another rewritten version. This one has been rejected.", status: 'rejected' },
    { id: 3, text: "Here's a third rewritten version. This one has also been accepted.", status: 'accepted' },
  ])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleRewrite = () => {
    // In a real application, this would call an API to rewrite the article
    console.log('Rewriting article:', articleText)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          AI
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Left Sidebar */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-6`}>
        <div className="hidden md:flex w-10 h-10 bg-blue-500 rounded-full items-center justify-center text-white font-bold">
          AI
        </div>
        <Home className="w-6 h-6 text-gray-400" />
        <FileText className="w-6 h-6 text-gray-400" />
        <Settings className="w-6 h-6 text-gray-400" />
        <HelpCircle className="w-6 h-6 text-gray-400" />
        <div className="mt-auto">
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Article Title</h1>
          <textarea
            className="w-full h-40 md:h-64 p-4 border border-gray-300 rounded-md resize-none"
            placeholder="Paste your article text here..."
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          ></textarea>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleRewrite}
          >
            Rewrite Article
          </button>

          <h2 className="text-xl font-bold mt-8 mb-4">Results</h2>
          <div className="space-y-4">
            {results.map((result) => (
              <div
                key={result.id}
                className={`p-4 rounded-md ${
                  result.status === 'accepted' ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">
                    {result.status === 'accepted' ? 'Accepted' : 'Rejected'}
                  </span>
                  <Info className="w-5 h-5 text-gray-500" />
                </div>
                <p>{result.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Rewrite Article
          </button>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-80 bg-white shadow-md p-4 md:p-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Search</h2>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="research key for rewriting"
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
            <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {['INSTRUCTION_TITLE', 'INSTRUCTION_TITLE', 'INSTRUCTION_TITLE'].map((title, index) => (
              <div key={index} className="border border-gray-300 rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{title}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Instruction text..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}