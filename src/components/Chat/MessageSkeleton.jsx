const MessageSkeleton = () => {
    // Create an array of 6 items for skeleton messages
    const skeletonMessages = Array(6).fill(null);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {[...Array(6)].map((_, idx) => (
                <div
                    key={idx}
                    className={`flex items-start gap-3 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                    {/* Avatar Skeleton */}
                    <div className="w-10 h-10 rounded-full bg-gray-300/60 animate-pulse" />

                    <div className={`flex flex-col ${idx % 2 === 0 ? "items-start" : "items-end"} gap-2`}>
                        {/* Name Skeleton */}
                        <div className="h-4 w-20 bg-gray-300/60 rounded animate-pulse" />

                        {/* Message Bubble Skeleton */}
                        <div
                            className={`rounded-2xl p-3 bg-gray-300/60 animate-pulse ${idx % 2 === 0 ? "rounded-tl-none" : "rounded-tr-none"
                                } w-[200px] h-16`}
                        />
                    </div>
                </div>
            ))}
        </div>

    );
};

export default MessageSkeleton;