import { FileItem } from '@/types/file'

export const mockDataMap: Record<string, FileItem[]> = {
  root: [
    {
      id: 'folder-1',
      name: '📁 Research',
      mimeType: 'directory',
      createdAt: '2024-04-01T10:00:00Z',
      isIndexed: false,
    },
    {
      id: 'folder-2',
      name: '📁 Projects',
      mimeType: 'directory',
      createdAt: '2024-03-20T14:30:00Z',
      isIndexed: true,
    },
    {
      id: 'file-1',
      name: '📄 Meeting Notes.txt',
      mimeType: 'file',
      createdAt: '2024-04-03T08:00:00Z',
      isIndexed: true,
    },
    {
      id: 'file-2',
      name: '📄 Budget Q1.xlsx',
      mimeType: 'file',
      createdAt: '2024-02-25T13:00:00Z',
      isIndexed: false,
    },
    {
      id: 'file-3',
      name: '📄 Summary.docx',
      mimeType: 'file',
      createdAt: '2024-01-15T11:45:00Z',
      isIndexed: true,
    },
  ],
  'folder-1': [
    {
      id: 'file-4',
      name: '📄 AI_Overview.pdf',
      mimeType: 'file',
      createdAt: '2024-04-05T09:00:00Z',
      isIndexed: false,
    },
    {
      id: 'file-5',
      name: '📄 experiment_results.csv',
      mimeType: 'file',
      createdAt: '2024-03-01T12:00:00Z',
      isIndexed: true,
    },
    {
      id: 'folder-3',
      name: '📁 Drafts',
      mimeType: 'directory',
      createdAt: '2024-03-28T10:00:00Z',
      isIndexed: false,
    },
  ],
  'folder-2': [
    {
      id: 'file-6',
      name: '📄 Roadmap 2024.pptx',
      mimeType: 'file',
      createdAt: '2024-01-10T16:00:00Z',
      isIndexed: false,
    },
    {
      id: 'file-7',
      name: '📄 client-feedback.md',
      mimeType: 'file',
      createdAt: '2024-04-02T09:30:00Z',
      isIndexed: true,
    },
  ],
  'folder-3': [
    {
      id: 'file-8',
      name: '📄 rough_sketch.txt',
      mimeType: 'file',
      createdAt: '2024-03-15T10:15:00Z',
      isIndexed: false,
    },
    {
      id: 'file-9',
      name: '📄 old_versions.zip',
      mimeType: 'file',
      createdAt: '2023-12-01T12:00:00Z',
      isIndexed: false,
    },
  ],
}
