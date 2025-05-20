import { Button } from '@/components/ui/button'

type Props = {
  selected: string[]
  onClear: () => void
}

export default function FooterActions({ selected, onClear }: Props) {
  if (selected.length === 0) return null

  return (
    <div className="mt-4 flex justify-end gap-4 border-t pt-4">
      <Button variant="ghost" onClick={onClear} className='text-black cursor-pointer'>
        Cancel
      </Button>
      <Button onClick={() => console.log('Indexing:', selected)} className='cursor-pointer'>
        Index {selected.length} selected
      </Button>
    </div>
  )
}
