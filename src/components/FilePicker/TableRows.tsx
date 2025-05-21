import React from 'react'
import TableRow from './TableRow'
import { FileItem } from '@/types/file'

type Props = {
  files: FileItem[]
  selected: string[]
  indexed: Record<string, boolean>
  onSelect: (id: string) => void
  onToggleIndex: (id: string) => void
  onNavigate: (id: string) => void
  isLoading: boolean
}

function TableRows({
  files,
  selected,
  indexed,
  onSelect,
  onToggleIndex,
  onNavigate,
  isLoading,
}: Props) {
  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={5} className="p-4 text-center text-gray-500">
            Loading files...
          </td>
        </tr>
      ) : files.length === 0 ? (
        <tr>
          <td colSpan={5} className="p-4 text-center text-gray-400">
            No files found.
          </td>
        </tr>
      ) : (
        files.map((file) => (
          <TableRow
            key={file.id}
            file={file}
            isSelected={selected.includes(file.id)}
            isIndexed={indexed[file.id]}
            onSelect={() => onSelect(file.id)}
            onToggleIndex={() => onToggleIndex(file.id)}
            onNavigate={() =>
              file.mimeType === 'directory' && onNavigate(file.id)
            }
          />
        ))
      )}
    </tbody>
  )
}

export default React.memo(TableRows)
