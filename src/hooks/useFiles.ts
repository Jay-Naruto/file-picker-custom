import {useQuery} from '@tanstack/react-query'
import { FileItem } from '@/types/file'
import { mockDataMap } from '@/mocks/file'

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