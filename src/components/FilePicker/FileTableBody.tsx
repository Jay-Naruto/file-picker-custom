'use client';

import { useEffect, useMemo, useState } from 'react';
import { useFiles } from '@/hooks/useFiles';
import { useFilePickerStore } from '@/store/filePickerStore';
import TableLayout from './TableLayout';
import FileRows from './FileRows';
import FooterActions from './FooterActions';

export default function FileTableBody() {
  const [selected, setSelected] = useState<string[]>([]);
  const [indexed, setIndexed] = useState<Record<string, boolean>>({});

  const { searchQuery, sortBy, history, historyIndex, navigateTo } =
    useFilePickerStore();

  const currentParentId = useMemo(
    () => history[historyIndex] || 'root',
    [history, historyIndex]
  );

  const { data: currentData = [], isLoading } = useFiles(currentParentId);

  useEffect(() => {
    const initial = { ...indexed };
    let changed = false;
    currentData.forEach((file) => {
      if (initial[file.id] === undefined) {
        initial[file.id] = file.isIndexed;
        changed = true;
      }
    });
    if (changed) setIndexed(initial);
  }, [currentData]);

  const toggleIndex = (id: string) => {
    setIndexed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    return currentData
      .filter((file) =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
  }, [currentData, searchQuery, sortBy]);

  return (
    <>
      <TableLayout>
        <FileRows
          files={filtered}
          selected={selected}
          indexed={indexed}
          onSelect={toggleSelect}
          onToggleIndex={toggleIndex}
          onNavigate={navigateTo}
          isLoading={isLoading}
        />
      </TableLayout>

      <FooterActions selected={selected} onClear={() => setSelected([])} />
    </>
  );
}
