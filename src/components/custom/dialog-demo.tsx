 
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
 
import { ChevronDown } from "lucide-react";
import { languages } from "@/constants/languages";
import Link from "next/link";

export function DialogDemo({ language_title = "", }) {
 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{language_title} <ChevronDown /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Language</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        {
          languages.map((items,index)=>{
            return(
              <Link className="p-2 hover:bg-slate-100  dark:hover:hover:bg-slate-800 rounded-md" key={index}  href={"/"+items.lang}>{items.name}</Link>
            )
          })
        }
   
        {/* <DialogFooter>
          <Button type="button" onClick={handleSave}>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
