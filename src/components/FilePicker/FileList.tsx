import { useFiles } from '@/hooks/useFiles';
import { FileItem } from '@/types/file';
import { useState } from 'react';

type FileListProps = {
  parentId: string | null;
};

export default function FileList({ parentId }: FileListProps) {
  // STATES
  const { data, isLoading, error } = useFiles(parentId);
  const [indexed, setIndexed] = useState<Record<string, boolean>>({});
  const [currentParent, setCurrentParent] = useState<string | null>(parentId);
  const { data: currentData } = useFiles(currentParent);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // HANDLERS
  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleIndex = (id: string) => {
    setIndexed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500">Failed to load files</div>;

  return (
    <div className="p-4 space-y-2">
      {currentParent && (
        <button
          className="text-sm text-blue-600 hover:underline mb-2"
          onClick={() => setCurrentParent(null)}
        >
          ⬅ Back
        </button>
      )}
      {selectedIds.length > 0 && (
        <div className="mb-2 text-sm text-gray-700">
          {selectedIds.length} item(s) selected
        </div>
      )}

      {currentData?.map((file) => (
        <div
          key={file.id}
          className="flex justify-between items-center p-2 border rounded hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedIds.includes(file.id)}
              onChange={() => toggleSelection(file.id)}
            />
            <span
              className="cursor-pointer"
              onClick={() => {
                if (file.mimeType === 'directory') {
                  setCurrentParent(file.id);
                }
              }}
            >
              {file.name}
            </span>
          </div>

          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => toggleIndex(file.id)}
          >
            {file.isIndexed ? 'De-index' : 'Index'}
          </button>
        </div>
      ))}
    </div>
  );
}
