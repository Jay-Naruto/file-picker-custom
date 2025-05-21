import BackForwardNav from '@/components/FilePicker/BackForwardNav';
import TableBody from '@/components/FilePicker/TableBody';
import TableToolbar from '@/components/FilePicker/TableToolbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-md shadow border px-6 py-4">
      <TableToolbar />
      <BackForwardNav />
      <TableBody />
      </div>
    </main>
  );
}
