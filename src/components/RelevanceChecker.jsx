import React, { useState } from 'react';
import { ChevronDown, Info, Check, MoreVertical,Plus } from 'lucide-react';


const InstructionSection = ({ title }) => (
  <div className="border border-gray-300 rounded-md p-4 mb-4 bg-white">
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

const ResultItem = ({ status, text, checked, onCheck }) => (
  <div className={`p-6 rounded-md mb-6 flex flex-col justify-between items-start ${status === 'accepted' ? 'bg-green-100 shadow-lg' : 'bg-red-100 shadow-md'} h-32`}>
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center">
        <input type="checkbox" checked={checked} onChange={onCheck} className="mr-2" />
        <span className="font-semibold">Research Article Name</span>
      </div>
      <MoreVertical className="w-5 h-5 text-gray-500" />
    </div>
    <div className="flex items-center w-full">
      <p className="text-sm mr-2">{text}</p>
      {checked && <Check className="w-5 h-5 text-green-500" />}
    </div>
    <p className="text-xs text-gray-600 mt-2">Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc senectus quisque nisl sodales montes nunc. Quam sodales dictum suscipit et fermentum erat nisl conubia facilisis.</p>
  </div>
);

export default function RelevanceChecker() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [results, setResults] = useState([
    { status: 'accepted', text: 'This is an accepted rewrite of the article.', checked: false, className: 'mb-4 shadow-md' },
    { status: 'rejected', text: 'This is a rejected rewrite of the article.', checked: false, className: 'mb-4 shadow-md' },
    { status: 'accepted', text: 'This is another accepted rewrite of the article.', checked: false, className: 'mb-4 shadow-md' },
  ]);

  const handleRewrite = () => {
    // In a real application, this would call an API to rewrite the article
    console.log('Rewriting article:', articleTitle, articleContent);
  };

  const handleCheckAll = (e) => {
    const checked = e.target.checked;
    setResults(results.map(result => ({ ...result, checked })));
  };

  const handleCheck = (index) => {
    setResults(results.map((result, i) => i === index ? { ...result, checked: !result.checked } : result));
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="mt-2 p-2 flex justify-start">
        <img src="/logo.png" alt="Logo" className="h-6" />
      </header>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-4">Article Title</h2>
            <textarea
              className="w-full h-64 p-2 border border-gray-300 rounded-md mb-0"
              placeholder="Start typing or paste your abstract here..."
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="bg-[#3D5A80] text-white px-12 py-2 rounded-[3px] border border-[#3D5A80] hover:bg-white hover:text-[#3D5A80] transition-colors mt-0"
                onClick={handleRewrite}
              >
                Check Relevance
              </button>
            </div>

            <h2 className="text-xl font-bold mt-4 mb-4">Results</h2>
            <div className="flex items-center mb-4">
              <input type="checkbox" onChange={handleCheckAll} className="mr-2" />
              <span>Select All</span>
            </div>
            {results.map((result, index) => (
              <ResultItem
                key={index}
                status={result.status}
                text={result.text}
                checked={result.checked}
                onCheck={() => handleCheck(index)}
              />
            ))}
            <div className="flex justify-end">
              <button
                className="bg-[#3D5A80] text-white px-12 py-2 rounded-[3px] border border-[#3D5A80] hover:bg-white hover:text-[#3D5A80] transition-colors mt-0"
                onClick={handleRewrite}
              >
                Rewrite Article
              </button>
            </div>
          </div>
          <div className="md:w-100">
            <div className=" p-4 rounded-md ">
              <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] shadow-gray-300 p-4 mb-4 mt-4 w-full">
                <h2 className="text-xl font-bold text-black mb-4 font-poppins">Search</h2>
                <div className="flex items-center mb-4 mt-4">
                  <input
                    type="text"
                    className="flex-grow p-2 border border-gray-300 rounded-l-md font-poppins"
                    placeholder="research title, Doi, keyword"
                  />
                  <button className="bg-[#3D5A80] text-white p-2 rounded-r-md hover:bg-[#3D5A80] transition-colors font-poppins">
                    Search
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-bold text-black font-poppins">Research Article Title</span>
                  <div className="text-black font-poppins">Forella and Mayer - The Cambridge Handbook...</div>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded-md flex items-center border border-gray-300 hover:border-black transition-all duration-300 ease-in-out font-poppins">
                  <Plus className="text-black" />
                  <span className="ml-2">ADD</span>
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-bold text-black font-poppins">Research Article Title</span>
                  <div className="text-black font-poppins">Forella and Mayer - The Cambridge Handbook...</div>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded-md flex items-center border border-gray-300 hover:border-black transition-all duration-300 ease-in-out font-poppins">
                  <Plus className="text-black" />
                  <span className="ml-2">ADD</span>
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-bold text-black font-poppins">Research Article Title</span>
                  <div className="text-black font-poppins">Forella and Mayer - The Cambridge Handbook...</div>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded-md flex items-center border border-gray-300 hover:border-black transition-all duration-300 ease-in-out font-poppins">
                  <Plus className="text-black" />
                  <span className="ml-2">ADD</span>
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-bold text-black font-poppins">Research Article Title</span>
                  <div className="text-black font-poppins">Forella and Mayer - The Cambridge Handbook...</div>
                </div>
                <button className="bg-gray-100 text-black px-4 py-2 rounded-md flex items-center border border-gray-300 hover:border-black transition-all duration-300 ease-in-out font-poppins">
                  <Plus className="text-black" />
                  <span className="ml-2">ADD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}