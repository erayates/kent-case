import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";

interface DeleteDialogProps {
  onDelete: () => void;
}

export function DeleteDialog({ onDelete }: DeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete a product</DialogTitle>
          <DialogDescription>
            This process cannot be undone. Are you sure you want to delete this
            product?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button type="submit" variant="outline">
              Close
            </Button>
          </DialogClose>

          <Button type="submit" onClick={onDelete} variant="destructive">
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
