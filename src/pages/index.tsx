import FileTable from '@/components/FilePicker/FileTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-md shadow border px-6 py-4">
        <h1 className="text-lg font-medium text-gray-800 mb-4">
          Google Drive File Picker
        </h1>

        <FileTable parentId={null} />
      </div>
    </main>
  );
}
