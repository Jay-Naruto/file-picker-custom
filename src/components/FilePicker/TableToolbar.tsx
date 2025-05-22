import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFilePickerStore } from '@/store/filePickerStore'

export default function TableToolbar() {
  const { searchQuery, sortBy, setSearchQuery, setSortBy } = useFilePickerStore()

  return (
    <div className="flex items-center justify-between mb-4 gap-2">
      <Input
        placeholder="Search files..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-1/2 text-sm bg-gray-100 text-black"
      />
      <Select value={sortBy} onValueChange={(val) => setSortBy(val as 'name' | 'date')}>
        <SelectTrigger className="w-[160px] bg-gray-100 text-sm text-black cursor-pointer">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Sort by Name</SelectItem>
          <SelectItem value="date">Sort by Date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
