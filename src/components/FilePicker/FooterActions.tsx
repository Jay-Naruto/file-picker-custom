import { Button } from "../ui/button";

export default function FooterActions({
  selected,
  onClear,
  onBulkToggleIndex,
}: {
  selected: string[];
  onClear: () => void;
  onBulkToggleIndex: (action: "index" | "deindex") => void;
}) {
  if (selected.length === 0) return null;

  return (
    <div className="flex justify-end items-center gap-4 px-4 py-3 border-t mt-4">
      <Button variant="secondary" className="cursor-pointer" onClick={onClear}>
        Cancel
      </Button>
      <Button className="cursor-pointer"  onClick={() => onBulkToggleIndex("index")}>
        Index {selected.length} selected
      </Button>
      <Button className="cursor-pointer"  variant="destructive" onClick={() => onBulkToggleIndex("deindex")}>
        De-index {selected.length} selected
      </Button>
    </div>
  );
}
