import { Button } from '@/components/ui/button'
import { useFilePickerStore } from '@/store/filePickerStore'

export default function BackForwardNav() {
  const { goBack, goForward, history, historyIndex } = useFilePickerStore()

  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant="ghost"
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 h-8 cursor-pointer"
        onClick={goBack}
        disabled={historyIndex === 0}
      >
        ←
      </Button>
      <Button
        variant="ghost"
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 h-8 cursor-pointer"
        onClick={goForward}
        disabled={historyIndex === history.length - 1}
      >
        →
      </Button>
    </div>
  )
}
