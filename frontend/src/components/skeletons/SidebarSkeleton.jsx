import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300 
      flex flex-col bg-base-100 transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full px-4 py-5">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-base-content" />
          <span className="font-medium hidden lg:inline text-base-content">
            Contacts
          </span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="flex-1 overflow-y-auto w-full py-3 px-2 space-y-3">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-base-200 transition"
          >
            {/* Avatar Skeleton */}
            <div className="skeleton size-12 rounded-full mx-auto lg:mx-0" />

            {/* User Info Skeleton */}
            <div className="hidden lg:flex flex-col justify-center flex-1 space-y-1">
              <div className="skeleton h-4 w-32" />
              <div className="skeleton h-3 w-20" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
