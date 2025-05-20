import { useFiles } from '@/hooks/useFiles';
import { useEffect, useState } from 'react';
import TableToolbar from './TableToolbar';
import TableRow from './TableRow';
import FooterActions from './FooterActions';
import { Button } from '../ui/button';

export default function FileTable({ parentId }: { parentId: string | null }) {
  // STATES
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('name');
  const [selected, setSelected] = useState<string[]>([]);
  const [indexed, setIndexed] = useState<Record<string, boolean>>({});
  const [currentParentId, setCurrentParentId] = useState<string | null>(
    parentId
  );
  const { data: currentData = [], isLoading } = useFiles(currentParentId);

  // HOOKS
  useEffect(() => {
    const initial = { ...indexed };
    currentData.forEach((file) => {
      if (initial[file.id] === undefined) {
        initial[file.id] = file.isIndexed;
      }
    });
    setIndexed(initial);
  }, [currentData]);

  // HANDLERS
  const toggleIndex = (id: string) => {
    setIndexed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = currentData
    .filter((file) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <TableToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {currentParentId && (
        <Button
          variant="ghost"
          className="mb-4 text-black cursor-pointer"
          onClick={() => setCurrentParentId(null)}
        >
          ← Back
        </Button>
      )}

      <table className="w-full border text-sm bg-white rounded-md overflow-hidden">
        <thead className="bg-gray-100 text-sm font-medium text-gray-700">
          <tr>
            <th className="p-2 w-10">
              <input
                type="checkbox"
                checked={
                  selected.length === filtered.length && filtered.length > 0
                }
                onChange={() => {
                  setSelected(
                    selected.length === filtered.length
                      ? []
                      : filtered.map((f) => f.id)
                  );
                }}
              />
            </th>
            <th  className="px-4 py-2 text-left ">Name</th>
            <th  className="px-4 py-2 text-left ">Type</th>
            <th  className="px-4 py-2 text-left ">Date</th>
            <th className="px-4 py-2 text-right ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((file) => (
            <TableRow
              key={file.id}
              file={file}
              isSelected={selected.includes(file.id)}
              isIndexed={indexed[file.id]}
              onSelect={() => toggleSelect(file.id)}
              onToggleIndex={() => toggleIndex(file.id)}
              onNavigate={() =>
                file.mimeType === 'directory' && setCurrentParentId(file.id)
              }
            />
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={5} className="p-4 text-center text-muted-foreground">
                No files found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <FooterActions selected={selected} onClear={() => setSelected([])} />
    </div>
  );
}
