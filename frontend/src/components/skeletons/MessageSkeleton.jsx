const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        {/* Left-aligned skeleton message */}
        <div className="bg-[#F4F2EE] w-12 h-12 rounded-full shrink-0 border border-[#A67B5B]"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#F4F2EE] h-4 w-48 rounded-full"></div>
          <div className="bg-[#F4F2EE] h-4 w-40 rounded-full"></div>
        </div>
      </div>
      
      <div className="flex gap-4 items-center justify-end mt-4">
        {/* Right-aligned skeleton message */}
        <div className="flex flex-col gap-2 items-end">
          <div className="bg-[#F4F2EE] h-4 w-40 rounded-full"></div>
        </div>
        <div className="bg-[#F4F2EE] w-12 h-12 rounded-full shrink-0 border border-[#A67B5B]"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
