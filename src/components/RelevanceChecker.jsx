import React, { useState } from 'react';
import { Search, ChevronDown, Info } from 'lucide-react';

const InstructionSection = ({ title }) => (
  <div className="border border-gray-300 rounded-md p-4 mb-4">
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
);

const ResultItem = ({ status, text }) => (
  <div className={`p-4 rounded-md mb-4 ${status === 'accepted' ? 'bg-green-100' : 'bg-red-100'}`}>
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold">{status === 'accepted' ? 'Accepted' : 'Rejected'}</span>
      <Info className="w-5 h-5 text-gray-500" />
    </div>
    <p className="text-sm">{text}</p>
  </div>
);

export default function RelevanceChecker() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [results, setResults] = useState([
    { status: 'accepted', text: 'This is an accepted rewrite of the article.' },
    { status: 'rejected', text: 'This is a rejected rewrite of the article.' },
    { status: 'accepted', text: 'This is another accepted rewrite of the article.' },
  ]);

  const handleRewrite = () => {
    // In a real application, this would call an API to rewrite the article
    console.log('Rewriting article:', articleTitle, articleContent);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">StudyMEISTER</h1>
      </header>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-4">Article Title</h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter article title..."
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
            />
            <textarea
              className="w-full h-64 p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Paste your article text here..."
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
            ></textarea>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={handleRewrite}
            >
              Rewrite Article
            </button>

            <h2 className="text-xl font-semibold mt-8 mb-4">Results</h2>
            {results.map((result, index) => (
              <ResultItem key={index} status={result.status} text={result.text} />
            ))}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={handleRewrite}
            >
              Rewrite Article
            </button>
          </div>
          <div className="md:w-80">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-4">Search</h2>
              <div className="flex items-center mb-4">
                <input
                  type="text"
                  className="flex-grow p-2 border border-gray-300 rounded-l-md"
                  placeholder="Research key for rewriting"
                />
                <button className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <InstructionSection title="INSTRUCTION_TITLE" />
              <InstructionSection title="INSTRUCTION_TITLE" />
              <InstructionSection title="INSTRUCTION_TITLE" />
              <InstructionSection title="INSTRUCTION_TITLE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}