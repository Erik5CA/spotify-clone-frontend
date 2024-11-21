import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Album } from "lucide-react";
import AlbumTable from "./AlbumTable";
import AddAlbumDialog from "./AddAlbumDialog";

const AlbumTabContent = () => {
  return (
    <Card className="bg-zinc-800/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Album className="size-5 text-emerald-500" />
              Albums Library
            </CardTitle>
            <CardDescription>Manage your albums</CardDescription>
          </div>
          <AddAlbumDialog />
        </div>
      </CardHeader>
      <CardContent>
        <AlbumTable />
      </CardContent>
    </Card>
  );
};

export default AlbumTabContent;
