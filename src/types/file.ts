export interface FileItem {
    id: string
    name: string
    mimeType: string
    parentId?: string
    isIndexed: boolean
    createdAt: string
}