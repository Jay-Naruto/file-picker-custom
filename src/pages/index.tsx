import FileList from '@/components/FilePicker/FileList'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-xl font-semibold mb-4">Google Drive File Picker</h1>
      <FileList parentId={null} />
    </main>
  )
}
