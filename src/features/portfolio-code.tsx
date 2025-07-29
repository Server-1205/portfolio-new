export const PortfolioCode = () => {
  return (
    <div className="code-font text-sm space-y-2 p-4 rounded-lg">
      <div className="text-gray-400">{"// portfolio.js"}</div>
      <div className="text-purple-400">
        const <span className="text-blue-400">developer</span> = {"{"}
      </div>
      <div className="ml-4 text-green-400">
        name: <span className="text-yellow-300">Server Asanov</span>,
      </div>
      <div className="ml-4 text-green-400">skills: [</div>
      <div className="ml-8 text-yellow-300">React, Next.js, Node.js</div>
      <div className="ml-4 text-green-400">],</div>
      <div className="ml-4 text-green-400">
        passionate: <span className="text-blue-400">true</span>,
      </div>
      <div className="ml-4 text-green-400">
        experience: <span className="text-yellow-300">2+ years</span>
      </div>
      <div className="text-purple-400">{"}"};</div>
      <div className="text-gray-400 mt-4">
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};
