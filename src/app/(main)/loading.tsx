export default function Loading() {
  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-dark z-[100] flex items-center justify-center"
    >
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin border-t-primary mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-accent mx-auto"></div>
        </div>
        <div className="code-font text-primary animate-pulse">Loading...</div>
      </div>
    </div>
  );
}
