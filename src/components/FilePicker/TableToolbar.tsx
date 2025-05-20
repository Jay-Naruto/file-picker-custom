import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  searchQuery: string
  setSearchQuery: (val: string) => void
  sortBy: 'name' | 'date'
  setSortBy: (val: 'name' | 'date') => void
}

export default function TableToolbar({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <Input
        placeholder="Search files"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm text-black"
      />
      <Select value={sortBy} onValueChange={(val) => setSortBy(val as 'name' | 'date')}>
        <SelectTrigger className="w-[140px] border-gray-300 text-gray-700">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Sort: Name</SelectItem>
          <SelectItem value="date">Sort: Date</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
