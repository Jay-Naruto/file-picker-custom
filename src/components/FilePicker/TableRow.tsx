import { FileItem } from '@/types/file';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

type Props = {
  file: FileItem;
  isSelected: boolean;
  isIndexed: boolean;
  onSelect: () => void;
  onToggleIndex: () => void;
  onNavigate: () => void;
};

export default function TableRow({
  file,
  isSelected,
  isIndexed,
  onSelect,
  onToggleIndex,
  onNavigate,
}: Props) {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-2 text-black">
        <Checkbox checked={isSelected} onCheckedChange={onSelect} />
      </td>
      <td
        className="p-2 font-medium cursor-pointer text-black"
        onClick={onNavigate}
      >
        {file.name}
      </td>
      <td className="p-2 text-black">{file.mimeType}</td>
      <td className="p-2 text-black">
        {new Date(file.createdAt).toLocaleDateString()}
      </td>
      <td className="p-2 text-right">
        <Button variant="default" size="sm" className='cursor-pointer' onClick={onToggleIndex}>
          {isIndexed ? 'De-index' : 'Index'}
        </Button>
      </td>
    </tr>
  );
}
