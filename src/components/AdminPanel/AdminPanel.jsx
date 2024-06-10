import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { User, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./AdminPanel.css";
import { FolderKey } from "lucide-react";

export default function AdminPanel() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
          header.style.opacity = isDialogOpen ? '0' : '1';
        }
      }, [isDialogOpen]);

    const handleDialogOpen = () => {
      setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
      setIsDialogOpen(false);
    };
  return (
    <>
      <Dialog
        className="inter-font"
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DialogTrigger asChild className="absolute left-4 -translate-y-1">
          <Button
            size="icon"
            variant="ghost"
            className="link-anim text-base"
            onClick={handleDialogOpen}
          >
            <FolderKey />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] inter-font">
          <DialogHeader>
            <DialogTitle className="tracking-normal">
              Přihlášení do systému
            </DialogTitle>
            <br />
            <DialogDescription>
              Níže uvedený přihlašovací dialog slouží pouze k přihlášení do
              administrace webových stránek Plzeňského kraje a pro přístup
              volených zástupců kraje k materiálům předložených na jednání
              jednotlivých orgánů kraje.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 inter-font">
            <div className="flex justify-between align-center text-muted-foreground">
              Uživatelské jméno
              <User />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                defaultValue=""
                className="col-span-4"
                placeholder="Uživatelské jméno"
              />
            </div>
            <div className="flex justify-between align-center text-muted-foreground">
              Heslo
              <KeyRound />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="password"
                type="password"
                defaultValue=""
                className="col-span-4"
                placeholder="Heslo"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleDialogClose}>Přihlásit se</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
