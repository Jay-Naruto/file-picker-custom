import {useQuery} from '@tanstack/react-query'
import { FileItem } from '@/types/file'

// const fetchFiles = async (parentId: string | null): Promise<FileItem[]> => {
//     const url = parentId
//       ? `/api/files?parentId=${parentId}`
//       : `/api/files`
  
//     const res = await fetch(url)
  
//     if (!res.ok) {
//       const errorText = await res.text()
//       console.error('[ERROR]', res.status, errorText)
//       throw new Error(`Failed to fetch files: ${res.status}`)
//     }
  
//     const data = await res.json()
  
//     return data.map((item: any): FileItem => ({
//       id: item.resource_id,
//       name: item.inode_path.path,
//       mimeType: item.inode_type,
//       createdAt: item.created_at,
//       isIndexed: false,
//     }))
//   }
  
// export const useFiles = (parentId: string | null) => {
//   return useQuery({
//     queryKey: ['files', parentId],
//     queryFn: () => fetchFiles(parentId),
//   })
// }

const mockDataMap: Record<string, FileItem[]> = {
    root: [
      {
        id: 'folder-1',
        name: '📁 Papers',
        mimeType: 'directory',
        createdAt: new Date().toISOString(),
        isIndexed: false,
      },
      {
        id: 'file-1',
        name: '📄 Notes.txt',
        mimeType: 'file',
        createdAt: new Date().toISOString(),
        isIndexed: true,
      },
    ],
    'folder-1': [
      {
        id: 'file-2',
        name: '📄 paper1.pdf',
        mimeType: 'file',
        createdAt: new Date().toISOString(),
        isIndexed: false,
      },
      {
        id: 'file-3',
        name: '📄 paper2.pdf',
        mimeType: 'file',
        createdAt: new Date().toISOString(),
        isIndexed: true,
      },
    ],
  }
  
  
  const fetchFiles = async (parentId: string | null): Promise<FileItem[]> => {
    console.log('Mock fetch for:', parentId ?? 'root')
    await new Promise((r) => setTimeout(r, 300))
    return mockDataMap[parentId ?? 'root'] || []
  }
  
  export const useFiles = (parentId: string | null) => {
  return useQuery({
    queryKey: ['files', parentId],
    queryFn: () => fetchFiles(parentId),
  })
}